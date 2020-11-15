import React, {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
} from 'react';
import {
  SimpleUserFieldsFragment,
  useGoogleLoginMutation,
  useGoogleRegisterMutation,
  useLocalLoginMutation,
  useLocalLogoutMutation,
  useMeQuery,
  useRegsiterMutation,
} from '../../generated/graphql';
import { useRouter } from 'next/router';
import { useAlert } from './AlertContext';

interface IAuthContext {
  currentUser: SimpleUserFieldsFragment | undefined;
  isLoggedIn: boolean;
  register: (username: string, email: string, password: string) => void;
  registerLoading: boolean;
  localLogin: (email: string, password: string) => void;
  loginLoading: boolean;
  googleRegister: (tokenId: string) => void;
  googleLogin: (tokenId: string) => void;
  localLogout: () => void;
  logoutLoading: boolean;
}

const AuthContext = createContext({} as IAuthContext);

interface Props {}

export const AuthProvider: FunctionComponent<Props> = ({ children }) => {
  const router = useRouter();
  const { setAlert } = useAlert();

  const { data: currentUserData, refetch } = useMeQuery({
    notifyOnNetworkStatusChange: true,
  });

  const [registerMutation, { loading: registerLoading }] = useRegsiterMutation({
    notifyOnNetworkStatusChange: true,
    onCompleted({ register }) {
      if (register) {
        router.replace('/auth/login');
      }
    },
    onError({ graphQLErrors }) {
      graphQLErrors.map((err) => {
        setAlert(err.message, 'error');
      });
    },
  });

  const register = useCallback(
    async (username: string, email: string, password: string) => {
      await registerMutation({
        variables: {
          input: {
            username,
            email,
            password,
          },
        },
      });
    },
    [],
  );

  const [localLoginMutation, { loading: loginLoading }] = useLocalLoginMutation(
    {
      notifyOnNetworkStatusChange: true,
      async onCompleted({ localLogin }) {
        if (localLogin) {
          await refetch();
          await router.replace('/');
        }
      },
      onError({ graphQLErrors }) {
        graphQLErrors.map((err) => {
          setAlert(err.message, 'error');
        });
      },
    },
  );

  const localLogin = useCallback(async (email: string, password: string) => {
    await localLoginMutation({
      variables: {
        input: {
          email,
          password,
        },
      },
    });
  }, []);

  const [googleRegisterMutation] = useGoogleRegisterMutation({
    notifyOnNetworkStatusChange: true,
    onCompleted({ googleRegister }) {
      if (googleRegister) {
        router.replace('/auth/login');
      }
    },
    onError({ graphQLErrors }) {
      graphQLErrors.map((err) => {
        setAlert(err.message, 'error');
      });
    },
  });

  const googleRegister = useCallback(async (tokenId: string) => {
    await googleRegisterMutation({
      variables: {
        input: {
          tokenId,
        },
      },
    });
  }, []);

  const [googleLoginMutation] = useGoogleLoginMutation({
    notifyOnNetworkStatusChange: true,
    async onCompleted({ googleLogin }) {
      if (googleLogin) {
        await refetch();
        await router.replace('/');
      }
    },
    onError({ graphQLErrors }) {
      graphQLErrors.map((err) => {
        setAlert(err.message, 'error');
      });
    },
  });

  const googleLogin = useCallback(async (tokenId: string) => {
    await googleLoginMutation({
      variables: {
        input: {
          tokenId,
        },
      },
    });
  }, []);

  const [
    localLogoutMutation,
    { loading: logoutLoading },
  ] = useLocalLogoutMutation({
    notifyOnNetworkStatusChange: true,
    onCompleted({ localLogout }) {
      if (localLogout) {
        router.reload();
      }
    },
    onError({ graphQLErrors }) {
      graphQLErrors.map((err) => {
        setAlert(err.message, 'error');
      });
    },
  });

  const localLogout = useCallback(async () => {
    await localLogoutMutation();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser: currentUserData?.me as SimpleUserFieldsFragment,
        isLoggedIn: !!currentUserData?.me,
        register,
        registerLoading,
        localLogin,
        loginLoading,
        googleRegister,
        googleLogin,
        localLogout,
        logoutLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
