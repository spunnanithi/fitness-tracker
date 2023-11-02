import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PageLayout from "./layouts/PageLayout";

const router = createBrowserRouter([
	{
		element: <PageLayout />,
		children: [{ path: "/", element: <Dashboard /> }],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
