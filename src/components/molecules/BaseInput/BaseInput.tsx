import React, { FunctionComponent } from 'react';
import Typography from '../../atoms/Typography/Typography';
import { css, useTheme } from '@emotion/react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Input from '../../atoms/Input/Input';

interface OwnProps {
  label?: string;
  value?: any;
  onChange: any;
  errorMessage?: string;
  required?: boolean;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  disabled?: React.InputHTMLAttributes<HTMLInputElement>['disabled'];
  accept?: React.InputHTMLAttributes<HTMLInputElement>['accept'];
  placeholder?: string;
  className?: string;
}

type Props = OwnProps;

const BaseInput: FunctionComponent<Props> = ({
  label,
  value,
  onChange,
  errorMessage,
  required = false,
  type = 'text',
  disabled = false,
  accept,
  placeholder,
  className,
  ...otherProps
}) => {
  const theme = useTheme();
  return (
    <div
      className={className}
      css={css`
        display: flex;
        flex-direction: column;
      `}
      {...otherProps}
    >
      <div
        css={css`
          display: flex;
          height: 16px;
          line-height: 16px;
          margin-bottom: ${theme.space * 2}px;
        `}
      >
        <Typography
          css={css`
            align-self: flex-start;
          `}
          variant={'h4'}
        >
          {label}
        </Typography>
        {required && (
          <Typography
            css={css`
              align-self: flex-start;
              margin-left: ${theme.space}px;
              color: ${theme.colors.darkGray};
            `}
          >
            ( REQUIRE )
          </Typography>
        )}
      </div>
      <Input
        value={value}
        onChange={onChange}
        type={type}
        disabled={disabled}
        accept={accept}
        placeholder={placeholder}
      />
      {errorMessage && <ErrorMessage text={errorMessage} />}
    </div>
  );
};

export default BaseInput;
