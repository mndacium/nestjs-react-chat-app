import {useState } from "react";
import "../styles/Login.scss"
import LoginButton from "../components/LoginButton";

interface ILogin {
   
  }
const Login: React.FC<ILogin> = () => {
  const [userName, setUserName] = useState<string>("");
  return (
    <div >
      <input
      className="input"
        type="text"
        id="email"
        name="email"
        value={userName}
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <LoginButton userName={userName}></LoginButton>
    </div>
  );
};

export default Login;
