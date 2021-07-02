// const PORT = "wss://159.89.15.214:8080/";

const io = require("socket.io")(PORT, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("connected");
});
