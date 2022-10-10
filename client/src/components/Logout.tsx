import { GoogleLogout } from "react-google-login";
function Logout() {
  const logout = () => {
    console.log("porfect");
  };

  return (
    <GoogleLogout
      clientId="376958828328-obualjstu96hflb5i45i90poqhip8a3p.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
    />
  );
}

export default Logout;
