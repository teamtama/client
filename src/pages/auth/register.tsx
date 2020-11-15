import React from 'react';
import BaseLayout from '../../components/templates/BaseLayout/BaseLayout';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '../../utils/contexts/AuthContext';
import RegisterTemplate from '../../components/templates/auth/register/RegisterTemplate';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { createApolloClient } from '../../lib/client';
import { MeDocument, MeQuery } from '../../generated/graphql';

type SchemaType = {
  username: string;
  email: string;
  password: string;
};

const schema = yup.object().shape({
  username: yup.string().max(30).required(),
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

const register: NextPage<Props> = () => {
  const { register, registerLoading } = useAuth();

  const { handleSubmit, errors, control } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  });

  const onSubmit = async ({ username, email, password }: SchemaType) => {
    await register(username, email, password);
  };

  return (
    <BaseLayout pageName={'Register'}>
      <RegisterTemplate
        handleSubmit={handleSubmit}
        control={control}
        onSubmit={onSubmit}
        errors={errors}
        loading={registerLoading}
      />
    </BaseLayout>
  );
};

export default register;
