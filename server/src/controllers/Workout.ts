import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Workout from "../models/Workout";

const getWorkout = (req: Request, res: Response, next: NextFunction) => {
	const workoutId = req.params.workoutId;

	return Workout.findById(workoutId)
		.select("-__v") // will not return "_v" version key
		.then((workout) => {
			workout
				? res.status(200).json({ workout })
				: res.status(404).json({ message: "Not found." });
		})
		.catch((error) => {
			res.status(500).json({ error });
		});
};
const getAllWorkout = (req: Request, res: Response, next: NextFunction) => {
	return Workout.find()
		.select("-__v") // will not return "_v" version key
		.then((workouts) => {
			res.status(200).json({ workouts });
		})
		.catch((error) => {
			res.status(500).json({ error });
		});
};
const createWorkout = (req: Request, res: Response, next: NextFunction) => {
	const { name, date, activity } = req.body;

	const workout = new Workout({
		_id: new mongoose.Types.ObjectId(),
		name,
		date,
		activity,
	});

	return workout
		.save()
		.then((workout) => res.status(201).json({ workout }))
		.catch((error) => res.status(500).json({ error }));
};
const updateWorkout = (req: Request, res: Response, next: NextFunction) => {
	const workoutId = req.params.workoutId;

	return Workout.findById(workoutId)
		.then((workout) => {
			if (workout) {
				workout.set(req.body);

				return workout
					.save()
					.then((workout) => res.status(201).json({ workout }))
					.catch((error) => res.status(500).json({ error }));
			} else {
				return res.status(404).json({ message: "Not found." });
			}
		})
		.catch((error) => {
			res.status(500).json({ error });
		});
};
const deleteWorkout = (req: Request, res: Response, next: NextFunction) => {
	const workoutId = req.params.workoutId;

	return Workout.findByIdAndDelete(workoutId)
		.then((workout) =>
			workout
				? res.status(201).json({ message: "Workout deleted" })
				: res.status(404).json({ message: "Not Found." })
		)
		.catch((error) => res.status(500).json({ error }));
};

export default {
	getAllWorkout,
	getWorkout,
	createWorkout,
	updateWorkout,
	deleteWorkout,
};
