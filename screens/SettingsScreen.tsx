import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {}

const SettingsScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>Settings Screen</Text>
		</View>
	);
};

export default SettingsScreen;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	label: {
		color: 'black',
		fontSize: 18,
		fontFamily: 'regular',
	},
});
