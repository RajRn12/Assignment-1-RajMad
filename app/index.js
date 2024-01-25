/*
Credit to: 
Stephen Graham, 
React Native Docs, 
shecodes.io,
Raj Rai
*/
// Main page
import { Pressable, Text, View, TextInput } from 'react-native';
import { Link } from 'expo-router'
import Styles from '../styles/page-styles' ;
import React from 'react';

export default function Page() {
	// for first page:
	// for storing labels for text input box
	const [name_Label, setName_Label] = React.useState("Name:");
	const [noun_Label, setNoun_Label] = React.useState("Noun:");
	const [event_Label, setEvent_Label] = React.useState("Event:");

	// for storing hints
	const [name_Hint, setName_Hint] = React.useState("Your Name");
	const [noun_Hint, setNoun_Hint] = React.useState("Your class subject");
	const [event_Hint, setEvent_Hint] = React.useState("What fun event you'd rather attend");

	// for storing input data from User
	const [name, onChangeName] = React.useState("");
	const [noun, onChangeNoun] = React.useState("");
	const [event, onChangeEvent] = React.useState("");

	// clear function
	const clear = () => {[onChangeName(""), onChangeNoun(""), onChangeEvent("")]; };

	// for next page - passing date:

	// date array
	date_ = [0, 0, 0];
	// call get_Today_Date function to retrieve todays date and store it in date_ array
	date_ = get_Today_Date(date_);

	// label and variables for storing date info
	const [date_Label, setDate_Label] = React.useState("Date:");
	const [date_Month, setDate_Month] = React.useState(date_[0]);
	const [date_Day, setDate_Day] = React.useState(date_[1]);
	const [date_Year, setDate_Year] = React.useState(date_[2]);

	return (
		<View style={Styles.page}>
			<Text style={{fontWeight:'bold', fontSize: 20}}>Fill in the Boxes:</Text>
			<Text>Create Hall Pass</Text>
			
			{/* Name Input Box */}
			<Text style={Styles.label}>{name_Label}</Text>
			<TextInput
				style={Styles.input}
				onChangeText={onChangeName}
				value={name}
				placeholder={name_Hint}
			/>
			
			{/* Noun Input Box  */}
			<Text style={Styles.label}>{noun_Label}</Text>
			<TextInput
				style={Styles.input}
				onChangeText={onChangeNoun}
				value={noun}
				placeholder={noun_Hint}
			/>
			
			{/* Event Input Box*/}
			<Text style={Styles.label}>{event_Label}</Text>
			<TextInput
				style={Styles.input}
				onChangeText={onChangeEvent}
				value={event}
				placeholder={event_Hint}
			/>

			{/* Link to next page and passing parameters connected to 'Make Pass' Button */}
			<Link
				style={Styles.button}
				href={{
					pathname: "/page2",
					params: {
						name,
						noun,
						event,
						date_Label,
						date_Month,
						date_Day,
						date_Year
					} 
			}} asChild
			> 
				{/* takes to second page upon pressing 'Make Pass' button */ }
				<Pressable>
					<Text>Make Pass {'\n'}</Text>
				</Pressable>
			</Link>

			{/* Clear Button - clear text input values on press */}
			<Pressable
			style={Styles.button}
			onPress = {clear}
			>
				<Text>Clear</Text>
			</Pressable>
		</View>
	)
}
// function to get present date in array list
function get_Today_Date() {
	const today_Date = new Date();
	const today_Month = today_Date.getMonth() + 1;
	const today_Day = today_Date.getDate();
	const today_Year = today_Date.getFullYear();
	return [today_Month, today_Day, today_Year];
}
	
	