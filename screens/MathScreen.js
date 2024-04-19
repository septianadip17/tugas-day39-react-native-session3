import { useState } from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";


const MathScreen = () => {
  const [count, setCount] = useState(0);
  const tambahAngka = () => {
    setCount(count + 1);
  }
  const kurangAngka = () => {
    setCount(count - 1);
  };
  return (
    <View>
      <Text>Nilai: {count}</Text>
      <Button title="tambah" onPress={tambahAngka}/>
      <Button title="kurang" onPress={kurangAngka}/>
    </View>
  )
}

export default MathScreen;