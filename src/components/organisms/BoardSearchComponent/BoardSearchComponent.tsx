import React, { FunctionComponent } from 'react';
import { Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import { BoardCategory } from '../../../generated/graphql';
import Select, { StylesConfig } from 'react-select';
import { css, useTheme } from '@emotion/react';

export type TabType = {
  value: string;
  label: string;
  isActive: boolean;
  href: string;
};

interface OwnProps {
  handleSubmit: any;
  onSubmit: any;
  control: any;
  className?: string;
}

type Props = OwnProps;

const BoardSearchComponent: FunctionComponent<Props> = ({
  handleSubmit,
  onSubmit,
  control,
  className,
  ...otherProps
}) => {
  const router = useRouter();
  const theme = useTheme();

  const tabs: TabType[] = [
    {
      isActive: router.query.category === undefined,
      label: 'All',
      value: BoardCategory.All,
      href: '/board',
    },
    {
      isActive: router.query.category === BoardCategory.Free,
      label: 'Free Board',
      value: BoardCategory.Free,
      href: `/board?category=${BoardCategory.Free}`,
    },
    {
      isActive: router.query.category === BoardCategory.Trade,
      label: 'Trade',
      value: BoardCategory.Trade,
      href: `/board?category=${BoardCategory.Trade}`,
    },
    {
      isActive: router.query.category === BoardCategory.Job,
      label: 'Job Info',
      value: BoardCategory.Job,
      href: `/board?category=${BoardCategory.Job}`,
    },
    {
      isActive: router.query.category === BoardCategory.Fq,
      label: 'F&Q',
      value: BoardCategory.Fq,
      href: `/board?category=${BoardCategory.Fq}`,
    },
  ];

  const reactSelectStyle: StylesConfig = {
    control: (styles) => {
      return {
        ...styles,
        backgroundColor: theme.colors.white,
        border: 'none',
        boxShadow: 'none',
      };
    },
    option: (styles, { isSelected }) => {
      return {
        ...styles,
        '&:hover': {
          backgroundColor: isSelected ? theme.colors.yellow : '#eaeaea',
        }, // border style on hover
        backgroundColor: isSelected && theme.colors.yellow,
        padding: `${theme.space * 2}px`,
        fontSize: '0.8rem',
      };
    },
    input: (styles) => ({ ...styles }),
    placeholder: (styles) => ({ ...styles }),
    singleValue: (styles) => ({
      ...styles,
      fontSize: '0.8rem',
    }),
  };

  const handleChange = (data: any) => {
    router.replace(data.href);
  };

  return (
    <div
      css={css`
        display: flex;
        border: 1px solid #eaeaea;
        border-radius: 4px;
        padding: 4px 8px;
      `}
      className={className}
      {...otherProps}
    >
      <div
        css={css`
          flex: 2;
        `}
      >
        <Select
          instanceId={'categorytab'}
          classNamePrefix="select"
          defaultValue={tabs[0]}
          isSearchable={true}
          name="categorytab"
          options={tabs}
          onChange={handleChange}
          styles={reactSelectStyle}
        />
      </div>
      <form
        css={css`
          flex: 8;
        `}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name={'keyword'}
          render={({ onChange, value }) => {
            return (
              <input
                css={css`
                  width: 100%;
                  outline: none;
                  height: 38px;
                  border: none;
                `}
                onChange={onChange}
                value={value}
              />
            );
          }}
        />
      </form>
    </div>
  );
};

export default BoardSearchComponent;
