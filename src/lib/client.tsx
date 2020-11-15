import { useMemo } from 'react';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { API } from '../../config';
import { relayStylePagination } from '@apollo/client/utilities';

const httpLink = createHttpLink({
  uri: API,
  credentials: 'include',
});

let apolloClient: any;

export const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: httpLink,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            getBoardList: relayStylePagination(),
            getNoticeList: relayStylePagination(),
          },
        },
        Board: {
          fields: {
            likes: {
              merge(_, incoming) {
                return incoming;
              },
            },
            comments: {
              merge(_, incoming) {
                return incoming;
              },
            },
          },
        },
      },
    }),
  });
};

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();
  if (initialState) {
    const existingCache = _apolloClient.extract();
    _apolloClient.cache.restore({ ...existingCache, ...(initialState as any) });
  }
  if (typeof window === 'undefined') return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: any) {
  return useMemo(() => initializeApollo(initialState), [initialState]);
}
