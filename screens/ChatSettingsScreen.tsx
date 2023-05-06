import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {}

const ChatSettingScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>Chat Setting Screen</Text>
		</View>
	);
};

export default ChatSettingScreen;
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
