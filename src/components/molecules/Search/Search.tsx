import React, { FunctionComponent } from 'react';
import { Controller } from 'react-hook-form';
import Typography from '../../atoms/Typography/Typography';
import { BiSearchAlt } from 'react-icons/bi';
import { css, useTheme } from '@emotion/react';

interface OwnProps {
  onSubmit: any;
  handleSubmit: any;
  control: any;
  name: string;
  label: string;
}

type Props = OwnProps;

const Search: FunctionComponent<Props> = ({
  handleSubmit,
  onSubmit,
  control,
  name,
  label,
}) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: ${theme.space * 10}px;
        background-color: ${theme.colors.yellow};
        gap: ${theme.space * 4}px;
      `}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          gap: ${theme.space}px;
        `}
      >
        <Typography
          css={css`
            font-size: 1.3rem;
          `}
        >
          {label}
        </Typography>
        <BiSearchAlt
          css={css`
            font-size: 1.4rem;
          `}
        />
      </div>
      <Controller
        control={control}
        name={name}
        render={({ onChange }) => (
          <input
            css={css`
              width: 100%;
              outline: none;
              border-radius: 8px;
              border: none;
              padding: ${theme.space * 2}px;
            `}
            onChange={onChange}
          />
        )}
      />
    </div>
  );
};

export default Search;
