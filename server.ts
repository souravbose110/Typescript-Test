import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
    res.send("API is running successfully");
});

app.listen(PORT, () => {
    console.log(`[SERVER] : Server is running successfully on Port : ${PORT}`);
});
