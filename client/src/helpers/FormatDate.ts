import moment from "moment";

export const FormatDate = (date: Date) => {
	const formattedDate = moment(date).format("ddd, MMM Do, YYYY");
	return formattedDate;
};
