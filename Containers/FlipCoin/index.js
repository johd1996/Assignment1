import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class FlipCoin extends React.Component {
	state = {
		"result": "head"
	}
	
	generateTask = () => {
		const random = Math.floor(Math.random() * 2) + 1;
		if (random === 1) {
			this.setState({result: "head"})
		} else {
			this.setState({result: "tail"})
		}
	}
	
	render() {
		return (
			<View style={ styles.container }>
				{ this.state.result === "head"
					? <Image
						source={ require("./coin_h.png") }
						style={ {width: 150, height: 150} }/>
					:
					<Image
						source={ require("./coin_t.png") } style={ {
						width: 150, height: 150
					} }
					/>
				}
				<TouchableOpacity
					onPress={ this.generateTask } style={ styles.button }>
					<Text style={ styles.buttonText }>FLIP HERE</Text>
				</TouchableOpacity>
				<Text style={ styles.addText }>Click to see if it's a Head or a Tail</Text>
				<StatusBar style="auto"/>
			</View>
		);
	}
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
		borderRadius: 4,
		paddingHorizontal: 50,
		
	},
	buttonText: {
		color: "white",
		
	},
	addText: {
		color: "orange",
	},
});
