import React, { FunctionComponent, useState } from 'react';
import { Controller } from 'react-hook-form';
import BaseInput from '../../molecules/BaseInput/BaseInput';
import Quill from '../../atoms/Quill/Quill';
import Button from '../../atoms/Button/Button';
import { css, useTheme } from '@emotion/react';
import ThumbnailInput from '../../molecules/ThumbnailInput/ThumbnailInput';
import useNoticeCrud from '../../../utils/hooks/useNoticeCrud';

interface OwnProps {
  isEdit?: boolean;
  noticeId?: string;
  notice?: any;
}

type Props = OwnProps;

const NoticeForm: FunctionComponent<Props> = ({
  isEdit = false,
  noticeId,
  notice,
}) => {
  const theme = useTheme();
  const { handleSubmit, onSubmit, errors, control } = useNoticeCrud({
    isEdit,
    noticeId,
    notice,
  });

  const [file, setFile] = useState<Blob | null>(null);

  return (
    <form
      css={css`
        display: grid;
        grid-gap: ${theme.space * 4}px;
      `}
      onSubmit={handleSubmit((data: any) =>
        onSubmit({ ...data, thumbnail: file }),
      )}
    >
      <Controller
        control={control}
        name={'title'}
        render={({ value, onChange }) => (
          <BaseInput
            required
            value={value}
            onChange={onChange}
            label={'Title'}
            errorMessage={errors.title?.message}
            placeholder={'타이틀을 입력해주세요. '}
          />
        )}
      />
      <Controller
        control={control}
        name={'description'}
        render={({ onChange, value }) => (
          <Quill
            label={'Description'}
            required
            body={value}
            onChange={onChange}
            placeholder={'본문을 입력해주세요. '}
            errorMessage={errors.description?.message}
          />
        )}
      />
      <Controller
        control={control}
        name={'thumbnail'}
        render={() => <ThumbnailInput state={file} setState={setFile} />}
      />
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <Button type={'submit'}>{isEdit ? 'Edit' : 'Create'}</Button>
      </div>
    </form>
  );
};

export default NoticeForm;
