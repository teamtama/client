import React, { FunctionComponent } from 'react';
import Avatar from '../Avatar/Avatar';
import Typography from '../../atoms/Typography/Typography';
import { css } from '@emotion/react';

interface OwnProps {
  avatar?: string;
  username: string;
  direction?: 'column' | 'row';
  className?: string;
}

type Props = OwnProps;

const SimpleUser: FunctionComponent<Props> = ({
  avatar,
  username,
  direction = 'row',
  className,
  ...otherProps
}) => {
  return (
    <div
      css={css`
        display: flex;
        gap: 6px;
        justify-content: center;
        align-items: center;
        flex-direction: ${direction};
      `}
      className={className}
      {...otherProps}
    >
      <Avatar src={avatar} />
      <Typography
        css={css`
          text-align: center;
          font-size: 0.6rem;
        `}
      >
        {username}
      </Typography>
    </div>
  );
};

export default SimpleUser;
