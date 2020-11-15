import React from 'react';
import BoardForm from '../../../components/organisms/BoardForm/BoardForm';
import BaseLayout from '../../../components/templates/BaseLayout/BaseLayout';
import {
  GetBoardDocument,
  GetBoardQuery,
  MeDocument,
  MeQuery,
  QueryGetBoardArgs,
} from '../../../generated/graphql';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { createApolloClient } from '../../../lib/client';

export const getServerSideProps = async ({
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
  if (!meData) {
    return {
      redirect: {
        permanent: false,
        destination: '/auth/login',
      },
    };
  }
  const { data: boardData } = await apolloClient.query<
    GetBoardQuery,
    QueryGetBoardArgs
  >({
    query: GetBoardDocument,
    variables: {
      boardId: params?.boardId as string,
    },
    context: {
      headers: {
        cookie: req.headers.cookie,
      },
    },
    errorPolicy: 'all',
  });
  if (!boardData) {
    return {
      redirect: {
        permanent: false,
        destination: '/board',
      },
    };
  }
  if (meData.me.id !== boardData.getBoard.userId) {
    return {
      redirect: {
        permanent: false,
        destination: '/board',
      },
    };
  }
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      data: {
        isLoggedIn: !!meData,
        user: meData?.me ?? null,
        board: boardData.getBoard,
      },
    },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const BoardEdit: NextPage<Props> = ({ data }) => {
  return (
    <BaseLayout pageName={'Edit Board'}>
      <BoardForm boardId={data.board.id} board={data.board} isEdit />
    </BaseLayout>
  );
};

export default BoardEdit;
