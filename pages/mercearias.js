import { useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import AppBarComp from "../components/appBar";
import Fontisto from "react-native-vector-icons/Fontisto";

const Mercearias = ({ navigation }) => {
  const route = useRoute();

  return (
    <>
      <AppBarComp navigation={navigation} route={route} />

      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: 38.67902,
            longitude: -9.1569,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker coordinate={{ latitude: 38.67902, longitude: -9.1569 }}>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Fontisto name="shopping-store" size={23} />
              <Text>Mercearia do Dia</Text>
            </View>
            <Callout onPress={() => navigation.navigate("Mercearia")}>
              <View
                style={{
                  width: 200,
                }}
              >
                <Text>Mercearia do Dia</Text>
                <Text>Praceta Gervásio Lobato, nº 13</Text>
                <Text>1234-452 Lisboa</Text>
                <View>
                  <Text>21 12 34 567</Text>
                </View>

                <Text>mais informações </Text>
              </View>
            </Callout>
          </Marker>

          <Marker coordinate={{ latitude: 38.683312, longitude: -9.159357 }}>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Fontisto name="shopping-store" size={23} />
              <Text>Mercearia Marquez</Text>
            </View>
            <Callout onPress={() => navigation.navigate("Mercearia")}>
              <View
                style={{
                  width: 200,
                }}
              >
                <Text>Mercearia Marquez</Text>
                <Text>Praceta Gervásio Lobato, nº 13</Text>
                <Text>1234-452 Lisboa</Text>
                <View>
                  <Text>21 12 34 567</Text>
                </View>

                <Text>mais informações </Text>
              </View>
            </Callout>
          </Marker>

          <Marker coordinate={{ latitude: 38.680338, longitude: -9.15974 }}>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Fontisto name="shopping-store" size={23} />
              <Text>Mercearia Global</Text>
            </View>
            <Callout onPress={() => navigation.navigate("Mercearia")}>
              <View
                style={{
                  width: 200,
                }}
              >
                <Text>Mercearia Mercearia Global</Text>
                <Text>Praceta Gervásio Lobato, nº 13</Text>
                <Text>1234-452 Lisboa</Text>
                <View>
                  <Text>21 12 34 567</Text>
                </View>

                <Text>mais informações </Text>
              </View>
            </Callout>
          </Marker>
        </MapView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default Mercearias;
