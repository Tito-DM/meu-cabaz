import { ScrollView, Text, View, StyleSheet } from "react-native";
import AppBarComp from "../components/appBar";
import Ionicons from "react-native-vector-icons/Ionicons";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import MerceariaCard from "../components/merceariaCard";
import { useRoute } from "@react-navigation/native";

const PRODUCTS = [
  {
    name: "cenoras",
    discription: "Produção Biológica",
    detalhe: "Quant. Min = 450 gr (3 un.)",
    price: " 1,29€/kg",
    img: require("../assets/images/carrot.jpg"),
  },
  {
    name: "Tomates",
    discription: "Produção Biológica",
    detalhe: "Quant. Min = 450 gr (3 un.)",
    price: " 1,29€/kg",
    img: require("../assets/images/couve.jpg"),
  },

  {
    name: "Couve",
    discription: "Produção Biológica",
    detalhe: "Quant. Min = 450 gr (3 un.)",
    price: " 1,29€/kg",
    img: require("../assets/images/couve1.jpg"),
  },

  {
    name: "Couve",
    discription: "Produção Biológica",
    detalhe: "Quant. Min = 450 gr (3 un.)",
    price: " 1,29€/kg",
    img: require("../assets/images/tomates.jpg"),
  },

  {
    name: "Couve",
    discription: "Produção Biológica",
    detalhe: "Quant. Min = 450 gr (3 un.)",
    price: " 1,29€/kg",
    img: require("../assets/images/repolho.jpg"),
  },
  {
    name: "Couve",
    discription: "Produção Biológica",
    detalhe: "Quant. Min = 450 gr (3 un.)",
    price: " 1,29€/kg",
    img: require("../assets/images/brocoli.jpg"),
  },
];

const Mercearia = ({navigation}) => {
  const route = useRoute()

  return (
    <>
      <AppBarComp navigation={navigation} route={route}/>
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
                <Text>Mercearia Marques</Text>
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
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Mercearia Do Senhor Manel
        </Text>

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
            4.3
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
            width: "100%",
            flexWrap: "wrap",
            marginVertical: 10,
          }}
        >
          {PRODUCTS.map((produto, index) => (
            <MerceariaCard
              key={index}
              nome={produto.name}
              discription={produto.discription}
              detalhe={produto.detalhe}
              price={produto.price}
              img={produto.img}
            />
          ))}
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
});
export default Mercearia;
