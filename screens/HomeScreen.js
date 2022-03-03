import React from "react";
import { Text, StyleSheet, View, SafeAreaView, Image } from "react-native";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import SafeViewAndroid from "../SafeViewAndroid"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from "@env"
import { useDispatch } from "react-redux"
import { setDestination, setOrigin } from "../slices/navSlice"
import NavFavourites from "../components/NavFavourites"

const HomeScreen = () => {
		const dispatch = useDispatch()
		return (
			<SafeAreaView style={[tw`bg-white h-full`, SafeViewAndroid.AndroidSafeArea]}>
				<View style={tw`p-5`}>
					<Image
						style={{
							height: 100,
							width: 100,
							resizeMode: "contain",
						}}
						source={{
							uri: "https://links.papareact.com/gzs",
						}}
					/>
					<GooglePlacesAutocomplete
						placeholder="Where from?"
						styles={{
							container: {
								flex: 0
							},
							textInput: {
								fontSize: 18
							}
						}}
						query={{
							key: GOOGLE_MAPS_API_KEY,
							language: 'en'
						}}
						onPress={(data, details = null) => {
							dispatch(setOrigin({
								location: details.geometry.location,
								description: data.description
							}))

							dispatch(setDestination(null))
						}}
						returnKeyType={"search"}
						fetchDetails={true}
						minLength={2}
						enablePoweredByContainer={false}
					  nearbyPlacesAPI="GooglePlacesSearch"
					  debounce={400}
					/>
					<NavOptions />
					<NavFavourites />
				</View>
			</SafeAreaView>
		);
}

export default HomeScreen;