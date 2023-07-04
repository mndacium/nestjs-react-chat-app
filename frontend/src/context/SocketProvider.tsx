import React, { ReactNode, createContext, useEffect, useState } from 'react';
import socketIOClient, { Socket } from 'socket.io-client';
interface ISocketProvider {
    children: ReactNode;
  }
export const SocketContext = createContext<Socket | null>(null);

export const SocketProvider: React.FC<ISocketProvider> = ({children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  // Create the socket connection when the component mounts
  useEffect(() => {
    const socket = socketIOClient('http://localhost:3000');
    setSocket(socket);

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};