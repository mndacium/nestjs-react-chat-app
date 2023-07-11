import { useContext, useState } from "react";
import "../styles/Login.scss";
import LoginButton from "../components/LoginButton";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import CustomTextField from "../components/CustomTextField";
import Button from "@mui/material/Button";
interface ILogin {}

const Login: React.FC<ILogin> = () => {
  const navigate = useNavigate();
  const {user,setUser} = useContext(UserContext)
  const [userName, setUserName] = useState<string>("");
  const handleClick = (user:string) => {
    if (user) {
      setUser(user);
      navigate("/");
    } else {
      alert("No username provided");
    }
  };
  return (
    <div className="login">
      <div className="container">
      <div className="input_wrapper">
        <CustomTextField
          id="standard-basic"
          label="Enter your message"
          fullWidth
          variant="standard"
          onChange={(e)=>setUserName(e.target.value)}
        />
      </div>
      <LoginButton handleClick={()=>handleClick(userName)}></LoginButton>
      <Button
        sx={{ background: "#499ce3" ,ml: '1rem'}}
        variant="contained"
        onClick={()=>{navigate("/")}}
       
      >
        Return
      </Button>
      </div>
    
    </div>
  );
};

export default Login;
