import React, { FunctionComponent } from 'react';
import { BiCommentDetail } from 'react-icons/bi';
import { TiHeart } from 'react-icons/ti';
import Typography from '../../atoms/Typography/Typography';
import { css, useTheme } from '@emotion/react';

interface OwnProps {
  className?: string;
  likeCount?: number;
  commentCount?: number;
}

type Props = OwnProps;

const DetailPageInfo: FunctionComponent<Props> = ({
  className,
  likeCount,
  commentCount,
  ...otherProps
}) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-around;
        align-items: center;
      `}
      className={className}
      {...otherProps}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          gap: ${theme.space / 1.5}px;
        `}
      >
        <TiHeart
          css={css`
            font-size: 2rem;
            color: ${theme.colors.red};
          `}
        />
        <Typography
          css={css`
            font-size: 1.2rem;
          `}
        >
          {likeCount}
        </Typography>
      </div>
      <div
        css={css`
          display: flex;
          align-items: center;
          gap: ${theme.space / 1.5}px;
        `}
      >
        <BiCommentDetail
          css={css`
            font-size: 1.8rem;
            color: ${theme.colors.secondBlack};
          `}
        />
        <Typography
          css={css`
            font-size: 1.2rem;
          `}
        >
          {commentCount}
        </Typography>
      </div>
    </div>
  );
};

export default DetailPageInfo;
