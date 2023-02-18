import { useRoute } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import AppBarComp from "../components/appBar";
import HorizontalCard from "../components/horizontalCard";
import AntDesign from "react-native-vector-icons/AntDesign";

const ProdutoListCompra = ({ navigation,route }) => {
  const routes = useRoute();
  const { title } = route.params;
  return (
    <View
      style={{
        position: "relative",
        height: "100%",
      }}
    >
      <AppBarComp navigation={navigation} route={routes} />
      <Text
        style={{
          color: "#fff",
          fontSize: 25,
          fontWeight: "bold",
          marginTop: 20,
          marginBottom: 5,
          marginLeft: 5,
        }}
      >
      {title}
      </Text>
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          fontWeight: "bold",
          marginVertical: 10,
         
        }}
      >
     {` TOTAL: ${140}€`}
      </Text>
      <ScrollView
        style={{
          marginBottom: 10,
        }}
      >
        <HorizontalCard
          name="Cenoura"
          price="20"
          img={require("../assets/images/carrot.jpg")}
          mercearia="Mercearia manel"
          unit="2"
        />
        <HorizontalCard
          name="Brocoli"
          price="12"
          img={require("../assets/images/brocoli.jpg")}
          mercearia="Mercearia manel"
          unit="5"

        />
        <HorizontalCard
          name="Tomates"
          price="10"
          img={require("../assets/images/tomates.jpg")}
          mercearia="Mercearia manel"
          unit="4"


        />
     
      </ScrollView>
      <View
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          elevation: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
          position: "absolute",
          bottom: 20,
          left: 10,
          zIndex: 20,
        }}
      >
        <AntDesign
          name="shoppingcart"
          size={30}
          color="#fff"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default ProdutoListCompra;