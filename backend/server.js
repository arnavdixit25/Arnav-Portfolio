import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import messageRoutes from "./routes/message.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Portfolio backend running"));
app.use("/api/message", messageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
