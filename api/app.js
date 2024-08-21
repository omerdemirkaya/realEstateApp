import express from "express";
import postRoute from "./routes/post.route.js"; // Added .js extension
import authRoute from "./routes/auth.route.js"; // Added .js extension
import testRoute from "./routes/test.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();

app.use(cors({origin:process.env.CLIENT_URL, credentials: true}))
app.use(express.json());
app.use(cookieParser())
app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/test", testRoute)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
