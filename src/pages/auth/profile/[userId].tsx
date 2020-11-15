import React from 'react';
import BaseLayout from '../../../components/templates/BaseLayout/BaseLayout';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { createApolloClient } from '../../../lib/client';
import { MeDocument, MeQuery } from '../../../generated/graphql';
import ProfileTemplate from '../../../components/templates/auth/profile/ProfileTemplate';
import { useAuth } from '../../../utils/contexts/AuthContext';

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
        user: meData?.me || null,
      },
    },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const profile: NextPage<Props> = () => {
  const { currentUser } = useAuth();
  return (
    <BaseLayout pageName={'Profile'}>
      <ProfileTemplate currentUser={currentUser} />
    </BaseLayout>
  );
};

export default profile;
