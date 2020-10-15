import React, {Component} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {NavigationService} from "../../Utilities/NavigatorServices";

class HomeScreen extends Component {
	renderItem = (title, screenKey) => {
		return <View style={ styles.itemContainer }>
			<TouchableOpacity style={ styles.buttonContainer } onPress={ () => {
				NavigationService.navigate(screenKey)
			} }>
				<Text style={ styles.buttonText }>{ title }</Text>
			</TouchableOpacity>
		</View>
	}
	
	render() {
		return (
			<View style={ styles.container }>
				{ this.renderItem('Dice Roll', 'RollDiceScreen') }
				{ this.renderItem('Flip Coin', 'FlipCoinScreen') }
				{ this.renderItem('Random Numbers', 'RandomNumbersScreen') }
			</View>
		)
	}
}

export default HomeScreen


const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingBottom: 20,
		backgroundColor: 'white',
	},
	itemContainer: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#ac8585',
		justifyContent: 'center',
		marginHorizontal: 20,
		marginTop: 20,
		borderRadius: 10
	},
	buttonContainer: {
		width: '80%',
		borderWidth: 1,
		borderRadius: 6,
		borderColor: 'white',
		paddingVertical: 10,
		backgroundColor: '#eca547',
	},
	buttonText: {
		fontSize: 20,
		textAlign: 'center',
		color: 'white'
	}
})
