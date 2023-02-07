import { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

const Registo = ({ navigation }) => {
  const [text, setText] = useState("");
  return (
    <SafeAreaView>
      <View
        style={{
          position: "relative",
        }}
      >
        <Image
          source={require("../assets/images/Vector.png")}
          style={{
            width: "100%",
            resizeMode: "cover",
          }}
        />
        <View
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            position: "absolute",
            top: "15%",
          }}
        >
          <Ionicons name="basket" size={100} color="#1b305d" />

          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              letterSpacing: 1,
              color: "#1b305d",
              marginTop: 20,
            }}
          >
            O Meu CaBaz
          </Text>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 10,
        }}
      >
        <TextInput
          label="Nome"
          value={text}
          style={style.textinputStyle}
          onChangeText={(text) => setText(text)}
        />

        <TextInput
          label="Email"
          passwordRules={true}
          value={text}
          style={style.textinputStyle}
          onChangeText={(text) => setText(text)}
        />

        <TextInput
          label=" palavra-chave"
          value={text}
          style={style.textinputStyle}
          onChangeText={(text) => setText(text)}
        />

        <TextInput
          label="Repita a palavra-chave"
          value={text}
          style={style.textinputStyle}
          onChangeText={(text) => setText(text)}
        />

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate("TabNavigation")}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#37B697",
            height: 50,
            marginBottom: 5,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
            }}
          >
            Registar
          </Text>
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
            }}
          >
            Já tem uma conta?
          </Text>
          <Text
            style={{
              color: "#37B697",
              marginLeft: 5,
            }}
          >
            Entre aqui
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textinputStyle: {
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default Registo;
