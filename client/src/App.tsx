import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/workouts/Workouts";
import IndividualWorkout from "./pages/workouts/IndividualWorkout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <PageLayout />,
		children: [
			{ path: "/dashboard", element: <Dashboard /> },
			{
				path: "/workouts",
				element: <Workouts />,
			},
			{ path: "/workouts/:id", element: <IndividualWorkout /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
