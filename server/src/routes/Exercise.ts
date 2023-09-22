import express from "express";
import controller from "../controllers/Exercise";

const router = express.Router();

router.post("/exercises", controller.createExercise);
router.get("/exercises/:exerciseId", controller.getExercise);
router.get("/exercises", controller.getAllExercise);
router.patch("/exercises/:exerciseId", controller.updateExercise);
router.delete("/exercises/:exerciseId", controller.deleteExercise);

export { router as exerciseRouter };
