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

const Login = ({ navigation }) => {
  const [data, setText] = useState({
    name:"",
    email: "",
    passward: "",
    pass_confirmation: "",
  });
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
          label="Email"
          passwordRules={true}
          value={data.email}
          style={style.textinputStyle}
          onChangeText={(text) => setText({...data, email: text})}
        />

        <TextInput
          label=" palavra-chave"
          value={data.passward}
          style={style.textinputStyle}
          secureTextEntry={true}
          onChangeText={(text) => setText({...data, passward: text,})}
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
            Entrar
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
            cria uma conta?
          </Text>
          <TouchableOpacity
          activeOpacity={1}
          onPress={()=>navigation.navigate("Registo")}
          >
          <Text
            style={{
              color: "#37B697",
              marginLeft: 5,
            }}
          >
            Entre aqui
          </Text>
          </TouchableOpacity>
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

export default Login;
