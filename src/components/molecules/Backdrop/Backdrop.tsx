import React, { FunctionComponent } from 'react';
import { css } from "@emotion/react";

interface OwnProps {
  onClick: any;
}

type Props = OwnProps;

const Backdrop: FunctionComponent<Props> = ({ onClick }) => {
  return (
    <div
      css={css`
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 10000;
        background-color: hsla(221, 0%, 72%, 0.2);
      `}
      onClick={onClick}
    />
  );
};

export default Backdrop;
