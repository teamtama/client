import React, { FunctionComponent } from 'react';
import IconButton from '../IconButton/IconButton';
import { TiHeart, TiHeartOutline } from 'react-icons/ti';
import { css, useTheme } from '@emotion/react';

interface OwnProps {
  isLiked: boolean;
  onClickLike: any;
  onClickUnlike: any;
  className?: string;
}

type Props = OwnProps;

const LikeComponent: FunctionComponent<Props> = ({
  isLiked,
  onClickLike,
  onClickUnlike,
  className,
  ...otherProps
}) => {
  const theme = useTheme();
  if (isLiked) {
    return (
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
        className={className}
        {...otherProps}
      >
        <IconButton
          onClick={onClickUnlike}
          icon={<TiHeart size={'1.3rem'} />}
          text={'좋아요 취소'}
          bgColor={theme.colors.red}
        />
      </div>
    );
  } else {
    return (
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
        className={className}
        {...otherProps}
      >
        <IconButton
          onClick={onClickLike}
          icon={<TiHeartOutline size={'1.3rem'} />}
          text={'좋아요'}
          bgColor={theme.colors.red}
        />
      </div>
    );
  }
};

export default LikeComponent;
