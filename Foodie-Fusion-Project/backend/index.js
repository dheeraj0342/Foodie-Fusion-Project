import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./config/db";


const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});