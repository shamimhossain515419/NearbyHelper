import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";

const services = [
  { id: "1", name: "ডাক্তার" },
  { id: "2", name: "গাড়ি সার্ভিস" },
  { id: "3", name: "হোম সার্ভিস" },
  { id: "4", name: "টিউটর" },
];

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>NearbyHelper</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginText}>লগইন</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={services}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  title: { fontSize: 22, fontWeight: "bold" },
  loginText: { color: "#2563eb", fontWeight: "600" },
  card: {
    flex: 1,
    backgroundColor: "#e0f2fe",
    margin: 8,
    padding: 24,
    borderRadius: 10,
    alignItems: "center",
  },
  cardText: { fontSize: 16, fontWeight: "500" },
});
