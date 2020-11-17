import React, { useCallback } from 'react';
import BaseLayout from '../../../components/templates/BaseLayout/BaseLayout';
import BaseDetail from '../../../components/organisms/BaseDetail/BaseDetail';
import { theme } from '../../../style';
import {
  BoardComment,
  GetBoardDocument,
  GetBoardQuery,
  MeDocument,
  MeQuery,
  QueryGetBoardArgs,
  useCreateBoardCommentMutation,
  useDeleteBoardMutation,
  useGetBoardQuery,
  useLikeMutation,
  useUnlikeMutation,
} from '../../../generated/graphql';
import { useRouter } from 'next/router';
import { useAlert } from '../../../utils/contexts/AlertContext';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { createApolloClient } from '../../../lib/client';
import LikeButton from '../../../components/molecules/LikeButton/LikeButton';
import CommentForm from '../../../components/organisms/CommentForm/CommentForm';
import Comments from '../../../components/organisms/Comments/Comments';
import GridLayout from '../../../components/templates/GridLayout/GridLayout';

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
  const { data: boardData } = await apolloClient.query<
    GetBoardQuery,
    QueryGetBoardArgs
  >({
    query: GetBoardDocument,
    variables: {
      boardId: params?.boardId as string,
    },
  });
  if (!boardData) {
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
        user: meData?.me || null,
      },
    },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const BoardDetail: NextPage<Props> = ({ data }) => {
  const router = useRouter();
  const { setAlert } = useAlert();

  const { data: boardData } = useGetBoardQuery({
    variables: {
      boardId: router.query.boardId as string,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first',
    ssr: true,
  });

  const [
    deleteBoardMutation,
    { loading: deleteBoardLoading },
  ] = useDeleteBoardMutation({
    notifyOnNetworkStatusChange: true,
  });

  const onClickDeleteBoard = useCallback(async () => {
    if (confirm('삭제하시겠습니까?')) {
      try {
        await deleteBoardMutation({
          variables: {
            boardId: router.query.boardId as string,
          },
        });
        await router.replace({
          pathname: '/board',
        });
      } catch (e) {
        e.networkError.result.errors.map((err: any) => {
          setAlert(err.message, 'error');
        });
      }
    }
  }, []);

  const [likeMutation, { loading: likeLoading }] = useLikeMutation({
    fetchPolicy: 'no-cache',
    awaitRefetchQueries: true,
    notifyOnNetworkStatusChange: true,
    variables: {
      boardId: router.query.boardId as string,
    },
    onError({ graphQLErrors }) {
      graphQLErrors.map((err) => {
        setAlert(err.message, 'error');
      });
    },
    refetchQueries: [
      {
        query: GetBoardDocument,
        variables: { boardId: router.query.boardId as string },
      },
    ],
  });

  const onClickLike = useCallback(async () => {
    await likeMutation();
  }, []);

  const [unlikeMutation, { loading: unlikeLoading }] = useUnlikeMutation({
    fetchPolicy: 'no-cache',
    awaitRefetchQueries: true,
    notifyOnNetworkStatusChange: true,
    variables: {
      boardId: router.query.boardId as string,
    },
    onError({ graphQLErrors }) {
      graphQLErrors.map((err) => {
        setAlert(err.message, 'error');
      });
    },
    refetchQueries: [
      {
        query: GetBoardDocument,
        variables: { boardId: router.query.boardId as string },
      },
    ],
  });

  const onClickUnlike = useCallback(async () => {
    await unlikeMutation();
  }, []);

  const [createCommentMutation] = useCreateBoardCommentMutation({
    fetchPolicy: 'no-cache',
    awaitRefetchQueries: true,
    notifyOnNetworkStatusChange: true,
    onError({ graphQLErrors }) {
      graphQLErrors.map((err) => {
        setAlert(err.message, 'error');
      });
    },
    refetchQueries: [
      {
        query: GetBoardDocument,
        variables: { boardId: router.query.boardId as string },
      },
    ],
  });

  const createBoardComment = useCallback(
    async (body: string) => {
      await createCommentMutation({
        variables: {
          input: {
            boardId: router.query.boardId as string,
            body,
          },
        },
        refetchQueries: [
          {
            query: GetBoardDocument,
            variables: { boardId: router.query.boardId as string },
          },
        ],
      });
    },
    [router.query.boardId],
  );

  const moreActions = [
    {
      label: 'Edit Board',
      onClick: () =>
        router.push({
          pathname: '/board/[boardId]/edit',
          query: { boardId: router.query.boardId as string },
        }),
    },
    {
      label: 'Delete Board',
      onClick: () => onClickDeleteBoard(),
      color: theme.colors.red,
    },
  ];

  if (!boardData) {
    return null;
  }

  const isAuthor = data.user?.id === boardData?.getBoard.userId || false;
  const isLiked = !!boardData?.getBoard.likes.find(
    (like) => like.userId === data.user?.id,
  );

  return (
    <BaseLayout
      pageName={boardData.getBoard.title}
      loading={deleteBoardLoading || likeLoading || unlikeLoading}
    >
      <GridLayout gap={48}>
        <BaseDetail
          title={boardData.getBoard.title}
          description={boardData.getBoard.description}
          createdAt={boardData.getBoard.createdAt}
          user={boardData.getBoard.user}
          likeCount={boardData.getBoard.likes.length}
          commentCount={boardData.getBoard.comments.length}
          moreActions={moreActions}
          isAuthor={isAuthor}
          hasPageInfo
        />
        {data.isLoggedIn && !isAuthor && (
          <LikeButton
            isLiked={isLiked}
            onClickLike={onClickLike}
            onClickUnlike={onClickUnlike}
          />
        )}
        {data.isLoggedIn && (
          <CommentForm createFunction={createBoardComment} />
        )}
        <Comments
          comments={boardData.getBoard.comments as BoardComment[]}
        />
      </GridLayout>
    </BaseLayout>
  );
};

export default BoardDetail;
