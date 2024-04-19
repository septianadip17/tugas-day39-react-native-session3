import { useState } from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";



const ProfileScreen = () => {
  const navigation = useNavigation();
  const handleButtonHome = () => {
    navigation.navigate('Home')
  }
  const handleButtonDetail = () => {
    navigation.navigate('Detail')
  }
  return (
    <View>
      <Text>Ini Profile</Text>
      <Button title="Go To Profile" onPress={handleButtonHome}/>
      <Button title="Go To Detail" onPress={handleButtonDetail}/>
    </View>
  )
}

export default ProfileScreen;