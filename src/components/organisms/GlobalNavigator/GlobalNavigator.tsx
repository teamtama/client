import React, { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSTransition } from 'react-transition-group';
import useScrollPosition from '../../../utils/hooks/useScrollPosition';
import { theme } from '../../../style';
import { css, useTheme } from '@emotion/react';
import Typography from '../../atoms/Typography/Typography';

function MenuItemText({ selected, ...otherProps }: any) {
  const theme = useTheme();
  return (
    <Typography
      css={css`
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1.6rem;
        position: relative;
        color: ${selected ? theme.colors.yellow : theme.colors.lightGray};
        padding: 16px;
        border-bottom: 1px solid #eaeaea;
        cursor: pointer;

        &::after {
          position: absolute;
          bottom: -1px;
          left: 50%;
          transform: translateX(-50%);
          content: '';
          width: 30%;
          height: 2px;
          background-color: ${selected && theme.colors.yellow};
        }
      `}
      {...otherProps}
    />
  );
}

interface OwnProps {}

type Props = OwnProps;

const GlobalNavigator: FunctionComponent<Props> = ({}) => {
  const router = useRouter();
  const { scrollPosition } = useScrollPosition();
  const [open, setOpen] = useState(true);
  const handleChangeOpen = () => {
    setOpen(true);
  };
  const handleChangeClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (scrollPosition > 48) {
      handleChangeClose();
    } else if (scrollPosition <= 48) {
      handleChangeOpen();
    }
  }, [scrollPosition, open]);

  return (
    <div
      css={css`
        .navigator-enter {
          opacity: 0;
          transform: translateY(-48px);
        }
        .navigator-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: all 200ms;
        }
        .navigator-exit {
          opacity: 1;
          transform: translateY(0);
        }
        .navigator-exit-active {
          opacity: 0;
          transform: translateY(-48px);
          transition: all 200ms;
        }
      `}
    >
      <CSSTransition
        in={open}
        timeout={200}
        classNames="navigator"
        unmountOnExit
        onEnter={handleChangeOpen}
        onExited={handleChangeClose}
      >
        <ul
          css={css`
            position: fixed;
            top: 48px;
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            background-color: ${theme.colors.white};
            z-index: 999;
          `}
        >
          <li
            css={css`
              flex: 1;
              width: 100%;
            `}
          >
            <Link href={'/'}>
              <a
                css={css`
                  display: flex;
                  width: 100%;
                `}
              >
                <MenuItemText selected={router.pathname === '/'}>
                  홈으로
                </MenuItemText>
              </a>
            </Link>
          </li>
          <li
            css={css`
              flex: 1;
              width: 100%;
            `}
          >
            <Link href={'/notice'}>
              <a
                css={css`
                  display: flex;
                  width: 100%;
                `}
              >
                <MenuItemText selected={router.pathname.startsWith('/notice')}>
                  공지사항
                </MenuItemText>
              </a>
            </Link>
          </li>
          <li
            css={css`
              flex: 1;
              width: 100%;
            `}
          >
            <Link href={'/board'}>
              <a
                css={css`
                  display: flex;
                  width: 100%;
                `}
              >
                <MenuItemText selected={router.pathname.startsWith('/board')}>
                  커뮤니티
                </MenuItemText>
              </a>
            </Link>
          </li>
          <li
            css={css`
              flex: 1;
              width: 100%;
            `}
          >
            <Link href={'/'}>
              <a
                css={css`
                  display: flex;
                  width: 100%;
                `}
              >
                <MenuItemText selected={router.pathname.startsWith('/auth')}>
                  기타페이지
                </MenuItemText>
              </a>
            </Link>
          </li>
        </ul>
      </CSSTransition>
    </div>
  );
};

export default GlobalNavigator;
