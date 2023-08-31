import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import { v4 as uuid } from "uuid";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  },
});

app.get("/infor", authenToken, (req, res) => {
  res.json({ status: "success", age: 21, name: "cuong" });
});

function authenToken(req, res, next) {
  const authorizationHeader = req.headers["authorization"];
  const token = authorizationHeader.split(" ")[1];
  if (!token) {
    res.senStatus(401);
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
      if (err) {
        res.sendStatus(403);
      } else {
        next();
      }
    });
  }
}

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("Invalid username"));
  }

  socket.username = username;
  socket.userId = uuid();
  next();
});

io.on("connection", (socket) => {
  socket.emit("session", {
    userId: socket.userId,
    username: socket.username,
  });
});

server.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});
