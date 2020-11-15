import React, { FunctionComponent, useContext } from 'react';
import { AlertContext } from '../../../utils/contexts/AlertContext';
import Typography from '../../atoms/Typography/Typography';
import { css, useTheme } from '@emotion/react';

interface OwnProps {}

type Props = OwnProps;

const Alert: FunctionComponent<Props> = () => {
  const { alerts } = useContext(AlertContext);
  const theme = useTheme();
  return (
    <div
      css={css`
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: grid;
        bottom: ${theme.space * 3}px;
        grid-gap: ${theme.space}px;
      `}
    >
      {alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
          <div
            key={alert.id}
            css={css`
              border-radius: 8px;
              padding: ${theme.space * 2}px ${theme.space * 4}px;
              background-color: ${alert.alertType === 'success'
                ? theme.alert.success
                : alert.alertType === 'warning'
                ? theme.alert.warning
                : alert.alertType === 'error'
                ? theme.alert.error
                : theme.alert.primary};
              color: ${theme.colors.white};
            `}
          >
            <Typography>{alert.msg}</Typography>
          </div>
        ))}
    </div>
  );
};

export default Alert;
