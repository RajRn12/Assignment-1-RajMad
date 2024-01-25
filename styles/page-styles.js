/*
Credit to: 
Stephen Graham, 
React Native Docs, 
Raj Rai
*/
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	// Page 1
	page: {
		flex: 1,
		backgroundColor: 'white',
		paddingRight: 20,
		paddingLeft: 20,
	},
	button: {
		backgroundColor: 'dodgerblue',
		borderRadius: 10,
		margin: 10,
		padding: 10,
		borderWidth: 1.5,
		alignItems: 'center',
	},
	input: {
		width: '80%',
		borderWidth: 1,
		borderRadius: 10,
		textAlign: 'center',
		marginTop: 10,
		marginBottom: 20,
		paddingBottom: 20,
		marginLeft: 33,
	},

	// Page 2
	// other stuff
	page2: {
		flex: 1,
		backgroundColor: "white",
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
		fontWeight: 'bold',
	},
	userNoun: {
		width: '35%',
		height: '4%',
		borderWidth: 0.4,
		marginLeft: 111,
		marginTop: 140,
		textAlign: 'center',
		position: 'absolute',
		fontWeight: 'bold',
	},
	userEvent: {
		width: '29%',
		height: '4%',
		borderWidth: 0.4,
		marginLeft: 182,
		marginTop: 215,
		textAlign: 'center',
		position: 'absolute',
		fontWeight: 'bold',
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