import { useParams } from "react-router-dom";

function IndividualWorkout() {
	const params = useParams();

	return <div>Individual Workout {params.id}</div>;
}

export default IndividualWorkout;
