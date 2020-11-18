import React from 'react';
import BaseLayout from '../components/templates/BaseLayout/BaseLayout';
import {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { createApolloClient } from '../lib/client';
import {
  GetNoticeListDocument,
  GetNoticeListQuery,
  MeDocument,
  MeQuery,
  NoticeCategory,
  QueryGetNoticeListArgs,
} from '../generated/graphql';
import Input from '../components/atoms/Input/Input';
import Button from '../components/atoms/Button/Button';
import ModalWrapper, {
  IModalWrapperHandler,
} from '../components/atoms/ModalWrapper/ModalWrapper';
import { css } from '@emotion/react';
import ModalPortal, {
  IModalPortalHandler,
} from '../components/atoms/ModalPortal/ModalPortal';

export const getServerSideProps = async ({
  req,
}: GetServerSidePropsContext) => {
  const apolloClient = createApolloClient();
  const { data: meData } = await apolloClient.query<MeQuery>({
    query: MeDocument,
    context: {
      headers: {
        cookie: req.headers.cookie,
      },
    },
    errorPolicy: 'all',
  });
  await apolloClient.query<GetNoticeListQuery, QueryGetNoticeListArgs>({
    query: GetNoticeListDocument,
    variables: {
      category: NoticeCategory.Event,
      first: '300',
    },
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      data: {
        isLoggedIn: !!meData,
        user: meData?.me ?? null,
      },
    },
  };
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Index: NextPage<Props> = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const secondInputRef = React.useRef<HTMLInputElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const buttonPortalRef = React.useRef<HTMLButtonElement>(null);
  const modalWrapperRef = React.useRef<IModalWrapperHandler>(null);
  const modalPortalRef = React.useRef<IModalPortalHandler>(null);
  return (
    <BaseLayout hasNavigator>
      <Input ref={inputRef} />
      <Input ref={secondInputRef} />
      <Button
        ref={buttonRef}
        onClick={() => modalWrapperRef?.current?.handleToggle()}
      >
        Click me!
      </Button>
      <ModalWrapper ref={modalWrapperRef}>
        <div
          css={css`
            background-color: red;
            width: 480px;
            height: 300px;
          `}
        >
          213214
          <Button
            ref={buttonRef}
            onClick={() => modalWrapperRef?.current?.handleToggle()}
          >
            Click me!
          </Button>
        </div>
      </ModalWrapper>
      <Button
        ref={buttonPortalRef}
        onClick={() => modalPortalRef?.current?.handleToggle()}
      >
        Click me!
      </Button>
      <ModalPortal ref={modalPortalRef}>
        <div>MODAL!</div>
        <Button
          ref={buttonPortalRef}
          onClick={() => modalPortalRef?.current?.handleToggle()}
        >
          Click me!
        </Button>
      </ModalPortal>
    </BaseLayout>
  );
};

export default Index;
