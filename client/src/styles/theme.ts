import { extendTheme } from "@chakra-ui/react";

const theme = {
	zIndex: {
		navBar: 100,
		footer: 101,
		content: 102,
	},
	colors: {
		primary: {
			bg: "#ffee99",
		},
	},
};

export default extendTheme(theme);
