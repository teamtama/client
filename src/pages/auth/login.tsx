import React from 'react';
import BaseLayout from '../../components/templates/BaseLayout/BaseLayout';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '../../utils/contexts/AuthContext';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import LoginTemplate from '../../components/templates/auth/login/LoginTemplate';
import { createApolloClient } from '../../lib/client';
import { MeDocument, MeQuery } from '../../generated/graphql';

type SchemaType = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().email().max(255).required(),
  password: yup.string().max(20).required(),
});

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const apolloClient = createApolloClient();
  const { data: meData } = await apolloClient.query<MeQuery>({
    query: MeDocument,
    context: {
      headers: {
        cookie: req.headers.cookie,
      },
    },
    errorPolicy: 'all',
  });
  if (meData) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      data: {
        isLoggedIn: !!meData,
        user: null,
      },
    },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const login: NextPage<Props> = () => {
  const { localLogin, loginLoading } = useAuth();

  const onSubmit = async ({ email, password }: SchemaType) => {
    await localLogin(email, password);
  };

  const { handleSubmit, errors, control } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <BaseLayout pageName={'Login'}>
      <LoginTemplate
        handleSubmit={handleSubmit}
        control={control}
        onSubmit={onSubmit}
        errors={errors}
        loading={loginLoading}
      />
    </BaseLayout>
  );
};

export default login;
