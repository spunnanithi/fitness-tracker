import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Heading,
	Stack,
	Box,
	StackDivider,
	Text,
} from "@chakra-ui/react";

const Dashboard = () => {
	return (
		<Card bg="gray.500">
			<CardHeader>
				<Heading size="md">Client Report</Heading>
			</CardHeader>

			<CardBody>
				<Stack divider={<StackDivider borderColor="black" />} spacing="4">
					<Box>
						<Heading size="xs" textTransform="uppercase">
							Summary
						</Heading>
						<Text pt="2" fontSize="sm">
							View a summary of all your clients over the last month.
						</Text>
					</Box>
					<Box>
						<Heading size="xs" textTransform="uppercase">
							Overview
						</Heading>
						<Text pt="2" fontSize="sm">
							Check out the overview of your clients.
						</Text>
					</Box>
					<Box>
						<Heading size="xs" textTransform="uppercase">
							Analysis
						</Heading>
						<Text pt="2" fontSize="sm">
							See a detailed analysis of all your business clients.
						</Text>
					</Box>
				</Stack>
			</CardBody>
		</Card>
	);
};

export default Dashboard;
