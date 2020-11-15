import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { AlertContext } from '../contexts/AlertContext';
import useUploadImage from './useUploadImage';
import {
  GetNoticeListDocument,
  NoticeCategory,
  useCreateNoticeMutation,
  useUpdateNoticeMutation,
} from '../../generated/graphql';

export type NoticeSchemeType = {
  title: string;
  description: string;
  thumbnail: Blob;
};

export const schema = yup.object().shape({
  title: yup.string().required().max(100),
  description: yup.string().required().matches(new RegExp('[^<p><br><\\/p>]')),
});

const useNoticeCrud = ({
  isEdit = false,
  noticeId,
  notice,
}: {
  isEdit?: boolean;
  noticeId?: string;
  notice?: any;
}) => {
  const router = useRouter();
  const { setAlert } = useContext(AlertContext);
  const { uploadImage } = useUploadImage();
  const [createNoticeMutation] = useCreateNoticeMutation({
    notifyOnNetworkStatusChange: true,
  });
  const [updateNoticeMutation] = useUpdateNoticeMutation({
    notifyOnNetworkStatusChange: true,
  });

  const { handleSubmit, errors, control, setValue } = useForm<NoticeSchemeType>(
    {
      mode: 'all',
      resolver: yupResolver(schema),
      defaultValues: {
        title: '',
        description: '',
        thumbnail: '',
      },
    },
  );

  const onSubmit = async ({
    title,
    description,
    thumbnail,
  }: NoticeSchemeType) => {
    try {
      const downloadUrl = await uploadImage({
        blob: thumbnail,
        filename: 'notice',
        ext: 'jpeg',
      });
      if (isEdit) {
        if (noticeId) {
          await updateNoticeMutation({
            variables: {
              input: {
                noticeId,
                title,
                description,
                category: NoticeCategory.Notice,
                thumbnail: downloadUrl,
              },
            },
            refetchQueries: [
              {
                query: GetNoticeListDocument,
                variables: { category: NoticeCategory.Notice, first: '4' },
              },
            ],
          });
        }
      } else {
        await createNoticeMutation({
          variables: {
            input: {
              title,
              description,
              category: NoticeCategory.Notice,
              thumbnail: downloadUrl,
            },
          },
          refetchQueries: [
            {
              query: GetNoticeListDocument,
              variables: { category: NoticeCategory.Notice, first: '4' },
            },
          ],
        });
      }
      await router.push('/notice');
    } catch (e) {
      e.networkError.result.errors.map((err: any) => {
        setAlert(err.message, 'error');
      });
    }
  };

  useEffect(() => {
    if (notice) {
      setValue('title', notice?.title ?? '');
      setValue('description', notice?.description ?? '');
      setValue('thumbnail', notice?.thumbnail ?? '');
    }
  }, [notice]);

  return {
    handleSubmit,
    onSubmit,
    errors,
    control,
  };
};

export default useNoticeCrud;
