import React, { FunctionComponent } from 'react';
import BaseComment from '../../molecules/BaseComment/BaseComment';
import { BoardComment } from '../../../generated/graphql';
import dayjs from 'dayjs';
import { css, useTheme } from '@emotion/react';

interface OwnProps {
  comments: BoardComment[];
}

type Props = OwnProps;

const Comments: FunctionComponent<Props> = ({ comments }) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: grid;
        flex-direction: column;
        grid-gap: ${theme.space * 4}px;
      `}
    >
      {comments.map((comment: any) => (
        <BaseComment
          key={comment.id}
          user={comment.user}
          createdAt={dayjs(comment.createdAt).format('YYYY. MM. DD  hh:mm:ss')}
          body={comment.body}
        />
      ))}
    </div>
  );
};

export default Comments;
