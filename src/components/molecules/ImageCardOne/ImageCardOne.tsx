import React, { FunctionComponent } from 'react';
import { fromNow } from '../../../utils/helpers/dateHelpers';
import Typography from '../../atoms/Typography/Typography';
import RadiusBox from '../../atoms/RadiusBox/RadiusBox';
import { css, useTheme } from '@emotion/react';

interface OwnProps {}

type Props = OwnProps;

const ImageCardOne: FunctionComponent<Props> = () => {
  const theme = useTheme()
  return (
    <div
      css={css`
        display: grid;
        overflow: hidden;
        border: 1px solid ${theme.colors.lightGray};
        border-radius: ${theme.space * 2}px;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 320px;
        `}
      >
        <img
          css={css`
            width: 100%;
            height: 100%;
            object-fit: cover;
          `}
          alt={'img'}
          src={'https://i.ytimg.com/vi/L1OPMLODmYQ/maxresdefault.jpg'}
        />
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          padding: ${theme.space * 3}px;
          gap: ${theme.space}px;
        `}
      >
        <Typography
          css={css`
            align-self: flex-start;
            font-weight: 800;
            font-size: 1.5rem;
            margin-bottom: ${theme.space}px;
          `}
        >
          Business Designer
        </Typography>
        <Typography
          css={css`
            align-self: flex-start;
          `}
        >
          (広告・マーケティングプランナー)
        </Typography>
        <Typography
          css={css`
            align-self: flex-start;
            margin-bottom: ${theme.space * 2}px;
          `}
        >
          Tokyo, JP
        </Typography>
        <RadiusBox text={fromNow(new Date())} />
      </div>
    </div>
  );
};

export default ImageCardOne;
