import { useParams } from "react-router-dom";

function IndividualWorkout() {
	const params = useParams();
	console.log(params);
	return <div>IndividualWorkout</div>;
}

export default IndividualWorkout;
