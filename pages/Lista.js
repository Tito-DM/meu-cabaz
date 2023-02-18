import { useRoute } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import AppBarComp from "../components/appBar";
import ListCompras from "../components/listCompras";
import Ionicons from "react-native-vector-icons/Ionicons";

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
          marginHorizontal: 10,
        }}
      >
        <ListCompras
          title="Compras para a próxima semana"
          data="12/01/2023"
          artigos="7"
          navigation={navigation}
        />
        <ListCompras
          title="Bens para o bebé"
          data="21/12/2022"
          artigos="2"
          navigation={navigation}
        />
        <ListCompras
          title="Ingredientes para a sopa"
          data="14/09/2022"
          artigos="3"
          navigation={navigation}
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
          right: 10,
          zIndex: 20,
        }}
      >
        <Ionicons name="add" size={30} color="#fff" onPress={() => {}} />
      </View>
    </View>
  );
};

export default List;
