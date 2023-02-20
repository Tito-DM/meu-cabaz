import { useRoute } from "@react-navigation/native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Divider } from "react-native-paper";
import AppBarComp from "../components/appBar";
import AntDesign from "react-native-vector-icons/AntDesign";

const Conta = ({ navigation }) => {
  const route = useRoute();
  return (
    <>
      <AppBarComp navigation={navigation} route={route} />
      <View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 50,
          }}
        >
          <Avatar.Text size={100} label="Nzinga" color="#fff" />
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 10,
            }}
          >
            Nzinga
          </Text>
        </View>

        <ScrollView
          style={{
            width: "100%",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 20,
              paddingLeft: 10,
            }}
          >
            <AntDesign name="user" size={30} color="#fff" />
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 20,
                paddingLeft: 10,
              }}
            >
              Editar Conta
            </Text>
          </View>

          <Divider bold={true} />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 20,
              paddingLeft: 10,
            }}
          >
            <AntDesign name="wallet" size={30} color="#fff" />
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 20,
                paddingLeft: 10,
              }}
            >
              Carteira
            </Text>
          </View>

          <Divider bold={true} />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 20,
              paddingLeft: 10,
            }}
          >
            <AntDesign name="shoppingcart" size={30} color="#fff" />
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate("ComprasRecent")}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 20,
                  paddingLeft: 10,
                }}
              >
                Compras Recentes
              </Text>
            </TouchableOpacity>
          </View>

          <Divider bold={true} />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 20,
              paddingLeft: 10,
            }}
          >
            <AntDesign name="questioncircleo" size={30} color="#fff" />
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate("Help")}
            >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 20,
                paddingLeft: 10,
              }}
            >
              Ajuda
            </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Conta;
