import React from 'react';
import BaseLayout from '../../components/templates/BaseLayout/BaseLayout';
import Notices from '../../components/organisms/Notices/Notices';
import { theme } from '../../style';
import { MdCreate } from 'react-icons/md';
import CircleButton from '../../components/atoms/CircleButton/CircleButton';
import { useRouter } from 'next/router';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { createApolloClient } from '../../lib/client';
import {
  GetNoticeListDocument,
  GetNoticeListQuery,
  MeDocument,
  MeQuery,
  NoticeCategory,
  QueryGetNoticeListArgs,
  UserRole,
} from '../../generated/graphql';

export const getServerSideProps: GetServerSideProps = async ({
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
  const { data: getNoticeListData } = await apolloClient.query<
    GetNoticeListQuery,
    QueryGetNoticeListArgs
  >({
    query: GetNoticeListDocument,
    variables: {
      category: NoticeCategory.Notice,
    },
    context: {
      headers: {
        cookie: req.headers.cookie,
      },
    },
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      data: {
        isLoggedIn: !!meData,
        user: meData?.me ?? null,
        noticeList: getNoticeListData?.getNoticeList,
      },
    },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const NoticeList: NextPage<Props> = ({ data }) => {
  const router = useRouter();
  return (
    <BaseLayout hasNavigator>
      <Notices />
      {data?.user?.role === UserRole.Admin && (
        <CircleButton
          onClick={() => router.push('/notice/create')}
          bgColor={theme.colors.yellow}
          icon={<MdCreate fontSize={'1.2rem'} />}
        />
      )}
    </BaseLayout>
  );
};

export default NoticeList;
