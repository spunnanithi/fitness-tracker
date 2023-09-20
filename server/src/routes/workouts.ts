import express, { Request, Response } from "express";
import Workout from "../models/workouts";

const router = express.Router();

router.post("/api/workouts", async (req: Request, res: Response) => {
	const newWorkout = new Workout({
		name: req.body.name,
		date: req.body.date,
		activity: req.body.activity,
	});
	const createdWorkout = await newWorkout.save();
	res.json(createdWorkout);
});

export { router as workoutRouter };
