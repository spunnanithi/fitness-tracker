import {
	Box,
	Text,
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Workouts() {
	const [workouts, setWorkouts] = useState([]);

	const navigate = useNavigate();

	interface Workout {
		id: number;
		title: string;
		date: any;
	}

	const handlePageRedirect = (id: number) => {
		navigate(`/workouts/${id}`);
	};

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("http://localhost:8050/workouts");
			const data = await response.json();
			setWorkouts(data);
		};

		fetchData();
	}, []);

	return (
		<Box>
			<Text as="b" fontSize="3xl">
				Workouts
			</Text>
			<TableContainer>
				<Table variant="striped" colorScheme="linkedin">
					<TableCaption>Imperial to metric conversion factors</TableCaption>
					<Thead>
						<Tr>
							<Th>Date</Th>
							<Th>Workouts</Th>
							<Th>multiply by</Th>
						</Tr>
					</Thead>
					<Tbody>
						{workouts.map((workout: Workout, index) => {
							return (
								<Tr onClick={() => handlePageRedirect(workout.id)} key={index}>
									<Td>{workout.date}</Td>
									<Td>{workout.title}</Td>
									<Td>{workout.id}</Td>
								</Tr>
							);
						})}
					</Tbody>
					<Tfoot>
						<Tr>
							<Th>To convert</Th>
							<Th>into</Th>
							<Th>multiply by</Th>
						</Tr>
					</Tfoot>
				</Table>
			</TableContainer>
		</Box>
	);
}

export default Workouts;
