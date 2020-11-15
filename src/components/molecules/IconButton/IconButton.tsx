import React, { FunctionComponent } from 'react';
import Typography from '../../atoms/Typography/Typography';
import { css, useTheme } from '@emotion/react';

interface OwnProps {
  icon: any;
  className?: any;
  text?: any;
  bgColor: string;
  onClick: any;
}

type Props = OwnProps;

const IconButton: FunctionComponent<Props> = ({
  icon,
  className,
  text,
  bgColor,
  onClick,
  ...otherProps
}) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        height: 32px;
        border-radius: 4px;
        display: flex;
        gap: 4px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        outline: none;
        border: none;
        color: ${theme.colors.white};
        background-color: ${bgColor};
        padding: 0 ${theme.space}px;
      `}
      onClick={onClick}
      className={className}
      {...otherProps}
    >
      {icon}
      {text && (
        <Typography
          css={css`
            display: block;
            font-weight: 600;
          `}
          size={'small'}
        >
          {text}
        </Typography>
      )}
    </div>
  );
};

export default IconButton;
