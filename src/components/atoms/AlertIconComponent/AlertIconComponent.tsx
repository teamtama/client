import React, { FunctionComponent } from 'react';
import { css, useTheme } from '@emotion/react';
import { AiFillAlert } from 'react-icons/ai';

interface OwnProps {
  iconSize?: number;
  className?: string;
}

type Props = OwnProps;

const AlertIconComponent: FunctionComponent<Props> = ({
  iconSize,
  className,
  ...otherProps
}) => {
  const theme = useTheme();
  return (
    <AiFillAlert
      className={className}
      css={css`
        font-size: ${iconSize ?? 10}px;
        color: ${theme.alert.error};
      `}
      {...otherProps}
    />
  );
};

export default AlertIconComponent;
