import React, { FunctionComponent } from 'react';
import SimpleUser from '../../molecules/SimpleUser/SimpleUser';
import { fromNow } from '../../../utils/helpers/dateHelpers';
import Typography from '../../atoms/Typography/Typography';
import { textOverflowMixin } from '../../../style';
import { css, useTheme } from '@emotion/react';

interface OwnProps {
  goToDetail: any;
  date: string;
  icons?: any;
  title: string;
  description?: string;
  thumbnail?: string | null;
  username: string;
  avatar?: string;
  className?: string;
}

type Props = OwnProps;

const CardTwo: FunctionComponent<Props> = ({
  goToDetail,
  date,
  icons = null,
  title,
  description,
  thumbnail,
  className,
  username,
  avatar,
  ...otherProps
}) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        background: #ffffff;
        border-radius: 6px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        backdrop-filter: blur(4px);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: ${theme.space * 3}px;
      `}
      className={className}
      onClick={goToDetail}
      {...otherProps}
    >
      <div
        css={css`
          margin-bottom: auto;
          display: flex;
          gap: ${theme.space}px;
        `}
      >
        <div
          css={css`
            flex: 1;
            margin-right: auto;
            display: flex;
            flex-direction: column;
            gap: 8px;
          `}
        >
          <Typography
            css={css`
              align-self: flex-start;
              font-weight: 600;
            `}
          >
            {fromNow(date)}
          </Typography>
          <Typography
            css={css`
              align-self: flex-start;
              color: ${theme.colors.yellow};
              font-weight: 700;
              ${textOverflowMixin({ line: 2 })}
            `}
          >
            {title}
          </Typography>
        </div>
        <div
          css={css`
            width: 100px;
            height: 100px;
          `}
        >
          <img
            css={css`
              width: 100%;
              height: 100%;
              object-fit: cover;
            `}
            alt="thumbnail image"
            src={
              thumbnail ??
              'https://i.ytimg.com/vi/bT9ORf39l9w/maxresdefault.jpg'
            }
          />
        </div>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <SimpleUser username={username} avatar={avatar} />
        <div
          css={css`
            display: flex;
            gap: 8px;
            justify-content: flex-end;
          `}
        >
          {icons}
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
