import React from 'react';
import { css, useTheme } from '@emotion/react';

interface Props {
  className?: string;
  errorMessage?: string;
  onChange?: React.InputHTMLAttributes<HTMLInputElement>['onChange'];
  value?: React.InputHTMLAttributes<HTMLInputElement>['value'];
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  disabled?: React.InputHTMLAttributes<HTMLInputElement>['disabled'];
  accept?: React.InputHTMLAttributes<HTMLInputElement>['accept'];
  placeholder?: React.InputHTMLAttributes<HTMLInputElement>['placeholder'];
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      errorMessage,
      onChange,
      value,
      type = 'text',
      disabled = false,
      accept,
      placeholder,
      ...otherProps
    },
    ref,
  ) => {
    const theme = useTheme();
    return (
      <input
        css={css`
          padding: ${theme.space}px;
          border-radius: 4px;
          outline: none;
          border: 1px solid
            ${errorMessage ? theme.alert.error : theme.colors.lightGray};
          &::placeholder {
            font-style: italic;
            font-size: 1.2rem;
          }
        `}
        className={className}
        ref={ref}
        value={value}
        onChange={onChange}
        type={type}
        disabled={disabled}
        accept={accept}
        placeholder={placeholder}
        {...otherProps}
      />
    );
  },
);
export default Input;
