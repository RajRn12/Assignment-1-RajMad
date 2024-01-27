/*
Credit to: 
Stephen Graham, 
React Native Docs, 
Raj Rai
*/
import { Text, StyleSheet } from 'react-native';
import Page from '../app/page2';

const styles = StyleSheet.create({
	// Page 1
	// Views
	oneView: {
		flex: 1,
		backgroundColor: 'white',
		marginLeft: 1,
		alignItems: 'center',	
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

	// Label Style
	pageOne_Label: {
		fontWeight: 'bold',
		fontSize: 15,
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
	// Main View
	pageView: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
	},

	headText: {
		marginTop: 25,
		marginBottom: 0,
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center'
	},

	// Date View
	dateView: {
		height: 30,
		width: '40%',
		alignItems: 'left',
		flexDirection: 'row',
		justifyContent: 'center',
	},
	dateBox: {
		width: '50%',
		height: 30,
		fontWeight: 'bold',
		marginLeft: 5,
		borderWidth: 1,
		borderRadius: 10,
		textAlign: 'center',
	},

	// Hall Pass View
	hallView: {
		backgroundColor: 'white',
	},
	hallText: {
		fontSize: 60,
		fontWeight: 'bold',
		color: 'black',
		textTransform: 'uppercase',
		textAlign: 'center',
	},

	// Name View
	nameView: {
		height: 20,
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 30,
		marginBottom: 25,
		overflown:'hidden',
	},
	userName: {
		fontSize: 16,
		color: 'black',
		textAlign: 'center',
		borderWidth: 0.5,
	},

	// Noun View
	nounView: {
		height: 20,
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 25,
	},
	userNoun: {
		fontSize: 16,
		color: 'black',
		textAlign: 'center',
		borderWidth: 0.5,
	},

	// Instead View
	insteadView: {
		height: 20,
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 25,
	},
	extraText: {
		fontSize: 16,
	},

	// Event View
	eventView: {
		height: 20,
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 25,
	},
	userEvent: {
		fontSize: 16,
		color: 'black',
		textAlign: 'center',
		borderWidth: 0.5,
	},
	
	// Signature View
	signatureView: {
		borderWidth: 2,
		justifyContent: 'center',
	},
	signatureText: {
		fontSize: 15,
		textAlign: 'left',
		marginRight: 145,
		marginLeft: 5,
		paddingBottom: 40,
	}
});

export default styles;
