/*
Credit to: 
Stephen Graham, 
React Native Docs, 
Raj Rai
*/
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	// Page 1
	// View
	oneView: {
		flex: 1,
		backgroundColor: 'white',
		marginLeft: 1,
		alignItems: 'center'
	},
	twoView: {
		padding: 10,
		width: '90%',
		alignItems: 'center',
	},
	thirdView: {
		marginTop: 10,
		flexDirection: 'row',
		marginTop: 0,
		width: '65%',
		justifyContent: 'space-between',
	},

	// Button
	makeButton: {
		overflown: 'hidden',
		backgroundColor: 'lightgreen',
		borderRadius: 90,
		height: '100%',
		width: '40%',
		marginLeft: 7,
	},
	makeButtonText: {
		textAlign: 'center',
		marginTop: 15,
		marginLeft: 3,
		color: 'blue',
		fontWeight: 'bold'
	},
	clearButton: {
		overflown: 'hidden',
		backgroundColor: 'red',
		borderRadius: 90,
		height: '100%',
		width: '40%',
		marginRight: 6,
	},
	clearButtonText: {
		textAlign: 'center',
		marginTop: 15,
		marginLeft: 3,
		color: 'white',
		fontWeight: 'bold'
	},

	// Input Boxes
	input: {
		width: '90%',
		height: 50,
		borderWidth: 1,
		borderRadius: 10,
		marginTop: 10,
		marginBottom: 20,
		paddingBottom: 20,
		textAlign: 'center',
	},

	// Page 2
	// other stuff
	pageView: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center'
	},
	headText: {
		marginTop: 25,
		marginBottom:0,

		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	bodyText: {
		fontSize: 16,
		textAlign: 'center',
		marginBottom: 12,
		marginTop: 30,
		marginLeft: 15,
	},
	dateBox: {
		width: '30%',
		height: '4%',
		borderWidth: 0.4,
		marginLeft: 132,
		marginTop: 60,
		textAlign: 'center',
		position: 'absolute',
		fontWeight: 'bold',
	},

	// user fields
	userName: {
		width: '25%',
		height: '4%',
		borderWidth: 0.4,
		marginLeft: 80,
		marginTop: 103,
		textAlign: 'center',
		position: 'absolute',
	},
	userNoun: {
		width: '35%',
		height: '4%',
		borderWidth: 0.4,
		marginLeft: 111,
		marginTop: 140,
		textAlign: 'center',
		position: 'absolute',
	},
	userEvent: {
		width: '28%',
		height: '4%',
		borderWidth: 0.4,
		marginLeft: 185,
		marginTop: 215,
		textAlign: 'center',
		position: 'absolute',
	},

	// signature box
	signatureBox: {
		width: '50%',
		height: '10%',
		borderWidth: 2,
		marginLeft: 97,
		paddingTop: 10,
		paddingLeft: 6,
		paddingBottom: 40,
		fontSize: 15,
		fontWeight: 'bold',
	},
	label: {
		fontWeight: 'bold',
		fontSize: 15,
	},

	// Hall Pass rotation
	box: {
		height: 60,
		width: 260,
		borderRadius: 0,
		marginVertical: 100,
		backgroundColor: 'white',
		position: 'absolute',
	},
	boxText: {
	fontSize: 50,
	fontWeight: 'bold',
	color: 'black',
	textTransform: 'uppercase',
	textAlign: 'center',
	},

});

export default styles;