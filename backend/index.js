import app from "./src/app.js";
import dotenv from "dotenv/config";
import { connectDB } from "./src/config/database.js";

const PORT = process.env.PORT || 4000;

connectDB();

app.listen(PORT, () => {
  console.log("Server is Up and Running");
});
