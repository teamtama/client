import React, { FunctionComponent } from 'react';
import { css } from "@emotion/react";

interface OwnProps {
  gap: number;
  className?: string;
}

type Props = OwnProps;

const GridLayout: FunctionComponent<Props> = ({
  gap,
  children,
  className,
  ...otherProps
}) => {
  return (
    <div
      css={css`
        display: grid;
        grid-gap: ${gap}px;
      `}
      className={className}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default GridLayout;
