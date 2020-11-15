import React, { FunctionComponent, useCallback, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Backdrop from '../../molecules/Backdrop/Backdrop';
import Drawer from '../../molecules/Drawer/Drawer';
import Header from '../../organisms/Header/Header';
import Loading from '../../atoms/Loading/Loading';
import { useAuth } from '../../../utils/contexts/AuthContext';
import GlobalNavigator from '../../organisms/GlobalNavigator/GlobalNavigator';
import { mq } from '../../../utils/helpers/mq';
import { css } from '@emotion/react';

interface OwnProps {
  pageName?: string;
  loading?: boolean;
  hasNavigator?: boolean;
}

type Props = OwnProps;

const BaseLayout: FunctionComponent<Props> = ({
  pageName,
  children,
  loading = false,
  hasNavigator = false,
}) => {
  const { currentUser, isLoggedIn } = useAuth();

  const [drawerStatus, setDrawerStatus] = useState(false);

  const onClickOpenDrawer = useCallback(() => {
    setDrawerStatus(true);
  }, [drawerStatus]);

  const onClickCloseDrawer = useCallback(() => {
    setDrawerStatus(false);
  }, [drawerStatus]);

  return (
    <div
      css={css`
        .drawer-enter {
          opacity: 0;
          transform: translateX(-200px);
          //transform: translateX(calc(100vw - 100%));
        }
        .drawer-enter-active {
          opacity: 1;
          transform: translateX(0);
          transition: all 200ms;
          //transform: translateX(0);
        }
        .drawer-exit {
          opacity: 1;
          transform: translateX(0);
          //transform: translateX(0);
        }
        .drawer-exit-active {
          opacity: 0;
          transform: translateX(-200px);
          //transform: translateX(calc(100vw - 100%));

          transition: all 200ms;
        }
        .backdrop-enter {
          opacity: 0;
        }
        .backdrop-enter-active {
          opacity: 1;
          transition: all 200ms;
        }
        .backdrop-exit {
          opacity: 1;
        }
        .backdrop-exit-active {
          opacity: 0;
          transition: all 200ms;
        }
      `}
    >
      {loading && (
        <div
          css={css`
            z-index: 999999;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background-color: rgba(255, 255, 255, 0.6);
          `}
        >
          <Loading loading={loading} />
        </div>
      )}
      <Header
        hasNavigator={hasNavigator}
        onClickAvatar={onClickOpenDrawer}
        avatar={currentUser?.avatar}
        pageName={pageName}
      />
      {hasNavigator && <GlobalNavigator />}
      <main
        css={css`
          display: grid;
          width: 100%;
          padding-top: ${hasNavigator ? '104px' : '48px'};
          ${mq('ph')`
              width: 640px;
              margin: 0 auto;
            `}
        `}
      >
        {children}
      </main>
      <CSSTransition
        in={drawerStatus}
        timeout={200}
        classNames="drawer"
        unmountOnExit
        onEnter={onClickOpenDrawer}
        onExited={onClickCloseDrawer}
      >
        <Drawer isLoggedIn={isLoggedIn} user={currentUser} />
      </CSSTransition>
      <CSSTransition
        in={drawerStatus}
        timeout={200}
        classNames="backdrop"
        unmountOnExit
        onEnter={onClickOpenDrawer}
        onExited={onClickCloseDrawer}
      >
        <Backdrop onClick={onClickCloseDrawer} />
      </CSSTransition>
    </div>
  );
};

export default BaseLayout;
