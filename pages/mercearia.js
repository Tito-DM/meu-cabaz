import React from "react";
import { ScrollView, Text, View, StyleSheet, Dimensions } from "react-native";
import AppBarComp from "../components/appBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import MerceariaCard from "../components/merceariaCard";
import { useRoute } from "@react-navigation/native";
import Dialog from "react-native-dialog";
import { Checkbox } from "react-native-paper";

const PRODUCTS = [
  {
    name: "cenoras",
    discription: "Produção Biológica",
    detalhe: "Quant. Min = 450 gr (3 un.)",
    price: " 1,60",
    img: require("../assets/images/carrot.jpg"),
  },
  {
    name: "Tomates",
    discription: "Produção Biológica",
    detalhe: "Quant. Min = 450 gr (3 un.)",
    price: " 1,50",
    img: require("../assets/images/tomates.jpg"),
  },

  {
    name: "Couve",
    discription: "Produção Biológica",
    detalhe: "Quant. Min = 450 gr (3 un.)",
    price: " 1,04",
    img: require("../assets/images/couve1.jpg"),
  },

  {
    name: "Repolho",
    discription: "Produção Biológica",
    detalhe: "Quant. Min = 450 gr (3 un.)",
    price: " 4,29",
    img: require("../assets/images/repolho.jpg"),
  },
  {
    name: "Brocoli",
    discription: "Produção Biológica",
    detalhe: "Quant. Min = 450 gr (3 un.)",
    price: " 1,39",
    img: require("../assets/images/brocoli.jpg"),
  },
];

const Mercearia = ({ navigation, route }) => {
  const routes = useRoute();
  const { name, rating } = route.params;
  const [favorityState, setFavorityState] = React.useState(false);
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
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
  return (
    <>
      <AppBarComp navigation={navigation} route={routes} />
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}>
            <Callout>
              <View>
                <Text>{name}</Text>
                <Text>Praceta Gervásio Lobato, nº 13</Text>
                <Text>1234-452 Lisboa</Text>
                <View>
                  <Text>21 12 34 567</Text>
                </View>
                <View>
                  <Text>mais informações </Text>
                </View>
              </View>
            </Callout>
          </Marker>
        </MapView>
      </View>

      <View
        style={{
          padding: 5,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {name}
          </Text>
          {favorityState ? (
            <Ionicons
              name="heart"
              size={30}
              color="#fff"
              onPress={() => setFavorityState(!favorityState)}
              style={{
                marginRight: 5,
              }}
            />
          ) : (
            <Ionicons
              name="heart-outline"
              size={30}
              color="#fff"
              onPress={() => setFavorityState(!favorityState)}
              style={{
                marginRight: 5,
              }}
            />
          )}
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="star" color="#fff" size={13} />
          <Text
            style={{
              color: "#fff",
              margin: 5,
            }}
          >
            {rating}
          </Text>
          <Text style={styles.textstyle}>Classificação</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="location" color="#fff" size={13} />
          <Text style={[styles.textstyle, { marginLeft: 2 }]}>
            Rua Marques n43 almada
          </Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: windowWidth,
            flexWrap: "wrap",
          }}
        >
          {PRODUCTS.map((produto, index) => (
            <View
              key={index}
              style={{
                margin: 5,
                width: "47.5%",
              }}
            >
              <MerceariaCard
                nome={produto.name}
                discription={produto.discription}
                detalhe={produto.detalhe}
                price={produto.price}
                img={produto.img}
                setVisible={setVisible}
              />
            </View>
          ))}
        </View>
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
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "20%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  textstyle: {
    color: "#fff",
  },
  container1: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Mercearia;
