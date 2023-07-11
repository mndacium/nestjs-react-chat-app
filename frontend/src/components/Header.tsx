import { UserContext } from "../context/UserProvider";
import {useContext} from 'react'
import "../styles/Header.scss";
import LoginButton from "./LoginButton";
import { Outlet } from "react-router-dom";
import { useNavigate} from "react-router-dom";

interface IHeader {
 
}

const Header: React.FC<IHeader> = ({}) => {
    const {user,setUser} = useContext(UserContext);
    const navigate = useNavigate()
    const handleLoginClick=()=>{
      setUser("")
      navigate('/login')
    }
  return (
    <>
    <header>
      <div className="container">
        <div className="header_container">
          <div className="logo">NestJs Chat</div>
          <div className="user">
            <span style={{fontWeight:"bold",marginRight:"20px"}}>{user}</span>
            <LoginButton handleClick={handleLoginClick}></LoginButton>
          </div>
        </div>
      </div>
    </header>
    <Outlet />
    </>
    
  );
};

export default Header;
