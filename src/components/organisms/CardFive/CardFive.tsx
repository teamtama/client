import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { textOverflowMixin } from '../../../style';
import { UrlObject } from 'url';
import { checkFromNow } from '../../../utils/helpers/dateHelpers';
import { css, useTheme } from '@emotion/react';
import Typography from '../../atoms/Typography/Typography';
import TagComponent from '../../molecules/TagComponent/TagComponent';

interface OwnProps {
  thumbnail?: string | null;
  href: string | UrlObject;
  title: string;
  date: string;
  className?: string;
}

type Props = OwnProps;

const CardFive: FunctionComponent<Props> = ({
  thumbnail,
  href,
  title,
  date,
  className,
  ...otherProps
}) => {
  const theme = useTheme();
  return (
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 24px;
        padding: ${theme.space * 3}px 0;
        border-bottom: 1px solid ${theme.colors.lightGray};
      `}
      className={className}
      {...otherProps}
    >
      <div
        css={css`
          width: 80px;
          height: 80px;
          overflow: hidden;
          border-radius: 8px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}
      >
        <img
          src={
            thumbnail ??
            'https://www.hopkinsmedicine.org/-/media/feature/noimageavailable.ashx'
          }
          alt={'notice-thumbnail'}
        />
      </div>
      <div
        css={css`
          flex: 1;
          display: flex;
          align-items: center;
          gap: 8px;
        `}
      >
        <Link href={href}>
          <a>
            {checkFromNow({ date, howLong: 1, unit: 'month' }) && (
              <TagComponent
                bgColor={theme.colors.red}
                color={theme.colors.white}
                text={'new'}
              />
            )}
            <Typography
              variant={'h4'}
              css={css`
                color: ${theme.colors.darkBlue};
                ${textOverflowMixin({ line: 2 })}
              `}
            >
              {title}
            </Typography>
          </a>
        </Link>
      </div>
      <div
        css={css`
          text-align: right;
        `}
      >
        <Typography
          variant={'small'}
          css={css`
            color: ${theme.colors.darkGray};
          `}
        >
          {date}
        </Typography>
      </div>
    </div>
  );
};

export default CardFive;
