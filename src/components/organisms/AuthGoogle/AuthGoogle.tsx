import React, { FunctionComponent } from 'react';
import GoogleLogin from 'react-google-login';
import { GOOGLE_CLIENT_ID } from '../../../../config';
import { useAuth } from '../../../utils/contexts/AuthContext';

interface OwnProps {
  isRegister?: boolean;
}

type Props = OwnProps;

const AuthGoogle: FunctionComponent<Props> = ({ isRegister = false }) => {
  const { googleRegister, googleLogin } = useAuth();

  const responseGoogle = async (res: any) => {
    const tokenId = res.tokenId;
    if (isRegister) {
      await googleRegister(tokenId);
    } else {
      await googleLogin(tokenId);
    }
  };

  return (
    <div>
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        buttonText={isRegister ? 'Register with Google' : 'Login with Google'}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        theme={'dark'}
      />
    </div>
  );
};

export default AuthGoogle;
