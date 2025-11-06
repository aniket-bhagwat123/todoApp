import app from "./src/app.js";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";

dotenv.config();

const PORT = process.env.NODE_PORT;

connectDB(process.env.NODE_MONGODB_URL);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});