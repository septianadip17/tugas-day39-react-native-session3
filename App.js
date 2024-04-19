import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://weather-api-tau-six.vercel.app/provinces');
      const jsonData = await response.json();
      setData(jsonData.data); // Assigning only the 'data' property from the received JSON
      setLoading(false);
    } catch(error) {
      console.error('Error fetching data', error);
      setLoading(false);
    }
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text>ID: {item.id}</Text>
        <Text>Name: {item.name}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>
        Data
      </Text>
      {loading ? (
        <ActivityIndicator size='large' color='#0000ff' />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default App;
