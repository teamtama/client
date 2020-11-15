import React from 'react';
import BaseLayout from '../components/templates/BaseLayout/BaseLayout';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { createApolloClient } from '../lib/client';
import {
  GetNoticeListDocument,
  GetNoticeListQuery,
  MeDocument,
  MeQuery,
  NoticeCategory,
  QueryGetNoticeListArgs,
} from '../generated/graphql';
import EventListComponent from '../components/organisms/EventListComponent/EventListComponent';

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
  await apolloClient.query<GetNoticeListQuery, QueryGetNoticeListArgs>({
    query: GetNoticeListDocument,
    variables: {
      category: NoticeCategory.Event,
      first: '300',
    },
  });
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

const Index: NextPage<Props> = () => {
  return (
    <BaseLayout hasNavigator>
      <EventListComponent />
    </BaseLayout>
  );
};

export default Index;
