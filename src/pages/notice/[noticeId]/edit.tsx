import React, { FunctionComponent } from 'react';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { createApolloClient } from '../../../lib/client';
import {
  MeDocument,
  MeQuery,
  useGetNoticeQuery,
  useMeQuery,
  UserRole,
} from '../../../generated/graphql';
import BaseLayout from '../../../components/templates/BaseLayout/BaseLayout';
import { useRouter } from 'next/router';
import NoticeForm from '../../../components/organisms/NoticeForm/NoticeForm';

interface OwnProps {}

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

const NoticeEdit: NextPage<Props> = () => {
  const router = useRouter();

  const { data: noticeData } = useGetNoticeQuery({
    variables: {
      noticeId: router.query.noticeId as string,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first',
    ssr: true,
  });
  return (
    <BaseLayout pageName={noticeData?.getNotice.title}>
      <NoticeForm
        isEdit
        noticeId={noticeData?.getNotice.id}
        notice={noticeData?.getNotice}
      />
    </BaseLayout>
  );
};

export default NoticeEdit;
