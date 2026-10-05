import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesPath = path.join(__dirname, "files");

console.log("Serving files from:", filesPath);

app.use(cors());

app.use(express.static(filesPath));

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});