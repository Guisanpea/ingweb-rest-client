import React from 'react';
import GoogleLogin, {GoogleLogout} from 'react-google-login';

export const Google = ({logged, setLogged}) => {
  const nop = data => {
    console.log(data);
  };
  const responseGoogle = data => {
    console.log(data);
    localStorage.setItem("google", data);
    setLogged(true);
  };

  const logout = () => {
    localStorage.removeItem("google");
    setLogged(false);
  };

  return <div>
    {!localStorage.getItem("google")
       ? <GoogleLogin
          clientId="1036568219196-eugavb1b0u95e9ppkgn0aka3ch4ru02m.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={nop}
          cookiePolicy={'single_host_origin'}/>
       : <GoogleLogout
          clientId="1036568219196-eugavb1b0u95e9ppkgn0aka3ch4ru02m.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={logout}/>}
       </div>
    };
