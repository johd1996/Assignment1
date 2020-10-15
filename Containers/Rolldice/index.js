import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const diceNumber = {
	1: require("./dice_1.png"),
	2: require("./dice_2.png"),
	3: require("./dice_3.png"),
	4: require("./dice_4.png"),
	5: require("./dice_5.png"),
	6: require("./dice_6.png"),
}


export default function RollDice() {
	
	const [ dice1, setDice1 ] = useState("6");
	const [ dice2, setDice2 ] = useState("1")
	
	const diceRoll = () => {
		const randomDice1 = (Math.floor((Math.random()) * 6 + 1)).toString();
		const randomDice2 = (Math.floor((Math.random()) * 6 + 1)).toString();
		// console.log(`${dice1} - ${dice2}`);
		
		setDice1(randomDice1);
		setDice2(randomDice2);
		
	}
	
	return (
		<View style={ [ styles.container, ] }>
			<View
				style={ {
					flexDirection: "row"
				} }
			>
				<Image
					source={ diceNumber[dice1] }
					style={ {
						width: 128,
						height: 128,
					} }
				/>
				
				<Image
					source={ diceNumber[dice2] }
					style={ {
						width: 128,
						height: 128,
						marginStart: 20
					} }
				/>
			</View>
			
			<TouchableOpacity
				onPress={ diceRoll }
			>
				<View style={ {
					backgroundColor: "orange",
					marginTop: 40,
					paddingHorizontal: 40,
					paddingVertical: 20,
					borderRadius: 10
				} }>
					<Text style={ {
						color: "white",
						fontWeight: "bold"
					} }>ROLL THE DICE </Text>
				</View>
			
			</TouchableOpacity>
			<Text style={ styles.lastText }>Click to roll the dices</Text>
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
	lastText: {
		paddingVertical: 40,
		fontSize: 20,
		color: "orange",
	},
});
