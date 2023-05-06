import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import type { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/MainNavigator';

type Props = {};

const ChatListScreen = () => {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
	return (
		<View style={styles.container}>
			<Text style={styles.label}>Chat List Screen</Text>
			<Button title='Go to chat' onPress={() => navigation.navigate('Chat')} />
		</View>
	);
};

export default ChatListScreen;
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
