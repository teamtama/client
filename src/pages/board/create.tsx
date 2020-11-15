import React from 'react';
import BaseLayout from '../../components/templates/BaseLayout/BaseLayout';
import BoardForm from '../../components/organisms/BoardForm/BoardForm';
import { MeDocument, MeQuery } from '../../generated/graphql';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { createApolloClient } from '../../lib/client';

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
  if (!meData) {
    return {
      redirect: {
        permanent: false,
        destination: '/auth/login',
      },
    };
  }
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      data: {
        isLoggedIn: !!meData,
        user: meData?.me ?? null,
      },
    },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const BoardCreate: NextPage<Props> = () => {
  return (
    <BaseLayout pageName={'Create'}>
      <BoardForm />
    </BaseLayout>
  );
};
export default BoardCreate;
