import React, { FunctionComponent } from 'react';
import Typography from '../../atoms/Typography/Typography';
import { css, useTheme } from '@emotion/react';

interface OwnProps {
  text: string;
  className?: string;
}

type Props = OwnProps;

const RadiusBox: FunctionComponent<Props> = ({
  text,
  className,
  ...otherProps
}) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: inline-flex;
        color: ${theme.colors.white};
        background-color: ${theme.colors.black};
        padding: ${theme.space * 1.5}px;
        border-radius: ${theme.space * 3}px;
      `}
      className={className}
      {...otherProps}
    >
      <Typography>{text}</Typography>
    </div>
  );
};

export default RadiusBox;
