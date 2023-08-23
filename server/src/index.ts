import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import Workout from "./models/workouts";

dotenv.config();

const app: Express = express();
app.use(express.json()); // Express middleware function that allows JSON POST requests

const port = process.env.PORT;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;

app.get("/", (req: Request, res: Response) => {
	res.send("Express + TypeScript Server");
});

app.post("/workouts", async (req: Request, res: Response) => {
	console.log(req.body);
	const newWorkout = new Workout(req.body);
	const createdWorkout = await newWorkout.save();
	res.json(createdWorkout);
});

const db = mongoose
	.connect(
		`mongodb+srv://${dbUsername}:${dbPassword}@cluster0.d8kohlr.mongodb.net/?retryWrites=true&w=majority`
	)
	.then(() => {
		app.listen(port, () => {
			console.log(`[server]: Server is running at http://localhost:${port}`);
		});
	});
