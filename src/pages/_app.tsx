import React from 'react';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { cache } from '@emotion/css';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/client';
import styled from '@emotion/styled';
import { AlertProvider } from '../utils/contexts/AlertContext';
import Alert from '../components/molecules/Alert/Alert';
import { APP_NAME } from '../../config';
import { AuthProvider } from '../utils/contexts/AuthContext';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import { globalStyles } from '../style';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../style';

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}: any) => {
  const client = useApollo(pageProps.initialApolloState);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{APP_NAME}</title>
      </Head>
      <ApolloProvider client={client}>
        <CacheProvider value={cache}>
          {globalStyles}
          <ThemeProvider theme={theme}>
            <Background>
              <AlertProvider>
                <AuthProvider>
                  <Component {...pageProps} />
                  <Alert />
                </AuthProvider>
              </AlertProvider>
            </Background>
          </ThemeProvider>
        </CacheProvider>
      </ApolloProvider>
    </>
  );
};

// export interface IServerSideData {
//   isLoggedIn: boolean;
//   user: SimpleUserFieldsFragment | null;
// }
//
// App.getInitialProps = async ({
//   Component,
//   ctx,
// }: AppContext): Promise<AppInitialProps> => {
//   let pageProps = {};
//
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//
//   const apolloClient = createApolloClient();
//
//   const { data } = await apolloClient.query<MeQuery>({
//     query: MeDocument,
//     context: {
//       headers: {
//         cookie: ctx.req?.headers.cookie,
//       },
//     },
//     errorPolicy: 'all',
//   });
//
//   if (
//     (data && ctx.pathname.includes('login')) ||
//     (data && ctx.pathname.includes('register'))
//   ) {
//     ctx.res?.writeHead(302, {
//       Location: '/',
//     });
//     ctx.res?.end();
//   }
//
//
//   if (
//     (!data && ctx.pathname.includes('create')) ||
//     (!data && ctx.pathname.includes('edit'))
//   ) {
//     const listPage = ctx.pathname.split('/')[1];
//     ctx.res?.writeHead(302, {
//       Location: `/${listPage}`,
//     });
//     ctx.res?.end();
//   }
//
//
//   return {
//     pageProps: {
//       ...pageProps,
//       data: {
//         isLoggedIn: !!data,
//         user: data?.me ?? null,
//       } as IServerSideData,
//     },
//   };
// };

export default App;
