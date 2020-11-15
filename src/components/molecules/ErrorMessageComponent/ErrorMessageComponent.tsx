import React, { FunctionComponent } from 'react';
import { css, useTheme } from '@emotion/react';
import AlertIconComponent from '../../atoms/AlertIconComponent/AlertIconComponent';
import Typography from '../../atoms/Typography/Typography';

interface OwnProps {
  text: string;
  className?: string;
}

type Props = OwnProps;

const ErrorMessageComponent: FunctionComponent<Props> = ({
  text,
  className,
  ...otherProps
}) => {
  const theme = useTheme();
  return (
    <div
      className={className}
      css={css`
        margin: ${theme.space / 2}px 0;
        display: flex;
        align-items: flex-start;
      `}
      {...otherProps}
    >
      <AlertIconComponent iconSize={16} />
      <Typography
        css={css`
          margin-left: ${theme.space / 2}px;
          align-self: flex-start;
          color: ${theme.alert.error};
        `}
      >
        {text}
      </Typography>
    </div>
  );
};

export default ErrorMessageComponent;
