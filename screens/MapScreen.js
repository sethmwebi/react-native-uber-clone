import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import tw from "twrnc";
import MapView from "react-native-maps";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard"
import { Icon } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"
import RideOptionsCard from "../components/RideOptionsCard"
import SafeViewAndroid from "../SafeViewAndroid";

const MapScreen = () => {
	const Stack = createNativeStackNavigator()
	const navigation = useNavigation()

	return (
		<SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
			<TouchableOpacity style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`} onPress={() => navigation.navigate("HomeScreen")}>
				<Icon name="menu"/>
			</TouchableOpacity>
			<View style={tw`h-1/2`}>
				<Map />
			</View>
			<View style={tw`h-1/2`}>
				<Stack.Navigator>
					<Stack.Screen 
            name="NavigateCard"
            component={NavigateCard}
            options={{
            	headerShown: false
            }}
					/>
					<Stack.Screen 
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
            	headerShown: false
            }}
					/>
				</Stack.Navigator>
			</View>
		</SafeAreaView>
	);
};

export default MapScreen;
