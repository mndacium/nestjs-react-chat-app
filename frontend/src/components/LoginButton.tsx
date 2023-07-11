import { useContext } from "react";
import "../styles/Login.scss";
import { UserContext } from "../context/UserProvider";
import Button from "@mui/material/Button";
interface ILoginButton {
  handleClick: (arg: any) => void;
}
const LoginButton: React.FC<ILoginButton> = ({ handleClick }) => {
  const { user } = useContext(UserContext);
  if (user) {
    return (
      <Button
        sx={{ background: "#499ce3" }}
        variant="contained"
        onClick={handleClick}
      >
        Log Out
      </Button>
    );
  } else {
    return (
      <Button
        sx={{ background: "#499ce3" }}
        variant="contained"
        onClick={handleClick}
      >
        Log In
      </Button>
    );
  }
};

export default LoginButton;
