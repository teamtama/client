import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AlertContext } from '../contexts/AlertContext';
import useUploadImage from './useUploadImage';
import {
  BoardCategory,
  GetBoardListDocument,
  useCreateBoardMutation,
  useUpdateBoardMutation,
} from '../../generated/graphql';


export type SchemaType = {
  category: BoardCategory;
  title: string;
  description: string;
  thumbnail: Blob;
};

export const schema = yup.object().shape({
  category: yup.string().required(),
  title: yup.string().required().max(60),
  description: yup.string().required().matches(new RegExp('[^<p><br><\\/p>]')),
});

const useBoardCrud = ({
  isEdit = false,
  boardId,
  board,
}: {
  isEdit?: boolean;
  boardId?: string;
  board?: any;
}) => {
  const route = useRouter();
  const { setAlert } = useContext(AlertContext);
  const { uploadImage } = useUploadImage();
  const [createBoardMutation] = useCreateBoardMutation({
    notifyOnNetworkStatusChange: true,
  });
  const [updateBoardMutation] = useUpdateBoardMutation({
    notifyOnNetworkStatusChange: true,
  });

  const { handleSubmit, errors, control, setValue } = useForm<SchemaType>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      category: BoardCategory.Free,
      title: '',
      description: '',
      thumbnail: '',
    },
  });

  const onSubmit = async ({
    category,
    title,
    description,
    thumbnail,
  }: SchemaType) => {
    try {
      const downloadUrl = await uploadImage({
        blob: thumbnail,
        filename: 'board',
        ext: 'jpeg',
      });
      if (isEdit) {
        if (boardId) {
          await updateBoardMutation({
            variables: {
              input: {
                boardId,
                category,
                title,
                description,
                thumbnail: downloadUrl,
              },
            },
            refetchQueries: [
              { query: GetBoardListDocument, variables: { first: '4' } },
            ],
          });
        }
      } else {
        await createBoardMutation({
          variables: {
            input: {
              category,
              title,
              description,
              thumbnail: downloadUrl ?? null,
            },
          },
        });
      }
      await route.replace('/board');
    } catch (e) {
      e.networkError.result.errors.map((err: any) => {
        setAlert(err.message, 'error');
      });
    }
  };

  useEffect(() => {
    if (board) {
      setValue('category', board?.category ?? '');
      setValue('title', board?.title ?? '');
      setValue('description', board?.description ?? '');
      setValue('thumbnail', board?.thumbnail ?? '');
    }
  }, [board]);

  return {
    onSubmit: handleSubmit(onSubmit),
    errors,
    control,
  };
};

export default useBoardCrud;
