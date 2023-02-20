import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import AppBarComp from "../components/appBar";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
const { Image, StyleSheet, View, Text } = require("react-native");
const { Divider } = require("react-native-paper");
import Ionicons from "react-native-vector-icons/Ionicons";

const Lista = ({ name }) => {
  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 5,
          marginTop: 10,
          marginBottom: 5,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/thomas-le-pRJhn4MbsMM-unsplash.jpg")}
            style={{
              width: 100,
              height: 100,
            }}
          />
          <View
            style={{
              marginLeft: 20,
            }}
          >
            <Text style={styles.textStyle}>{name}</Text>
          </View>
        </View>

        <View>
          <Ionicons
            name="heart"
            size={30}
            color="#fff"
            style={{
              marginRight: 5,
            }}
          />
        </View>
      </View>
      <Divider bold={true} />
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "#fff",
    fontSize: 18,
    padding: 2,
  },
});

const Favorities = ({ navigation }) => {
  const route = useRoute();
  const onChangeSearch = (query) => setSearchQuery(query);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <AppBarComp navigation={navigation} route={route} />
      <Searchbar
        style={{
          borderRadius: 10,
          margin: 5,
        }}
        placeholder="Encontra o Seu Produto"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Text
        style={{
          color: "#fff",
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 40,
          letterSpacing: 2,
          marginLeft: 5,
        }}
      >
        Meus Favoritos
      </Text>
      <ScrollView
        style={{
          marginTop: 10,
        }}
      >
        <Lista name="Frutaria Dos Sabores" />
        <Lista name="Mercearia Marquez" />
        <Lista name="Mercearia Produtos Frescos" />
        <Lista name="Mercearia Alegre" />
      </ScrollView>
    </>
  );
};

export default Favorities;
