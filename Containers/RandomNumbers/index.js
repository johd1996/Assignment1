import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function RandomNumbers() {
	const [ count, setCount ] = useState(0);
	const onButtonPress = () => {
		setCount(Math.floor(Math.random() * 1000));
	};
	
	return (
		<View style={ styles.container }>
			
			<View>
				<Text
					style={ {
						fontSize: 120,
						color: "green",
					} }
				>
					{ count }
				</Text>
			</View>
			
			<TouchableOpacity style={ styles.button } onPress={ onButtonPress }>
				<Text style={ styles.buttonText }>Change Number</Text>
			</TouchableOpacity>
			
			<Text style={ styles.addText }>Click to generate a random number</Text>
			<StatusBar style="auto"/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		backgroundColor: "orange",
		padding: 20,
		margin: 20,
		borderRadius: 10,
		paddingHorizontal: 40,
	},
	buttonText: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
	},
	addText: {
		color: "orange",
	}
});
