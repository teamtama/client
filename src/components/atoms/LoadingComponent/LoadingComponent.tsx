import React, { FunctionComponent } from 'react';
import { ClipLoader } from 'react-spinners';
import { css } from "@emotion/react";

interface OwnProps {
  size: number;
  color: string;
  loading: boolean;
}

type Props = OwnProps;

const LoadingComponent: FunctionComponent<Props> = ({
  size,
  color,
  loading,
}) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${size}px;
        height: ${size}px;
      `}
    >
      <ClipLoader size={size / 2} color={color} loading={loading} />
    </div>
  );
};

export default LoadingComponent;
