import React from "react";
import { ScrollView, View, Text, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import CardComponent from "../components/card";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppBarComp from "../components/appBar";
const ANIMAL_NAMES = [
  {
    id: 1,
    name: "Peixe",
  },
  {
    id: 2,
    name: "Carne",
  },
  {
    id: 3,
    name: "Frutas",
  },
  {
    id: 4,
    name: "Verduras",
  },
  {
    id: 5,
    name: "Cow",
  },
  {
    id: 6,
    name: "Padarias",
  },
  {
    id: 7,
    name: "Horse",
  },
];
const ItemRender = ({ name }) => {
  return (
    <View
      style={{
        display: "flex",
        marginVertical: 10,
        alignItems: "center",
        marginLeft: 10,
        height: 150,
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 50,
          backgroundColor: "#fff",
        }}
      >
        <Ionicons name="basket" size={30} />
      </View>
      <Text style={{ color: "#fff" }}>{name}</Text>
    </View>
  );
};

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <AppBarComp />
      <Searchbar
        style={{
          borderRadius: 10,
          margin: 5,
        }}
        placeholder="Encontra o Seu Produto"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <FlatList
        data={ANIMAL_NAMES}
        renderItem={({ item }) => <ItemRender name={item.name} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: "700",
            letterSpacing: 1,
            color: "#fff",
            textTransform: "uppercase",
          }}
        >
          Ofertas Proximas de ti
        </Text>
        <View
          style={{
            marginLeft: 5,
          }}
        >
          <Ionicons name="location" size={20} color="#FFF" />
        </View>
      </View>

      <ScrollView>
        <CardComponent
          name="Mercearia do Senhor Manel"
          ofertas="ofertas até 20%"
          width="100%"
          height={180}
        />
        <CardComponent
          name="Frutaria LoopBack"
          ofertas="ofertas até 10%"
          width="100%"
          height={180}
        />
        <CardComponent
          name="Mercearia Dos Productos"
          ofertas="ofertas até 10%"
          width="100%"
          height={180}
        />
        <CardComponent
          name="Mercearia Alegre"
          ofertas="ofertas até 10%"
          width="100%"
          height={180}
        />
      </ScrollView>
    </>
  );
};

export default Home;
