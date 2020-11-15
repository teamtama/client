import React, { FunctionComponent } from 'react';
import { css, useTheme } from '@emotion/react';

interface OwnProps {
  bgColor: string;
  color: string;
  text: string;
  className?: string;
}

type Props = OwnProps;

const TagComponent: FunctionComponent<Props> = ({
  bgColor,
  color,
  text,
  className,
  ...otherProps
}) => {
  const theme = useTheme();
  return (
    <strong
      className={className}
      css={css`
        color: ${color};
        background-color: ${bgColor};
        padding: ${theme.space / 3}px ${theme.space / 2}px;
        border-radius: 4px;
        text-transform: uppercase;
        margin-bottom: ${theme.space / 2}px;
        display: inline-block;
      `}
      {...otherProps}
    >
      {text}
    </strong>
  );
};

export default TagComponent;
