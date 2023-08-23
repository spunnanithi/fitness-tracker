import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import Workout from "./models/workouts";

dotenv.config();

const app: Express = express();
app.use(express.json()); // Express middleware function that allows JSON POST requests

const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
	res.send("Express + TypeScript Server");
});

app.post("/workouts", async (req: Request, res: Response) => {
	const newWorkout = new Workout({
		name: req.body.name,
	});
	const createdWorkout = await newWorkout.save();
	res.json(createdWorkout);
});

// Mongoose connection to MongoDB
mongoose.connect(process.env.MONGODB_URL!).then(() => {
	app.listen(port, () => {
		console.log(`[server]: Server is running at http://localhost:${port}`);
	});
});
