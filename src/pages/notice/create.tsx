import React from 'react';
import BaseLayout from '../../components/templates/BaseLayout/BaseLayout';
import { MeDocument, MeQuery, UserRole } from '../../generated/graphql';
import NoticeForm from '../../components/organisms/NoticeForm/NoticeForm';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { createApolloClient } from '../../lib/client';

export const getServerSideProps: GetServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  try {
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
    if (!meData || meData.me.role !== UserRole.Admin) {
      return {
        redirect: {
          permanent: false,
          destination: '/notice',
        },
      };
    }
    return {
      props: {
        initialApolloState: apolloClient.cache.extract(),
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {},
    };
  }
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const NoticeCreate: NextPage<Props> = () => {
  return (
    <BaseLayout pageName={'Notice Create'}>
      <NoticeForm />
    </BaseLayout>
  );
};

export default NoticeCreate;
