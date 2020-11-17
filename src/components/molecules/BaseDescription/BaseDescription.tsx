import React, { FunctionComponent } from 'react';
import { css } from '@emotion/react';

interface OwnProps {}

type Props = OwnProps;

const BaseDescription: FunctionComponent<Props> = ({ children }) => {
  return (
    <div
      css={css`
        word-wrap: break-word;
        img {
          max-width: 100%;
        }
        * {
          all: revert;
        }
      `}
    >
      {children}
    </div>
  );
};

export default BaseDescription;
