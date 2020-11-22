import React from 'react';
import { doLogin , isLoggedIn} from "./../../service/authService";

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from './../../utils/refreshToken';
import { Redirect } from 'react-router-dom';

const clientId =
"386378251778-54mdq9q2dm3h6sq972fuk214j0cp98bl.apps.googleusercontent.com";

// https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=ya29.a0AfH6SMB_ANJys4Z1xn28A8g_AMNgf2CvrUbdjZiZuBuEIrZcKRHlKMONHDRdoJIps1ZrdJKmS5fZ_JY1aRRop7ayfDVGf0cLLrN3SKLadl0Oi6kaajAAtMLc6gXwUvHD1D02N1SlcM11KGqy-3nqxASAebUVAIxjkwpTw4_MLe8


function Login(props) {

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res);
    // doLogin()
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
    props.history.push("/contact");
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
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