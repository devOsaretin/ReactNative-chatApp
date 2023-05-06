import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import * as Font from 'expo-font';
import AppNavigator from './navigation/AppNavigation';

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [appIsLoaded, setAppIsLoaded] = useState(false);

	useEffect(() => {
		const prepare = async () => {
			try {
				await Font.loadAsync({
					black: require('./assets/fonts//Roboto-Black.ttf'),
					blackItalic: require('./assets/fonts/Roboto-BlackItalic.ttf'),
					bold: require('./assets/fonts/Roboto-Bold.ttf'),
					boldItalic: require('./assets/fonts/Roboto-BoldItalic.ttf'),
					italic: require('./assets/fonts/Roboto-Italic.ttf'),
					light: require('./assets/fonts/Roboto-Light.ttf'),
					lightItalic: require('./assets/fonts/Roboto-LightItalic.ttf'),
					medium: require('./assets/fonts/Roboto-Medium.ttf'),
					mediumItalic: require('./assets/fonts/Roboto-MediumItalic.ttf'),
					regular: require('./assets/fonts/Roboto-Regular.ttf'),
					thin: require('./assets/fonts/Roboto-Thin.ttf'),
					thinItalic: require('./assets/fonts/Roboto-ThinItalic.ttf'),
				});
			} catch (error) {
				console.log(error);
			} finally {
				setAppIsLoaded(true);
			}
		};
		prepare();
	}, []);

	const layout = useCallback(async () => {
		if (appIsLoaded) await SplashScreen.hideAsync();
	}, [appIsLoaded]);

	if (!appIsLoaded) return null;

	return (
		<SafeAreaProvider style={styles.container} onLayout={layout}>
			<AppNavigator />
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	label: {
		color: 'black',
		fontSize: 18,
		fontFamily: 'regular',
	},
});
