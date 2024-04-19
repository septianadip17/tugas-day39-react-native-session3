import { useState } from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {
  const navigation = useNavigation();
  const handleButtonProfile = () => {
    navigation.navigate('Profile')
  }
  const handleButtonDetail = () => {
    navigation.navigate('Detail')
  }
  return (
    <View>
      <Text>Ini Home</Text>
      <Button title="Go To Profile" onPress={handleButtonProfile}/>
      <Button title="Go To Detail" onPress={handleButtonDetail}/>
    </View>
  )
}

export default HomeScreen;