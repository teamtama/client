import React, { FunctionComponent } from 'react';
import dynamic from 'next/dynamic';

interface OwnProps {
  body: string;
}

type Props = OwnProps;

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    return ({ forwardedRef, ...props }: any) => {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  {
    ssr: false,
  },
);

const QuillReadOnly: FunctionComponent<Props> = ({ body }) => {
  return (
    <ReactQuill
      value={body}
      modules={{
        toolbar: false,
      }}
      readOnly
    />
  );
};

export default QuillReadOnly;
