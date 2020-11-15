import React, { FunctionComponent } from 'react';
import parse from 'html-react-parser';
import { SimpleUserFieldsFragment } from '../../../generated/graphql';
import UserInfoComponent from '../UserInfoComponent/UserInfoComponent';
import dayjs from 'dayjs';
import BaseTitleComponent from '../../molecules/BaseTitleComponent/BaseTitleComponent';
import DetailPageInfoComponent from '../DetailPageInfoComponent/DetailPageInfoComponent';
import BaseDescriptionComponent from '../../molecules/BaseDescriptionComponent/BaseDescriptionComponent';
import MoreActionComponent from '../../molecules/MoreActionComponent/MoreActionComponent';
import { css } from '@emotion/react';

export type MoreAction = {
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
  moreActions?: MoreAction[];
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
      <BaseTitleComponent>{title}</BaseTitleComponent>
      <div
        css={css`
          display: flex;
        `}
      >
        <UserInfoComponent
          createdAt={dayjs(createdAt).format('YYYY. MM. DD  hh:mm:ss')}
          avatar={user.avatar}
          username={user.username}
          introduce={user.email}
        />
        {moreActions && isAuthor && (
          <MoreActionComponent isAuthor={isAuthor} moreActions={moreActions} />
        )}
      </div>
      {hasPageInfo && (
        <DetailPageInfoComponent
          likeCount={likeCount}
          commentCount={commentCount}
        />
      )}
      <BaseDescriptionComponent>{parse(description)}</BaseDescriptionComponent>
    </div>
  );
};

export default BaseDetail;
