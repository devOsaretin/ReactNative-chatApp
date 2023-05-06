import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ChatSettingScreen from '../screens/ChatSettingsScreen';
import ChatListScreen from '../screens/ChatListScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ChatScreen from '../screens/ChatScreen';

export type RootStackParamList = {
	Home: undefined;
	Setting: undefined;
	Chat: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	return (
		<Tab.Navigator screenOptions={{ headerTitle: '' }}>
			<Tab.Screen
				name='ChatList'
				component={ChatListScreen}
				options={{
					tabBarLabel: 'Chats',
					tabBarIcon: ({ color, size }) => {
						return (
							<Ionicons name='chatbubble-outline' size={size} color={color} />
						);
					},
				}}
			/>
			<Tab.Screen
				name='Settings'
				component={SettingsScreen}
				options={{
					tabBarLabel: 'Settings',
					tabBarIcon: ({ color, size }) => (
						<Ionicons name='settings-outline' size={size} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

const MainNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerTitle: '',
			}}>
			<Stack.Screen
				name='Home'
				component={TabNavigator}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='Setting'
				component={ChatSettingScreen}
				options={{
					gestureEnabled: true,
				}}
			/>
			<Stack.Screen
				name='Chat'
				component={ChatScreen}
				options={{
					gestureEnabled: true,
				}}
			/>
		</Stack.Navigator>
	);
};

export default MainNavigator;
