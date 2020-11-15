import React, { FunctionComponent } from 'react';
import { css, useTheme } from '@emotion/react';

interface Props {
  children?: HTMLCollection | string;
  onClick?: (e?: React.MouseEvent) => void;
  buttonType?: 'primary' | 'success' | 'warning' | 'error';
  color?: string;
}

const Button: FunctionComponent<Props & React.HTMLProps<HTMLButtonElement>> = ({
  onClick,
  children,
  buttonType = 'primary',
  color,
}) => {
  const theme = useTheme();
  return (
    <button
      onClick={onClick}
      css={css`
        color: ${color ?? 'white'};
        font-size: 14px;
        font-weight: 700;
        border: 0;
        border-radius: 3px;
        appearance: none;
        cursor: pointer;
        padding: ${theme.space}px ${theme.space * 2}px;
        background-color: ${buttonType === 'primary'
          ? theme.alert.primary
          : buttonType === 'success'
          ? theme.alert.success
          : buttonType === 'warning'
          ? theme.alert.warning
          : theme.alert.error};
      `}
    >
      {children}
    </button>
  );
};

export default Button;
