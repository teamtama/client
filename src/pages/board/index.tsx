import React from 'react';
import BaseLayout from '../../components/templates/BaseLayout/BaseLayout';
import Boards from '../../components/organisms/Boards/Boards';
import {
  GetBoardListDocument,
  GetBoardListQuery,
  MeDocument,
  MeQuery,
  QueryGetBoardListArgs,
} from '../../generated/graphql';
import { useRouter } from 'next/router';
import CircleButton from '../../components/atoms/CircleButton/CircleButton';
import { MdCreate } from 'react-icons/md';
import { theme } from '../../style';
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
  await apolloClient.query<GetBoardListQuery, QueryGetBoardListArgs>({
    query: GetBoardListDocument,
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

const BoardList: NextPage<Props> = () => {
  const router = useRouter();

  return (
    <BaseLayout hasNavigator>
      <Boards />
      <CircleButton
        onClick={() => router.push('/board/create')}
        bgColor={theme.colors.yellow}
        icon={<MdCreate fontSize={'1.2rem'} />}
      />
    </BaseLayout>
  );
};

export default BoardList;
