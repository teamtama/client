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

const LoginTemplate: FunctionComponent<Props> = ({
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
      />
      <div>or</div>
      <AuthGoogle />
      <div>
        <Typography>Don’t have an account?</Typography>{' '}
        <Link href={'/auth/register'}>
          <a>
            <Typography>Register</Typography>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default LoginTemplate;
