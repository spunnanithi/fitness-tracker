import express, { Express, Request, Response } from "express";
import http from "http";
import mongoose from "mongoose";
import cors from "cors";
import { workoutRouter } from "./routes/workouts";

import { config } from "./config/config";
import Logging from "./library/Logging";

const router = express();

/** Connect to MongoDB */
mongoose
	.connect(config.mongo.url, { w: "majority", retryWrites: true })
	.then(() => {
		Logging.info("Connected to mongoDB.");
		StartServer();
	})
	.catch((error) => {
		Logging.error("Unable to connect: ");
		Logging.error(error);
	});

/** Only start if MongoDB connects */
const StartServer = () => {
	router.use((req, res, next) => {
		/** Log the Request */
		Logging.info(
			`Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`
		);

		res.on("finish", () => {
			/** Log the Request */
			Logging.info(
				`Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`
			);
		});

		/** Pass request to next functioninstead of ending request */
		next();
	});

	router.use(express.urlencoded({ extended: true }));
	router.use(express.json());

	/** Rules of our API */
	router.use((req, res, next) => {
		res.header("Access-Control-Allow-Origin", "*");
		res.header(
			"Access-Control-Allow-Headers",
			"Origin, X-Requested-With, Content-Type, Accept, Authorization"
		);

		if (req.method == "OPTIONS") {
			res.header(
				"Access-Control-Allow-Methods",
				"PUT, POST, PATCH, DELETE, GET"
			);
			return res.status(200).json({});
		}

		next();
	});

	/** Routes */

	/** Healthcheck - used to check if API is working properly */
	router.get("/ping", (req, res, next) =>
		res.status(200).json({ message: "pong" })
	);

	/** Error Handling */
	router.use((req, res, next) => {
		const error = new Error("Not Found.");
		Logging.error(error);

		return res.status(404).json({ message: error.message });
	});

	http
		.createServer(router)
		.listen(config.server.port, () =>
			Logging.info(`Server is running on port ${config.server.port}.`)
		);
};

// // Allow CORS
// const allowOrigins = ["http://localhost:3000"];
// const options: cors.CorsOptions = {
// 	origin: allowOrigins,
// };
// app.use(cors(options)); // Express middleware that allow CORS

// app.use(express.json()); // Express middleware function that allows JSON POST requests

// const port = process.env.PORT || 3000;

// app.get("/", (req: Request, res: Response) => {
// 	res.send("Express + TypeScript Server");
// });

// // Routers
// app.use(workoutRouter);

// // Mongoose connection to MongoDB
// mongoose.connect(process.env.MONGODB_URL!).then(() => {
// 	app.listen(port, () => {
// 		console.log(`[server]: Server is running at http://localhost:${port}`);
// 	});
// });
