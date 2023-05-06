import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
	children: ReactNode | ReactNode[];
	style?: Object;
}

const PageContainer = ({ children, style }: Props) => {
	return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

export default PageContainer;
const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		flex: 1,
		backgroundColor: 'white',
	},
});
