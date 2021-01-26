import app from "./app";

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`[node-server]✅-> The server is running on port ${port} ⚫⚫⚫`);
});
