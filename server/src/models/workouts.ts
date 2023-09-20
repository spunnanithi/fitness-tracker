import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const WorkoutSchema = new Schema(
	{
		name: String,
		date: Date,
		activity: String,
	},
	{ timestamps: true }
);

const WorkoutModel = mongoose.model("Workout", WorkoutSchema);

export default WorkoutModel;
