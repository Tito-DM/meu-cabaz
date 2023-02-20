import React from "react";
import { ScrollView, View, Text, FlatList, Image ,StyleSheet} from "react-native";
import { Searchbar, Checkbox} from "react-native-paper";
import CardComponent from "../components/card";
import Ionicons from "react-native-vector-icons/Ionicons";
import AppBarComp from "../components/appBar";
import { useRoute } from "@react-navigation/native";
import MerceariaCard from "../components/merceariaCard";
import { PRODUTOS } from "../produtosdb";
import { MyOrderContext } from "../context/myOrderContext";
import Dialog from "react-native-dialog";

const ANIMAL_NAMES = [
  {
    id: 1,
    name: "Peixe",
    img: require("../assets/images/fish.png"),
  },
  {
    id: 2,
    name: "Carne",
    img: require("../assets/images/beef.png"),
  },
  {
    id: 3,
    name: "Frutas",
    img: require("../assets/images/fruits.png"),
  },
  {
    id: 4,
    name: "Verduras",
    img: require("../assets/images/vegetable.png"),
  },
  {
    id: 5,
    name: "Bebidas",
    img: require("../assets/images/soft-drink.png"),
  },
  {
    id: 6,
    name: "Padarias",
    img: require("../assets/images/grocery.png"),
  },
  {
    id: 7,
    name: "diversos",
    img: require("../assets/images/shopping-bag.png"),
  },
];

const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchControl, setSearchControl] = React.useState(false);
  const myorder = React.useContext(MyOrderContext);
  const route = useRoute();
  const onChangeSearch = (query) => setSearchQuery(query);
  const [visible, setVisible] = React.useState(false);
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(false);

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    setVisible(false);
  };
  console.log(myorder);
  const filterProducts = (query, navigation) => {
    return (
      <ScrollView
        style={{
          height: "100%",
        }}
      >

<View style={styles.container1}>
          <Dialog.Container visible={visible}>
            <Dialog.Title>Account delete</Dialog.Title>
            <Dialog.Description>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Checkbox
                  status={checked1 ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked1(!checked1);
                  }}
                />
                <Text>Compras para a próxima semana</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Checkbox
                  status={checked2 ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked2(!checked2);
                  }}
                />
                <Text>Bens para o bebé</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
               
                <Checkbox
                  status={checked3 ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked3(!checked3);
                  }}
                />
                <Text>Ingredientes para a sopa</Text>
              </View>
            </Dialog.Description>
            <Dialog.Button label="Cancel" onPress={handleCancel} />
            <Dialog.Button label="Ok" onPress={handleDelete} />
          </Dialog.Container>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            flexWrap: "wrap",
            marginVertical: 10,
          }}
        >
          {PRODUTOS.filter(
            (produto) =>
              produto.name === query.trim().toLowerCase() ||
              produto.category === query.toLowerCase()
          )
            .sort(function (a, b) {
              return a.price - b.price;
            })
            .map((p) => {
              return (
                <View
                  key={p.id}
                  style={{
                    margin: 5,
                    width: "47.5%",
                  }}
                >
                  <MerceariaCard
                    setVisible={setVisible}
                    nome={p.name}
                    loja={p.loja}
                    price={p.price}
                    rating={p.rating}
                    img={p.img}
                    navigation={navigation}
                    from="search"
                  />
                </View>
              );
            })}
        </View>
      </ScrollView>
    );
  };

  const ItemRender = ({ name, img }) => {
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
          <Image
            source={img}
            style={{
              width: 30,
              height: 30,
              resizeMode: "contain",
            }}
          />
        </View>
        <Text style={{ color: "#fff" }}>{name}</Text>
      </View>
    );
  };

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
        onSubmitEditing={() => {
          setSearchQuery("");
        }}
      />

      <FlatList
        data={ANIMAL_NAMES}
        renderItem={({ item }) => (
          <ItemRender name={item.name} img={item.img} />
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      {!searchQuery && (
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
      )}
      {searchQuery || searchControl ? (
        filterProducts(searchQuery, navigation)
      ) : (
        <ScrollView>
          <CardComponent
            name="Mercearia Marquez"
            ofertas="ofertas até 20%"
            width="100%"
            height={180}
            navigation={navigation}
            rating="3.4"
          />
          <CardComponent
            name="Frutaria Dos Sabores"
            ofertas="ofertas até 15%"
            width="100%"
            height={180}
            navigation={navigation}
            rating="4.4"
          />
          <CardComponent
            name="Mercearia Produtos Frescos"
            ofertas="ofertas até 5%"
            width="100%"
            height={180}
            navigation={navigation}
            rating="3"
          />
          <CardComponent
            name="Mercearia Alegre"
            ofertas="ofertas até 10%"
            width="100%"
            height={180}
            navigation={navigation}
            rating="4.7"
          />
        </ScrollView>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Home;
