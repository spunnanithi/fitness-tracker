import express from "express";
import controller from "../controllers/Workout";
import { Schemas, ValidateSchema } from "../middleware/ValidateSchema";

const router = express.Router();

// Create and patch endpoints are protected by using Joi to validate data
router.post(
	"/workouts",
	ValidateSchema(Schemas.workout.create),
	controller.createWorkout
);
router.get("/workouts/:workoutId", controller.getWorkout);
router.get("/workouts", controller.getAllWorkout);
router.patch(
	"/workouts/:workoutId",
	ValidateSchema(Schemas.workout.update),
	controller.updateWorkout
);
router.delete("/workouts/:workoutId", controller.deleteWorkout);

export { router as workoutRouter };
