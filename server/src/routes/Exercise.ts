import express from "express";
import controller from "../controllers/Exercise";
import { ValidateSchema, Schemas } from "../middleware/ValidateSchema";

const router = express.Router();

// Create and patch endpoints are protected by using Joi to validate data
router.post(
	"/exercises",
	ValidateSchema(Schemas.exercise.create),
	controller.createExercise
);
router.get("/exercises/:exerciseId", controller.getExercise);
router.get("/exercises", controller.getAllExercise);
router.patch(
	"/exercises/:exerciseId",
	ValidateSchema(Schemas.exercise.update),
	controller.updateExercise
);
router.delete("/exercises/:exerciseId", controller.deleteExercise);

export { router as exerciseRouter };
