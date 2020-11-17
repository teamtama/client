import React, { FunctionComponent } from 'react';
import parse from 'html-react-parser';
import { SimpleUserFieldsFragment } from '../../../generated/graphql';
import UserInfo from '../UserInfo/UserInfo';
import dayjs from 'dayjs';
import BaseTitle from '../../molecules/BaseTitle/BaseTitle';
import DetailPageInfo from '../DetailPageInfo/DetailPageInfo';
import BaseDescription from '../../molecules/BaseDescription/BaseDescription';
import MoreAction from '../../molecules/MoreAction/MoreAction';
import { css } from '@emotion/react';

export type MoreActionType = {
  label: string;
  onClick: any;
  color?: string;
};

interface OwnProps {
  title: string;
  createdAt: string;
  description: string;
  user: SimpleUserFieldsFragment;
  likeCount?: number;
  commentCount?: number;
  moreActions?: MoreActionType[];
  isAuthor?: boolean;
  hasPageInfo?: boolean;
}

type Props = OwnProps;

const BaseDetail: FunctionComponent<Props> = ({
  title,
  createdAt,
  description,
  user,
  likeCount,
  commentCount,
  moreActions,
  isAuthor = false,
  hasPageInfo = false,
}) => {
  return (
    <div
      css={css`
        display: grid;
        grid-gap: 32px;
        margin: 32px 0;
      `}
    >
      <BaseTitle>{title}</BaseTitle>
      <div
        css={css`
          display: flex;
        `}
      >
        <UserInfo
          createdAt={dayjs(createdAt).format('YYYY. MM. DD  hh:mm:ss')}
          avatar={user.avatar}
          username={user.username}
          introduce={user.email}
        />
        {moreActions && isAuthor && (
          <MoreAction isAuthor={isAuthor} moreActions={moreActions} />
        )}
      </div>
      {hasPageInfo && (
        <DetailPageInfo likeCount={likeCount} commentCount={commentCount} />
      )}
      <BaseDescription text={description} />
    </div>
  );
};

export default BaseDetail;
