import React from 'react';
import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from './../../utils/refreshToken';

const clientId =
"386378251778-54mdq9q2dm3h6sq972fuk214j0cp98bl.apps.googleusercontent.com";

function Login(props) {

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res);
    alert(
      `Logged in successfully \n welcome ${res.profileObj.name}.`
    );
    refreshTokenSetup(res);
    props.history.push("/contact");
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login.`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;