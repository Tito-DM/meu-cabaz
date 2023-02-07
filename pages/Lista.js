import { useRoute } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import AppBarComp from "../components/appBar";
import HorizontalCard from "../components/horizontalCard";
import AntDesign from "react-native-vector-icons/AntDesign";

const List = ({ navigation }) => {
  const route = useRoute();
  return (
    <View
      style={{
        position: "relative",
        height: "100%",
      }}
    >
      <AppBarComp navigation={navigation} route={route} />
      <Text
        style={{
          color: "#fff",
          fontSize: 25,
          fontWeight: "bold",
          marginVertical: 30,
          marginLeft: 5,
        }}
      >
        Lista de Compras
      </Text>
      <ScrollView
        style={{
          marginBottom: 10,
        }}
      >
        <HorizontalCard
          name="Cenoura"
          price="12"
          img={require("../assets/images/carrot.jpg")}
          mercearia="Mercearia manel"
        />
        <HorizontalCard
          name="Brocoli"
          price="12"
          img={require("../assets/images/brocoli.jpg")}
          mercearia="Mercearia manel"

        />
        <HorizontalCard
          name="Tomates"
          price="12"
          img={require("../assets/images/tomates.jpg")}
          mercearia="Mercearia manel"

        />
        <HorizontalCard
          name="Couve"
          price="12"
          img={require("../assets/images/couve1.jpg")}
          mercearia="Mercearia  manel"

        />
        <HorizontalCard
          name="Repolho"
          price="12"
          img={require("../assets/images/couve.jpg")}
          mercearia="Mercearia manel"

        />
        <HorizontalCard
          name="Cenoura"
          price="12"
          img={require("../assets/images/carrot.jpg")}
          mercearia="Mercearia manel"

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

export default List;
