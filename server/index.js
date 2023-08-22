const express = require("express");
const app = express();
const PORT = 3001;
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  },
});

io.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on("send", (data) => {
      socket.broadcast.emit("received", data);
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
