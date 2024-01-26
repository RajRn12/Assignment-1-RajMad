/*
Credit to: 
Stephen Graham, 
React Native Docs, 
Raj Rai
*/
// Second/Last Page
import React from 'react';
import { Text, View, TextInput} from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import Styles from '../styles/page-styles';

export default function Page() {
	// retrieving user input values and date info from previous page
	const params = useLocalSearchParams();
	const {
		name,
		noun,
		event,
		date_Label,
		date_Month,
		date_Day,
		date_Year } = params;

	// hints
	const [name_Hint, setName_Hint] = React.useState("Name");
	const [noun_Hint, setNoun_Hint] = React.useState("Subject");
	const [event_Hint, setEvent_Hint] = React.useState("Fun Event"); 

	// for labeling signature box signed
	const [signed, setSigned] = React.useState("SIGNED:");

	// format present date in string
	date = String(date_Month + "/" + date_Day + "/" + date_Year);

	return (
		// Main View
		<View style={Styles.pageView}>
			{/* Head View */}
			<View>
				{/* Date label - text style*/}
				<Text style={Styles.headText}>
					<Text>MAD LIBS{'\n'}</Text>
				</Text>
				<Text
					style={{
						fontSize: 20,
						fontWeight: 'bold',
						position: 'absolute',
						marginTop: 60,
						marginLeft: 80,
					}}>
					{date_Label}
				</Text>

				{/* Present Date Field - read only */}
				<TextInput
					style={Styles.dateBox}
					placeholder={date}
					readOnly={true}
				/>
			</View>

			{/* HALL PASS View */}
			{/* Rotate Box with Text 'HALL PASS' */}
			{/* Lower translateY (positive #) to move it up */}
			{/* Lower translateX (make more negative #) to move it right */}
			{/* Postive 90deg-rotated 'HALL PASS' faces left, negative faces right */}
			<View
				style={[
					Styles.box,
					{
						transform: [{ translateY: 109 }, { translateX: -90 }, { rotate: '-90deg' }],
					},
				]}>
				<Text style={Styles.boxText}>HALL PASS</Text>
			</View>

			{/* Body */}
			{/* Name View */} 
			<View>
				{/* Name Field - read only & Extra text */}
				<TextInput
					style={Styles.userName}
					value={name }
					placeholder={name_Hint}
					readOnly={true}
					adjustsFontSizeToFit={true}
				/>
				<Text>is too cool</Text>
			</View>

			{/* Noun View */} 
			<View>
				{/* Noun Field - read only */}
				<Text>for</Text>
				<TextInput
					style={Styles.userNoun}
					placeholder={noun_Hint}
					value={noun }
					readOnly={true}
					adjustsFontSizeToFit={true}
				/>
				<Text>class.</Text>
			</View>

			{/* Instead View */}
			<View>
				<Text>Instead, she/he will be {'\n'}{'\n'}</Text>
			</View>

			{/* Event View */}
			<View>
				{/* Event Field - read only */}
				<Text>attending the</Text>
				<TextInput
					style={Styles.userEvent}
					value={event}
					placeholder={event_Hint}
					readOnly={true}
					adjustsFontSizeToFit={true}
				/>
				<Text>.</Text>   
			</View>

			{/* Signature View */} 
			<View>
				{/* Kind of signed signature box - read only */}
				<TextInput
					style={Styles.signatureBox}
					readOnly={true}
					placeholder={signed}
				/>
			</View>
		</View>
	)
}
