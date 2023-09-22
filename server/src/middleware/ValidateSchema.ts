import Joi, { ObjectSchema } from "joi";
import { NextFunction, Request, Response } from "express";
import Logging from "../library/Logging";
import { IWorkout } from "../models/Workout";
import { IExercise } from "../models/Exercise";

// Validate incoming information from request body
export const ValidateSchema = (schema: ObjectSchema) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			await schema.validateAsync(req.body);

			next();
		} catch (error) {
			Logging.error(error);
			return res.status(422).json({ error });
		}
	};
};

// Schema definitions
export const Schemas = {
	// Workout Model
	workout: {
		create: Joi.object<IWorkout>({
			name: Joi.string().required(),
			date: Joi.date(),
			activity: Joi.string(),
		}),
		update: Joi.object<IWorkout>({
			name: Joi.string().required(),
			date: Joi.date(),
			activity: Joi.string(),
		}),
	},

	// Exercise Model
	exercise: {
		create: Joi.object<IExercise>({
			workout: Joi.string()
				.regex(/^[0-9a-fA-F]{24}$/)
				.required(),
			name: Joi.string().required(),
			weight: Joi.number().required(),
			sets: Joi.number().required(),
			reps: Joi.number().required(),
		}),
		update: Joi.object<IExercise>({
			workout: Joi.string()
				.regex(/^[0-9a-fA-F]{24}$/)
				.required(),
			name: Joi.string().required(),
			weight: Joi.number().required(),
			sets: Joi.number().required(),
			reps: Joi.number().required(),
		}),
	},
};
