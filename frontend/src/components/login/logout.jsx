import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
"386378251778-54mdq9q2dm3h6sq972fuk214j0cp98bl.apps.googleusercontent.com";

function Logout(props) {
  const onSuccess = () => {
    props.history.push("/");

  };
  console.log(props.history);
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;