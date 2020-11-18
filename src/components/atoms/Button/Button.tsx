import React, { forwardRef, ForwardRefRenderFunction, useEffect } from 'react';
import { css, useTheme } from '@emotion/react';

interface Props {
  onClick?: any;
  buttonType?: 'primary' | 'success' | 'warning' | 'error';
  color?: string;
  className?: string;
  children: any;
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  {
    onClick,
    buttonType = 'primary',
    color,
    children,
    className,
    ...otherProps
  },
  ref,
) => {
  const theme = useTheme();
  return (
    <button
      ref={ref}
      className={className}
      onClick={onClick}
      css={css(
        css`
          color: ${color};
          font-size: 1.2rem;
          font-weight: 400;
          border: 0;
          border-radius: 6px;
          appearance: none;
          cursor: pointer;
          padding: ${theme.space}px ${theme.space * 2}px;
          outline: none;
        `,
        { ...theme.button[buttonType] },
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default forwardRef(Button);
