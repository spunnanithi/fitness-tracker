import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import WorkoutModel from "../models/Workout";
import { error } from "console";

const getWorkout = (req: Request, res: Response, next: NextFunction) => {
	const workoutId = req.params.workoutId;

	return WorkoutModel.findById(workoutId)
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
	return WorkoutModel.find()
		.then((workouts) => {
			res.status(200).json({ workouts });
		})
		.catch((error) => {
			res.status(500).json({ error });
		});
};
const createWorkout = (req: Request, res: Response, next: NextFunction) => {
	const { name, date, activity } = req.body;

	const workout = new WorkoutModel({
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

	return WorkoutModel.findById(workoutId)
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

	return WorkoutModel.findByIdAndDelete(workoutId)
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
