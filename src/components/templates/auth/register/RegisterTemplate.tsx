import React, { FunctionComponent } from 'react';
import AuthForm from '../../../organisms/AuthForm/AuthForm';
import AuthGoogle from '../../../organisms/AuthGoogle/AuthGoogle';
import Typography from '../../../atoms/Typography/Typography';
import Link from 'next/link';
import { UseFormMethods } from 'react-hook-form';
import { css, useTheme } from '@emotion/react';

interface OwnProps {
  handleSubmit: UseFormMethods['handleSubmit'];
  control: UseFormMethods['control'];
  onSubmit: (data: any) => void;
  errors: UseFormMethods['errors'];
  loading?: boolean;
}

type Props = OwnProps;

const RegisterTemplate: FunctionComponent<Props> = ({
  handleSubmit,
  onSubmit,
  control,
  errors,
  loading = false,
}) => {
  const theme = useTheme()
  return (
    <div
      css={css`
        display: grid;
        grid-gap: ${theme.space * 4}px;
        padding: 0 128px;
        justify-items: center;
        a {
          color: ${theme.alert.primary};
        }
      `}
    >
      <AuthForm
        control={control}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        loading={loading}
        isRegister
      />
      <div>or</div>
      <AuthGoogle isRegister />
      <div>
        <Typography>Already have an account?</Typography>{' '}
        <Link href={'/auth/login'}>
          <a>
            <Typography>Login</Typography>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default RegisterTemplate;
