import React, { FunctionComponent, useEffect, useState } from 'react';
import { theme } from '../../../style';
import Button from '../../atoms/Button/Button';
import {
  BoardCategory,
  useGetBoardListQuery,
} from '../../../generated/graphql';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { searchSchema, SearchSchemaType } from '../../molecules/Search/schema';
import CardFour from '../CardFour/CardFour';
import { cleanDate } from '../../../utils/helpers/dateHelpers';
import { mq } from '../../../utils/helpers/mq';
import { css } from '@emotion/react';
import BoardSearch from '../BoardSearch/BoardSearch';

const initialKeyword = '';

interface OwnProps {}

type Props = OwnProps;

const Boards: FunctionComponent<Props> = ({}) => {
  const router = useRouter();

  const [keyword, setKeyword] = useState(initialKeyword);
  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(searchSchema),
    defaultValues: {
      keyword: initialKeyword,
    },
  });

  const { data, fetchMore, refetch } = useGetBoardListQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first',
    variables: {
      first: '4',
      keyword,
      category: router.query.category as BoardCategory,
    },
    ssr: true,
  });

  const onClickMore = async () => {
    await fetchMore({
      variables: {
        after: data?.getBoardList?.pageInfo?.endCursor,
      },
    });
  };

  const onSubmit = async ({ keyword }: SearchSchemaType) => {
    await setKeyword(keyword);
    await refetch();
  };

  useEffect(() => {
    if (router.query.category) {
      refetch({
        category: router.query.category as BoardCategory,
      });
    } else {
      refetch();
    }
  }, [router.query.category]);

  if (!data) {
    return null;
  }

  const edges = data?.getBoardList?.edges;
  const hasNextPage = data?.getBoardList?.pageInfo?.hasNextPage;

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;
        ${mq('ph')`
          padding: 16px 0;
          `};
      `}
    >
      <BoardSearch
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        control={control}
      />
      {edges?.map((edge) => (
        <CardFour
          key={edge.cursor}
          createdAt={cleanDate(edge.node.createdAt)}
          title={edge.node.title}
          category={edge.node.category}
          href={`/board/${edge.cursor}`}
          commentLength={edge.node.comments.length}
          likeLength={edge.node.likes.length}
          username={edge.node.user.username}
          avatar={edge.node.user.avatar}
        />
      ))}
      {hasNextPage && (
        <Button onClick={onClickMore} color={theme.colors.yellow}>
          fetch more
        </Button>
      )}
    </div>
  );
};

export default Boards;
