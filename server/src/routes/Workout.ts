import express from "express";
import controller from "../controllers/Workout";

const router = express.Router();

router.post("/workouts", controller.createWorkout);
router.get("/workouts/:workoutId", controller.getWorkout);
router.get("/workouts", controller.getAllWorkout);
router.patch("/workouts/:workoutId", controller.updateWorkout);
router.delete("/workouts/:workoutId", controller.deleteWorkout);

export { router as workoutRouter };
