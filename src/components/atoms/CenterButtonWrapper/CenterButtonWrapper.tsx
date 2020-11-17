import React, { FunctionComponent } from 'react';
import { css } from "@emotion/react";

interface OwnProps {
  className?: string;
}

type Props = OwnProps;

const CenterButtonWrapper: FunctionComponent<Props> = ({
  children,
  className,
  ...otherProps
}) => {
  return (
    <div
      css={css`
        width: 30%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
      `}
      className={className}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default CenterButtonWrapper;
