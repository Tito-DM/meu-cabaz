import { StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from "react-native-maps";
import AppBarComp from "../components/appBar";

const Mercearias = () => {
  return (
    <>
      <AppBarComp />

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
