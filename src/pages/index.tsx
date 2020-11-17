import React, { useEffect } from 'react';
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
import EventList from '../components/organisms/EventList/EventList';
import Input from '../components/atoms/Input/Input';
import Button from '../components/atoms/Button/Button';

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
  const inputRef = React.useRef<HTMLInputElement>(null);
  const secondInputRef = React.useRef<HTMLInputElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    secondInputRef?.current?.focus();
  }, []);

  return (
    <BaseLayout hasNavigator>
      <Input ref={inputRef} disabled/>
      <Input ref={secondInputRef} />
      <Button ref={buttonRef}>Click me!</Button>
    </BaseLayout>
  );
};

export default Index;
