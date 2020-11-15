import React, { FunctionComponent } from 'react';
import { BarLoader } from 'react-spinners';
import { css, useTheme } from '@emotion/react';

interface OwnProps {
  loading: boolean;
}

type Props = OwnProps;

const Loading: FunctionComponent<Props> = ({ loading }) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(255, 255, 255, 0.5);
      `}
    >
      <BarLoader color={theme.colors.yellow} loading={loading} />
    </div>
  );
};

export default Loading;
