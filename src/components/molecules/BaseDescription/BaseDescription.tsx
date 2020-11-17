import React, { FunctionComponent } from 'react';
import QuillReadOnly from '../../atoms/Quill/QuillReadOnly';
import { css } from '@emotion/react';

interface OwnProps {
  text: string;
}

type Props = OwnProps;

const BaseDescription: FunctionComponent<Props> = ({ text }) => {
  return (
    <div
      css={css`
        .ql-container.ql-snow {
          border: none;
        }
        .ql-editor {
          padding: 0;
          margin: 0;
        }
      `}
    >
      <QuillReadOnly body={text} />
    </div>
  );
};

export default BaseDescription;
