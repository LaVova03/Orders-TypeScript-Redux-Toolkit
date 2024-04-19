import { Server } from "mock-socket";

const mockServer = new Server("ws://localhost:3000");

mockServer.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log("Получено сообщение от клиента:", message);
  });
});

setTimeout(() => {
  mockServer.emit(
    "message",
    "Это сообщение было отправлено с mock-сервера WebSocket"
  );
}, 1000);

export default mockServer;
