import React, { FunctionComponent } from 'react';

interface OwnProps {
  text: string;
}

type Props = OwnProps;

const ErrorMessage: FunctionComponent<Props> = ({ text }) => {
  return <div>{text}</div>;
};

export default ErrorMessage;
