import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const server = http.createServer(app);

let refreshTokens = [];
//Authorization
app.post("/login", (req, res) => {
  const data = req.body;
  const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "30s",
  });
  const refreshToken = jwt.sign(data, process.env.REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);

  res.json({ accessToken, refreshToken });
});

// Create refreshTokens
app.post("/refreshToken", (req, res) => {
  const refreshToken = req.body.token;
  if (!refreshToken) {
    res.sendStatus(401);
  }
  if (!refreshTokens.includes(refreshToken)) {
    res.sendStatus(403);
  }
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const accessToken = jwt.sign(
        { username: data.username },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "30s" }
      );
      console.log(data);
      res.json({ accessToken, refreshToken });
    }
  });
});

app.post("/logout", (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((refToken) => refToken !== refreshToken);
  res.sendStatus(200);
});

server.listen(process.env.PORT_AUTH_SERVER, () => {
  console.log(`Server listening on ${process.env.PORT_AUTH_SERVER}`);
});
