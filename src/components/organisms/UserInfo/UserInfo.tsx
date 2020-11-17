import React, { FunctionComponent } from 'react';
import Avatar from '../../molecules/Avatar/Avatar';
import { css, useTheme } from '@emotion/react';
import Typography from '../../atoms/Typography/Typography';

interface OwnProps {
  className?: string;
  avatar?: string;
  username: string;
  createdAt: string;
  introduce?: string;
}

type Props = OwnProps;

const UserInfo: FunctionComponent<Props> = ({
  className,
  avatar,
  username,
  createdAt,
  introduce,
  ...otherProps
}) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        align-items: center;
        gap: ${theme.space * 2}px;
      `}
      className={className}
      {...otherProps}
    >
      <div>
        <Avatar src={avatar} />
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          gap: ${theme.space / 2}px;
        `}
      >
        <div>
          <Typography
            css={css`
              font-size: 1.6rem;
            `}
          >
            {username}
          </Typography>
          <Typography
            css={css`
              font-size: 1.4rem;
              color: ${theme.colors.darkGray};
            `}
          >
            {' '}
            | {createdAt}
          </Typography>
        </div>
        {introduce && (
          <p
            css={css`
              font-size: 1.2rem;
              color: ${theme.colors.darkGray};
            `}
          >
            {introduce}
          </p>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
