import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./Containers/HomeScreen";
import {navigationRef} from "./Utilities/NavigatorServices";
import FlipCoin from "./Containers/FlipCoin";
import RandomNumbers from "./Containers/RandomNumbers";
import RollDice from "./Containers/Rolldice";


const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer ref={ navigationRef }>
			<Stack.Navigator>
				<Stack.Screen name="Home"  component={ HomeScreen }/>
				<Stack.Screen name="RollDiceScreen" options={{title:'Roll Dice'}} component={ RollDice }/>
				<Stack.Screen name="FlipCoinScreen" options={{title:'Flip Coin'}} component={ FlipCoin }/>
				<Stack.Screen name="RandomNumbersScreen" options={{title:'Random Numbers'}} component={ RandomNumbers }/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
