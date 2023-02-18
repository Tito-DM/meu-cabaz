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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Registo = ({ navigation }) => {
  const [alert, setAlert] = useState(false);
  const [data, setText] = useState({
    name: "",
    email: "",
    passward: "",
    pass_confirmation: "",
  });
  
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView> 
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
          marginTop: -30,
        }}
      >
        {alert && (
          <View
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              marginTop: -20,
              paddingVertical: 12,
            }}
          >
            <Text
              style={{
                color: "red",
                fontWeight: "bold",
              }}
            >
              Completa Todos os Compus
            </Text>
          </View>
        )}
         
          <TextInput
            label="Nome"
            value={data.name}
            style={style.textinputStyle}
            onChangeText={(text) => setText({ ...data, name: text })}
          />

          <TextInput
            label="Email"
            passwordRules={true}
            value={data.email}
            style={style.textinputStyle}
            onChangeText={(text) => setText({ ...data, email: text })}
          />

          <TextInput
            label=" palavra-chave"
            value={data.passward}
            style={style.textinputStyle}
            secureTextEntry={true}
            onChangeText={(text) => setText({ ...data, passward: text })}
          />

          <TextInput
            label="Repita a palavra-chave"
            value={data.pass_confirmation}
            style={style.textinputStyle}
            secureTextEntry={true}
            onChangeText={(text) =>
              setText({ ...data, pass_confirmation: text })
            }
          />

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              Object.keys(data).length !== 0
                ? navigation.navigate("TabNavigation")
                : setAlert(true);
            }}
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
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate("Login")}
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
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textinputStyle: {
    borderRadius: 5,
    marginBottom: 20,
  },
  container: {
    flex: 1,
  },
});

export default Registo;
