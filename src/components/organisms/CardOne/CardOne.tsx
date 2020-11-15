import React, { FunctionComponent } from 'react';
import Typography from '../../atoms/Typography/Typography';
import { textOverflowMixin } from '../../../style';
import { css, useTheme } from '@emotion/react';

interface OwnProps {
  onClick: any;
  date: string;
  title: string;
  description: string;
  className?: string;
}

type Props = OwnProps;

const CardOne: FunctionComponent<Props> = ({
  onClick,
  date,
  title,
  description,
  className,
  ...otherProps
}) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: minmax(min-content, 100px) 1fr;
        align-items: center;
        justify-items: center;
        background: #ffffff;
        border-radius: 6px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        backdrop-filter: blur(4px);
        cursor: pointer;
        padding: ${theme.space * 2}px 0;
      `}
      onClick={onClick}
      className={className}
      {...otherProps}
    >
      <div
        css={css`
          text-align: center;
        `}
      >
        <Typography
          css={css`
            font-weight: 800;
          `}
        >
          {date}
        </Typography>
      </div>
      <div
        css={css`
          flex: 1;
          display: grid;
          grid-gap: 8px;
          padding: 8px;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-between;
          `}
        >
          <Typography
            css={css`
              color: ${theme.colors.yellow};
              font-weight: 500;
              ${textOverflowMixin({ line: 1 })}
            `}
          >
            {title}
          </Typography>
        </div>
        <div>
          <Typography
            css={css`
              color: ${theme.colors.lightGray};
              font-weight: 500;
              ${textOverflowMixin({ line: 2 })}
            `}
          >
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
