import { UserContext } from "../context/UserProvider";
import {useContext} from 'react'
import "../styles/Header.scss";
import LoginButton from "./LoginButton";
import { Outlet } from "react-router-dom";
interface IHeader {
 
}

const Header: React.FC<IHeader> = ({}) => {
    const {user} = useContext(UserContext);
  return (
    <>
    <header>
      <div className="container">
        <div className="header_container">
          <div className="logo">NestJs Chat</div>
          <div className="user">
            {user}
            <LoginButton></LoginButton>
          </div>
        </div>
      </div>
    </header>
    <Outlet />
    </>
    
  );
};

export default Header;
