import React, { FunctionComponent } from 'react';
import { Controller, UseFormMethods } from 'react-hook-form';
import BaseInput from '../../molecules/BaseInput/BaseInput';
import Button from '../../atoms/Button/Button';
import { css, useTheme } from '@emotion/react';

interface OwnProps {
  handleSubmit: UseFormMethods['handleSubmit'];
  control: UseFormMethods['control'];
  onSubmit: (data: any) => void;
  errors: UseFormMethods['errors'];
  isRegister?: boolean;
  loading?: boolean;
}

type Props = OwnProps;

const AuthForm: FunctionComponent<Props> = ({
  handleSubmit,
  onSubmit,
  control,
  errors,
  isRegister = false,
  loading = false,
}) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        width: 100%;
        display: grid;
        grid-gap: ${theme.space * 2}px;
      `}
      onSubmit={handleSubmit(onSubmit)}
    >
      {isRegister && (
        <Controller
          control={control}
          name={'username'}
          render={({ onChange }) => (
            <BaseInput
              required
              onChange={onChange}
              label={'Username'}
              errorMessage={errors.username?.message}
            />
          )}
        />
      )}
      <Controller
        control={control}
        name={'email'}
        render={({ onChange }) => (
          <BaseInput
            required
            onChange={onChange}
            label={'Email'}
            errorMessage={errors.email?.message}
          />
        )}
      />
      <Controller
        control={control}
        name={'password'}
        render={({ onChange }) => (
          <BaseInput
            type={'password'}
            required
            onChange={onChange}
            label={'Password'}
            errorMessage={errors.password?.message}
          />
        )}
      />
      <Button disabled={loading} type={'submit'}>
        {loading ? 'LOADING...' : isRegister ? 'REGISTER' : 'LOG IN'}
      </Button>
    </div>
  );
};

export default AuthForm;
