import React, {
  createContext,
  FunctionComponent,
  useCallback,
  useContext,
  useReducer,
} from 'react';
import { v4 } from 'uuid';

export type TypeAlert = 'primary' | 'success' | 'warning' | 'error';

export type TypeAlertAction = {
  type: 'SET_ALERT' | 'REMOVE_ALERT';
  payload: any;
};

export type TypeAlertState = {
  id: string;
  msg: string;
  alertType: TypeAlert;
};

export interface IAlertContext {
  alerts: TypeAlertState[];
  setAlert: (msg: string, alertType: TypeAlert, timeout?: number) => void;
}

const initialState: TypeAlertState[] = [];

const reducer = (state: TypeAlertState[], action: TypeAlertAction) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_ALERT':
      return [...state, payload];
    case 'REMOVE_ALERT':
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
};
export const AlertContext = createContext<IAlertContext>({} as IAlertContext);

export const AlertProvider: FunctionComponent<any> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setAlert = useCallback(
    (msg: string, alertType: TypeAlert, timeout = 3000) => {
      const id = v4();
      dispatch({
        type: 'SET_ALERT',
        payload: { msg, alertType, id },
      });

      setTimeout(
        () => dispatch({ type: 'REMOVE_ALERT', payload: id }),
        timeout,
      );
    },
    [],
  );

  const store: IAlertContext = {
    alerts: state,
    setAlert,
  };
  return (
    <AlertContext.Provider value={store}>{children}</AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
