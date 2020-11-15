import React, { FunctionComponent } from 'react';
import {
  NoticeCategory,
  useGetNoticeListQuery,
} from '../../../generated/graphql';
import Button from '../../atoms/Button/Button';
import { theme } from '../../../style';
import CardFive from '../CardFive/CardFive';
import { cleanDateYearMonthDay } from '../../../utils/helpers/dateHelpers';
import { css, useTheme } from '@emotion/react';

interface OwnProps {}

type Props = OwnProps;

const Notices: FunctionComponent<Props> = () => {
  const theme = useTheme();
  const { data, fetchMore } = useGetNoticeListQuery({
    fetchPolicy: 'cache-first',
    notifyOnNetworkStatusChange: true,
    variables: {
      category: NoticeCategory.Notice,
    },
  });

  const onClickMore = async () => {
    await fetchMore({
      variables: {
        after: data?.getNoticeList?.pageInfo?.endCursor,
      },
    });
  };

  const edges = data?.getNoticeList?.edges;
  const hasNextPage = data?.getNoticeList?.pageInfo?.hasNextPage;

  return (
    <div
      css={css`
        padding: 0 ${theme.space * 2}px;
      `}
    >
      <div
        css={css`
          display: grid;
        `}
      >
        {edges?.map((edge) => (
          <CardFive
            key={edge.cursor}
            href={{
              pathname: '/notice/[noticeId]',
              query: { noticeId: edge.cursor },
            }}
            title={edge.node.title}
            date={cleanDateYearMonthDay(edge.node.createdAt)}
            thumbnail={edge.node.thumbnail}
          />
        ))}
      </div>
      {hasNextPage && (
        <Button onClick={onClickMore} color={theme.colors.yellow}>
          fetch more
        </Button>
      )}
    </div>
  );
};

export default Notices;
