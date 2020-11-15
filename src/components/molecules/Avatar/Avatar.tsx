import React, { FunctionComponent } from 'react';
import { css } from "@emotion/react";

interface OwnProps {
  size?: number;
  src?: string;
  onClick?: any;
  className?: string;
}

type Props = OwnProps;

const Avatar: FunctionComponent<Props> = ({
  size = 32,
  src,
  onClick,
  className,
  ...otherProps
}) => {
  return (
    <div
      css={css`
        cursor: pointer;
        position: relative;
        width: ${size}px;
        height: ${size}px;
      `}
      className={className}
      onClick={onClick}
      {...otherProps}
    >
      <img
        css={css`
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        `}
        src={
          src ??
          'https://powered-by-plants.co.uk/wp-content/uploads/2018/11/people.gif'
        }
        alt="avatar"
      />
    </div>
  );
};

export default Avatar;
