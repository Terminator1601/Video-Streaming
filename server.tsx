// server.ts

import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

const httpServer = createServer();
const io = new Server(httpServer, {
  /* options */
});

// Define a function to handle socket connections
io.on('connection', (socket: Socket) => {
  console.log('A user connected');

  // Handle joining a room
  socket.on('joinRoom', ({ roomId }) => {
    socket.join(roomId);
    console.log(`User joined room ${roomId}`);
  });

  // Handle sending messages
  socket.on('sendMessage', ({ roomId, message }) => {
    io.to(roomId).emit('message', message);
  });

  // Handle disconnections
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the HTTP server
const PORT = 3000;
httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
