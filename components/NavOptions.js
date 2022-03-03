import React from "react";
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity, FlatList, Image } from "react-native";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux"
import { selectOrigin } from "../slices/navSlice"

const data = [
	{
		id: "123",
		title: "Get a ride",
		image: "https://links.papareact.com/3pn",
		screen: "MapScreen",
	},
	{
		id: "456",
		title: "Order food",
		image: "https://links.papareact.com/28w",
		screen: "EatsScreen",
	},
];

const NavOptions = () => {
	const navigation = useNavigation()
	const origin = useSelector(selectOrigin)
	return (
		<FlatList
			data={data}
			keyExtractor={(item) => item.id}
			horizontal
			showsHorizontalScrollIndicator={false}
			renderItem={({ item }) => (
				<TouchableOpacity
					onPress={() => navigation.navigate(item.screen)}
					style={tw`p-2 pl-6 pb-8 pt-4 w-[100%] overflow-hidden m-2 bg-gray-200 w-36`}
					disabled={!origin}
				>
					<View style={tw`${!origin ? "opacity-20" : ""}`}>
						<Image
							source={{ uri: item.image }}
							style={{ width: 120, height: 120, resizeMode: "contain" }}
						/>
						<Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
						<Icon
							style={tw`p-2 bg-black rounded-full w-10 mt-4`}
							name="arrowright"
							color="white"
							type="antdesign"
						/>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default NavOptions;
