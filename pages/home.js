import React from "react";
import { ScrollView, View, Text, FlatList, Image } from "react-native";
import { Searchbar } from "react-native-paper";
import CardComponent from "../components/card";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppBarComp from "../components/appBar";
import { useRoute } from "@react-navigation/native";
const ANIMAL_NAMES = [
  {
    id: 1,
    name: "Peixe",
    img: require("../assets/images/fish.png")
  },
  {
    id: 2,
    name: "Carne",
    img: require("../assets/images/beef.png")
  },
  {
    id: 3,
    name: "Frutas",
    img: require("../assets/images/fruits.png")
  },
  {
    id: 4,
    name: "Verduras",
    img: require("../assets/images/vegetable.png")
  },
  {
    id: 5,
    name: "Bebidas",
    img: require("../assets/images/soft-drink.png")
    
  },
  {
    id: 6,
    name: "Padarias",
    img: require("../assets/images/grocery.png")
  },
  {
    id: 7,
    name: "diversos",
    img: require("../assets/images/shopping-bag.png")
  },
];
const ItemRender = ({ name,img }) => {
  return (
    <View
      style={{
        display: "flex",
        marginVertical: 10,
        alignItems: "center",
        marginHorizontal: 10,
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
        <Image source={img} style={{
          width: 30,
          height: 30,
          resizeMode: "contain"
        }} />
      </View>
      <Text style={{ color: "#fff" }}>{name}</Text>
    </View>
  );
};

const Home = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const route = useRoute()

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <AppBarComp  navigation={navigation} route={route}/>
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
        renderItem={({ item }) => <ItemRender name={item.name} img={item.img} />}
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
          navigation={navigation}
        />
        <CardComponent
          name="Frutaria LoopBack"
          ofertas="ofertas até 10%"
          width="100%"
          height={180}
          navigation={navigation}
        />
        <CardComponent
          name="Mercearia Dos Productos"
          ofertas="ofertas até 10%"
          width="100%"
          height={180}
          navigation={navigation}
        />
        <CardComponent
          name="Mercearia Alegre"
          ofertas="ofertas até 10%"
          width="100%"
          height={180}
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

export default Home;
