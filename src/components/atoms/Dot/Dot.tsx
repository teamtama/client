import React from 'react';
import { useTheme, css } from '@emotion/react';

function Dot(props: any) {
  const theme = useTheme();
  return (
    <span
      css={css`
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: ${theme.alert.success};
        position: absolute;
        right: 0;
        top: 0;
      `}
      {...props}
    />
  );
}

export default Dot;
