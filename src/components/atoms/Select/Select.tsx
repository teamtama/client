import React, { forwardRef, ForwardRefRenderFunction } from 'react';
import { css, useTheme } from '@emotion/react';

export type SelectOption = {
  value: any;
  label: string;
};

interface OwnProps {
  errorMessage?: string;
  children?: any;
  className?: string;
  onChange: React.SelectHTMLAttributes<HTMLSelectElement>['onChange'];
  value: React.SelectHTMLAttributes<HTMLSelectElement>['value'];
  disabled?: React.SelectHTMLAttributes<HTMLSelectElement>['disabled'];
  placeholder?: React.SelectHTMLAttributes<HTMLSelectElement>['placeholder'];
  options: SelectOption[];
}

type Props = OwnProps;

const Select: ForwardRefRenderFunction<HTMLSelectElement, Props> = (
  {
    errorMessage,
    children,
    className,
    onChange,
    value,
    disabled,
    placeholder,
    options,
    ...otherProps
  },
  ref,
) => {
  const theme = useTheme();
  return (
    <select
      ref={ref}
      className={className}
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
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      {...otherProps}
    >
      {options.map((op) => (
        <option key={op.label} value={op.value}>
          {op.label}
        </option>
      ))}
    </select>
  );
};

export default forwardRef(Select);
