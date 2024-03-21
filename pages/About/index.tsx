// pages/index.tsx

import React, { useEffect } from 'react';
import io from 'socket.io-client';

const IndexPage: React.FC = () => {
  useEffect(() => {
    const socket = io('http://localhost:3000'); // Assuming the server runs on localhost:3000

    // Join a room when the component mounts
    socket.emit('joinRoom', { roomId: 'room1' });

    // Listen for messages from the server
    socket.on('message', (data: any) => {
      console.log('Received message:', data);
    });

    return () => {
      socket.disconnect(); // Disconnect the socket when the component unmounts
    };
  }, []);

  return <div>Socket.io Example</div>;
};

export default IndexPage;
