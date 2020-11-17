import React, { FunctionComponent } from 'react';
import { css, useTheme } from '@emotion/react';

interface OwnProps {
  className?: string;
}

type Props = OwnProps;

const BaseTitle: FunctionComponent<Props> = ({
  children,
  className,
  ...otherProps
}) => {
  const theme = useTheme()
  return (
    <h2
      css={css`
        font-size: 1.6rem;
        font-weight: 600;
        color: ${theme.colors.black};
      `}
      className={className}
      {...otherProps}
    >
      {children}
    </h2>
  );
};

export default BaseTitle;
