import "../styles/Login.scss";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
interface ILoginButton {
  userName?: string;
}
const LoginButton: React.FC<ILoginButton> = ({ userName = "" }) => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate()
  if (user) {
    return (
     
        <button className="login-button" onClick={() => {
          setUser("")
          navigate('/login')
          }}>
          Log Out
        </button>
    );
  } else {
    return (
        <button
          className="login-button"
          onClick={() => {
            if (userName) {
              setUser(userName);
              navigate('/')
            } else {
              alert("No username provided");
            }
          }}
        >
          Log In
        </button>
    );
  }
};

export default LoginButton;
