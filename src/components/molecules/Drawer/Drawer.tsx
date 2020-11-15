import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { useAuth } from '../../../utils/contexts/AuthContext';
import { SimpleUserFieldsFragment } from '../../../generated/graphql';
import { FaHome, FaReact } from 'react-icons/fa';
import { AiOutlineNotification } from 'react-icons/ai';
import Typography from '../../atoms/Typography/Typography';
import { css, useTheme } from '@emotion/react';

interface Props {
  user?: SimpleUserFieldsFragment;
  isLoggedIn: boolean;
}

const Drawer: FunctionComponent<Props> = ({ user, isLoggedIn }) => {
  const { localLogout } = useAuth();
  const theme = useTheme();
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-right: 1px solid #eaeaea;
        width: 320px;
        z-index: 10001;
        display: flex;
        flex-direction: column;
        padding: ${theme.space}px;
        background-color: ${theme.colors.white};
      `}
    >
      <ul
        css={css`
          display: flex;
          justify-content: space-around;
        `}
      >
        {isLoggedIn ? (
          <>
            <li
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <Link href={`/auth/profile/${user?.id}`}>
                <a>
                  <Typography>Profile</Typography>
                </a>
              </Link>
            </li>
            <li
              css={css`
                display: flex;
                align-items: center;
              `}
              onClick={localLogout}
            >
              <Link href={'#'}>
                <a>
                  <Typography>Logout</Typography>
                </a>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <Link href={'/auth/register'}>
                <a>
                  <Typography
                    css={css`
                      font-size: 0.8rem;
                    `}
                  >
                    Register
                  </Typography>
                </a>
              </Link>
            </li>
            <li
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <Link href={'/auth/login'}>
                <a>
                  <Typography
                    css={css`
                      font-size: 0.8rem;
                    `}
                  >
                    Login
                  </Typography>
                </a>
              </Link>
            </li>
          </>
        )}
      </ul>
      <ul>
        <li>
          <FaHome
            css={css`
              font-size: 1.2rem;
              margin-right: ${theme.space}px;
            `}
          />
          <Link href={'/'}>
            <a>
              <Typography>Home</Typography>
            </a>
          </Link>
        </li>
        <li>
          <AiOutlineNotification
            css={css`
              font-size: 1.2rem;
              margin-right: ${theme.space}px;
            `}
          />
          <Link href={'/notice'}>
            <a>
              <Typography>Notice</Typography>
            </a>
          </Link>
        </li>
        <li>
          <FaReact css={css``} />
          <Link href={'/board'}>
            <a>
              <Typography>Board</Typography>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
