import React, { FunctionComponent } from 'react';
import Select from 'react-select';

export type BaseReactSelectOption = {
  value: string;
  label: string;
};

interface OwnProps {
  isClearable: boolean;
  isDisabled: boolean;
  isLoading: boolean;
  isRtl: boolean;
  isSearchable: boolean;
  options: BaseReactSelectOption[];
  onChange: any;
}

type Props = OwnProps;

const BaseReactSelectComponent: FunctionComponent<Props> = ({
  isClearable,
  isDisabled,
  isLoading,
  isRtl,
  isSearchable,
  options,
  onChange,
}) => {
  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      defaultValue={options[0]}
      isDisabled={isDisabled}
      isLoading={isLoading}
      isClearable={isClearable}
      isRtl={isRtl}
      isSearchable={isSearchable}
      name="color"
      options={options}
      onChange={onChange}
    />
  );
};

export default BaseReactSelectComponent;
