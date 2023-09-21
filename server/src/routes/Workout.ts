import express from "express";
import controller from "../controllers/Workout";

const router = express.Router();

router.post("/api/workouts", controller.createWorkout);
router.get("/api/workouts/:workoutId", controller.getWorkout);
router.get("api/workouts", controller.getAllWorkout);
router.patch("api/workouts/:workoutId", controller.updateWorkout);
router.delete("api/workouts/:workoutId", controller.deleteWorkout);

// router.post("/api/workouts", async (req: Request, res: Response) => {
// 	const newWorkout = new Workout({
// 		name: req.body.name,
// 		date: req.body.date,
// 		activity: req.body.activity,
// 	});
// 	const createdWorkout = await newWorkout.save();
// 	res.json(createdWorkout);
// });

export { router as workoutRouter };
