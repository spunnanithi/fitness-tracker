import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Exercise from "../models/Exercise";

const getExercise = (req: Request, res: Response, next: NextFunction) => {
	const exerciseId = req.params.exerciseId;

	return Exercise.findById(exerciseId)
		.populate("workout") // will populate workout with name of workout instead of exercise ID
		.select("-__v") // will not return "__v" version key
		.then((exercise) => {
			exercise
				? res.status(200).json({ exercise })
				: res.status(404).json({ message: "Not found." });
		})
		.catch((error) => {
			res.status(500).json({ error });
		});
};
const getAllExercise = (req: Request, res: Response, next: NextFunction) => {
	return Exercise.find()
		.populate("workout") // will populate workout with name of workout instead of exercise ID
		.select("-__v") // will not return "__v" version key
		.then((exercises) => {
			res.status(200).json({ exercises });
		})
		.catch((error) => {
			res.status(500).json({ error });
		});
};
const createExercise = (req: Request, res: Response, next: NextFunction) => {
	const { name, weight, sets, reps, workout } = req.body;

	const exercise = new Exercise({
		_id: new mongoose.Types.ObjectId(),
		name,
		weight,
		sets,
		reps,
		workout,
	});

	return exercise
		.save()
		.then((exercise) => res.status(201).json({ exercise }))
		.catch((error) => res.status(500).json({ error }));
};
const updateExercise = (req: Request, res: Response, next: NextFunction) => {
	const exerciseId = req.params.exerciseId;

	return Exercise.findById(exerciseId)
		.then((exercise) => {
			if (exercise) {
				exercise.set(req.body);

				return exercise
					.save()
					.then((exercise) => res.status(201).json({ exercise }))
					.catch((error) => res.status(500).json({ error }));
			} else {
				return res.status(404).json({ message: "Not found." });
			}
		})
		.catch((error) => {
			res.status(500).json({ error });
		});
};
const deleteExercise = (req: Request, res: Response, next: NextFunction) => {
	const exerciseId = req.params.exerciseId;

	return Exercise.findByIdAndDelete(exerciseId)
		.then((exercise) =>
			exercise
				? res.status(201).json({ message: "Exercise deleted" })
				: res.status(404).json({ message: "Not Found." })
		)
		.catch((error) => res.status(500).json({ error }));
};

export default {
	getAllExercise,
	getExercise,
	createExercise,
	updateExercise,
	deleteExercise,
};
