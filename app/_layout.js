/*
Credit to: 
Stephen Graham, 
React Native Docs, 
Raj Rai
*/
import { Stack } from 'expo-router';
export default function Layout() {
	return (
		<Stack screenOptions={{
			headerTitle: "Assignment 1",
			headerStyle: { backgroundColor: "green" },
			headerTitleStyle: {
				fontWeight: "bold",
				color: "white"
			},
		}}>
		<Stack.screen
			name="index"
			options={{
				headerShown: true,
				headerBackVisible: false,
			}}
		/>

		{/* Next Page */ }
		<Stack.Screen
			name="page2"
			options={{
				headerTitle: "Hall Pass",
				headerShown: true,
				headerTitleStyle: {
					color: "white",
					fontWeight: "bold"
				},
				headerTitleAlign: "center",
				headerTintColor: "yellow",

			}}
		/>
		</Stack>
	);
}