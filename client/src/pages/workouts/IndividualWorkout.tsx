import { useParams } from "react-router-dom";
import { Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FormatDate } from "../../helpers/FormatDate";

function IndividualWorkout() {
	const [workout, setWorkout] = useState([]);
	const params = useParams();

	return (
		<>
			<Text as="b" fontSize="3xl">
				Individual Workout {params.id}
			</Text>
		</>
	);
}

export default IndividualWorkout;
