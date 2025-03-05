import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from "react-native";

const countries = [
  { name: "Kenya", flag: require("../../assets/images/kenya-flag.png") },
  { name: "Tanzania", flag: require("../../assets/images/tanzania-flag.png") },
  { name: "Nigeria", flag: require("../../assets/images/nigeria-flag.png") },
  { name: "Somalia", flag: require("../../assets/images/somalia-flag.png") },
  { name: "Ethiopia", flag: require("../../assets/images/ethiopia-flag.png") },
  { name: "South Sudan", flag: require("../../assets/images/south_sudan-flag.png") },
  { name: "Algeria", flag: require("../../assets/images/algeria-flag.png") },
  { name: "Mozambique", flag: require("../../assets/images/mozambique-flag.png") },
  { name: "Uganda", flag: require("../../assets/images/uganda-flag.png") },
];

const CountrySelector = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>SELECT A COUNTRY</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Country"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredCountries}
        keyExtractor={(item) => item.name}
        numColumns={3}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.flagContainer, selected === item.name && styles.selectedFlag]}
            onPress={() => setSelected(item.name)}
          >
            <Image source={item.flag} style={styles.flag} />
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.nextButton}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: { fontSize: 16, fontWeight: "bold", marginBottom: 10 },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  grid: { alignItems: "center" },
  flagContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 50,
  },
  selectedFlag: {
    borderWidth: 2,
    borderColor: "#f0a500",
  },
  flag: { width: 50, height: 50, resizeMode: "contain" },
  nextButton: {
    backgroundColor: "#f0a500",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 20,
  },
  nextText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default CountrySelector;
