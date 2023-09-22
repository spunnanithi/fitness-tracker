import mongoose, { Document, Schema } from "mongoose";

export interface IExercise {
	name: string;
	weight: number;
	reps: number;
	sets: number;
	workout: string;
}

export interface IExerciseModel extends IExercise, Document {}

const ExerciseSchema: Schema = new Schema(
	{
		name: { type: String, required: true },
		weight: { type: Number, required: true },
		reps: { type: Number, required: true },
		sets: { type: Number, required: true },
		workout: {
			type: Schema.Types.ObjectId,
			required: true,
			ref: "Workout",
		},
	},
	{
		timestamps: true,
	}
);

const Exercise = mongoose.model<IExerciseModel>("Exercise", ExerciseSchema);
export default Exercise;
