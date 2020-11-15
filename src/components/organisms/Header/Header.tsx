import React, { FunctionComponent, useCallback } from 'react';
import Avatar from '../../molecules/Avatar/Avatar';
import { useRouter } from 'next/router';
import { IoIosArrowBack } from 'react-icons/io';
import Typography from '../../atoms/Typography/Typography';
import { css, useTheme } from '@emotion/react';
import { textOverflowMixin } from '../../../style';

const LeftWrapper = (props: any) => (
  <div
    css={css`
      background-color: white;
      border: none;
      outline: none;
      align-self: center;
      justify-self: flex-start;
      cursor: pointer;
    `}
    {...props} // <- props contains the `className` prop
  />
);

interface OwnProps {
  hasNavigator: boolean;
  onClickAvatar: any;
  avatar?: string;
  pageName?: string;
}

type Props = OwnProps;

const Header: FunctionComponent<Props> = ({
  hasNavigator,
  onClickAvatar,
  avatar,
  pageName,
}) => {
  const router = useRouter();
  const theme = useTheme();

  const onClickBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <header
      css={css`
        position: fixed;
        top: 0;
        width: 100%;
        height: ${theme.height.header}px;
        color: ${theme.colors.black};
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-content: center;
        padding: 0 ${theme.space}px;
        background-color: ${theme.colors.white};
        z-index: 1000;
      `}
    >
      {hasNavigator ? (
        <LeftWrapper onClick={onClickAvatar}>
          <Avatar src={avatar} />
        </LeftWrapper>
      ) : (
        <LeftWrapper onClick={onClickBack}>
          <IoIosArrowBack
            css={css`
              font-size: 1.8rem;
            `}
          />
        </LeftWrapper>
      )}
      <div
        css={css`
          align-self: center;
          justify-self: center;
          width: 100%;
          text-align: center;
        `}
      >
        <Typography
          css={css`
            font-size: 1.8rem;
            ${textOverflowMixin({ line: 1 })}
          `}
        >
          {pageName ? pageName : '타마스터디'}
        </Typography>
      </div>
      <button
        css={css`
          background-color: white;
          border: none;
          outline: none;
          align-self: center;
          justify-self: flex-end;
          cursor: pointer;
        `}
      />
    </header>
  );
};

export default Header;
