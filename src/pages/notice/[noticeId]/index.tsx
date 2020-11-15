import React, { useCallback } from 'react';
import BaseLayout from '../../../components/templates/BaseLayout/BaseLayout';
import BaseDetail from '../../../components/organisms/BaseDetail/BaseDetail';
import {
  GetNoticeDocument,
  GetNoticeQuery,
  MeDocument,
  MeQuery,
  QueryGetNoticeArgs,
  useDeleteNoticeMutation,
  useGetNoticeQuery,
  useMeQuery,
  UserRole,
} from '../../../generated/graphql';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { createApolloClient } from '../../../lib/client';
import { useRouter } from 'next/router';
import Button from '../../../components/atoms/Button/Button';
import { css } from '@emotion/react';
import { theme } from '../../../style';
import { useAlert } from '../../../utils/contexts/AlertContext';

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
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
  const { data: noticeData } = await apolloClient.query<
    GetNoticeQuery,
    QueryGetNoticeArgs
  >({
    query: GetNoticeDocument,
    variables: {
      noticeId: params?.noticeId as string,
    },
    context: {
      headers: {
        cookie: req.headers.cookie,
      },
    },
    errorPolicy: 'all',
  });
  if (!noticeData) {
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
      data: {
        isLoggedIn: !!meData,
        user: meData?.me ?? null,
      },
    },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const NoticeDetail: NextPage<Props> = ({ data }) => {
  const router = useRouter();
  const { setAlert } = useAlert();
  const { data: meData } = useMeQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first',
    ssr: true,
  });

  const { data: noticeData } = useGetNoticeQuery({
    variables: {
      noticeId: router.query.noticeId as string,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first',
    ssr: true,
  });

  const [deleteNoticeMutation] = useDeleteNoticeMutation({
    notifyOnNetworkStatusChange: true,
  });

  const onClickEditPage = useCallback(() => {
    router.replace({
      pathname: '/notice/[noticeId]/edit',
      query: { noticeId: noticeData?.getNotice.id },
    });
  }, []);

  const onClickDelete = useCallback(async () => {
    if (confirm('삭제하시겠습니까?')) {
      try {
        await deleteNoticeMutation({
          variables: {
            noticeId: router.query.noticeId as string,
          },
        });
        await router.replace({
          pathname: '/notice',
        });
      } catch (e) {
        e.networkError.result.errors.map((err: any) => {
          setAlert(err.message, 'error');
        });
      }
    }
  }, [router]);

  const moreActions = [
    {
      label: 'Edit Notice',
      onClick: () =>
        router.push({
          pathname: '/notice/[noticeId]/edit',
          query: { noticeId: router.query.noticeId as string },
        }),
    },
    {
      label: 'Delete Notice',
      onClick: () => onClickDelete(),
      color: theme.colors.red,
    },
  ];

  const isAuthor =
    data.user?.id === noticeData?.getNotice.user.id &&
    meData?.me.role === UserRole.Admin;

  if (!noticeData) {
    return null;
  }

  return (
    <BaseLayout pageName={noticeData.getNotice.title}>
      <BaseDetail
        title={noticeData.getNotice.title}
        description={noticeData.getNotice.description}
        createdAt={noticeData.getNotice.createdAt}
        user={noticeData.getNotice.user}
        moreActions={moreActions}
        isAuthor={isAuthor}
      />
    </BaseLayout>
  );
};

export default NoticeDetail;
