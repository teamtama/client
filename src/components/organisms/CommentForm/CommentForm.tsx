import React, { FunctionComponent } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { css, useTheme } from '@emotion/react';
import { schema, SchemaType } from './schema';

interface OwnProps {
  createFunction: (body: string) => void;
}

type Props = OwnProps;

const CommentForm: FunctionComponent<Props> = ({ createFunction }) => {
  const theme = useTheme();

  const { handleSubmit, control, setValue } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      body: '',
    },
  });

  const onSubmit = async ({ body }: SchemaType) => {
    try {
      await createFunction(body);
      setValue('body', '');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name={'body'}
        render={({ value, onChange }) => (
          <input
            css={css`
              width: 100%;
              height: 48px;
              padding: 0 ${theme.space * 2}px;
              outline: none;
            `}
            placeholder={'댓글을 입력해주세요 ...'}
            value={value}
            onChange={onChange}
          />
        )}
      />
    </form>
  );
};

export default CommentForm;
