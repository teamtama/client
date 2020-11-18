import React, { FunctionComponent } from 'react';
import Typography from '../../atoms/Typography/Typography';
import { AiFillAlert } from 'react-icons/ai';
import { css, useTheme } from '@emotion/react';
import Select, { SelectOption } from '../../atoms/Select/Select';

interface OwnProps {
  label: string;
  onChange: any;
  errorMessage?: string;
  value: any;
  required?: boolean;
  disabled?: React.SelectHTMLAttributes<HTMLSelectElement>['disabled'];
  placeholder?: string;
  options: SelectOption[];
}

type Props = OwnProps;

const BaseSelect: FunctionComponent<Props> = ({
  label,
  onChange,
  errorMessage,
  value,
  placeholder,
  required = false,
  disabled = false,
  options,
}) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          display: flex;
          height: 16px;
          line-height: 16px;
          margin-bottom: ${theme.space}px;
        `}
      >
        <Typography
          css={css`
            align-self: flex-start;
          `}
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
      <Select
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        options={options}
      />
      {errorMessage && (
        <div
          css={css`
            margin-top: ${theme.space}px;
          `}
        >
          <AiFillAlert
            css={css`
              color: ${theme.alert.error};
              margin-right: ${theme.space / 2}px;
            `}
          />
          <Typography
            css={css`
              align-self: flex-start;
              color: ${theme.alert.error};
            `}
          >
            {errorMessage}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default BaseSelect;
