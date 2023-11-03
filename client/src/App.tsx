import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import Dashboard from "./pages/Dashboard";
import Workouts from "./pages/Workouts";

const router = createBrowserRouter([
	{
		element: <PageLayout />,
		children: [
			{ path: "/", element: <Dashboard /> },
			{ path: "/workouts", element: <Workouts /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
