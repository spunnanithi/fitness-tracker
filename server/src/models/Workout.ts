import mongoose, { Document, Schema } from "mongoose";

export interface IWorkout {
	name: string;
	date: Date;
	activity: string;
}

export interface IWorkoutModel extends IWorkout, Document {}

const WorkoutSchema: Schema = new Schema(
	{
		name: { type: String, required: true },
		date: Date,
		activity: String,
	}
	// { timestamps: true }
);

const WorkoutModel = mongoose.model<IWorkoutModel>("Workout", WorkoutSchema);

export default WorkoutModel;
