import React, { ReactNode, createContext, useEffect, useState } from "react";

interface IUserProvider {
  children: ReactNode;
}

interface IUserContext {
  user: string | null;
  setUser: (user: string | null) => void;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
});

export const UserProvider: React.FC<IUserProvider> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser);
  }, []);

  const handleSetUser = (newUser: string | null) => {
    
    localStorage.setItem("user", newUser || "");
    setUser(newUser);
  };

  const userContextValue: IUserContext = {
    user,
    setUser: handleSetUser,
  };

  return <UserContext.Provider value={userContextValue}>{children}</UserContext.Provider>;
};
