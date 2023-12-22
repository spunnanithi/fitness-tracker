import axios from "axios";

const axiosClient = axios.create({
	baseURL: "http://localhost:8050",
	headers: {
		"Content-type": "application/json",
	},
});

export default axiosClient;
