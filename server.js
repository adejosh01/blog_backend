import express from "express"
import dotenv from "dotenv"
import path from "path";
import connectDb from "./config/db.js"

import { errorResponserHandler } from "./middlewave/errorHandler.js";
import cors from "cors";

// Routes
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import postCategoriesRoutes from "./routes/postCategoriesRoutes.js";

dotenv.config();
connectDb()

const app = express();
app.use(express.json())
app.use(cors());
app.use(errorResponserHandler)


app.get("/", (req, res) => {
    res.send("Server is running...");
  });

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/post-categories", postCategoriesRoutes);

// static assets
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

const PORT = process.env.PORT || 5000

app.listen(5000, () => console.log(`Server is running on port ${PORT}`))
