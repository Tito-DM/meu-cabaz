import { Image, SafeAreaView, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const WelcomeScreen = ({navigation}) => {

   setTimeout(() => {
    navigation.navigate("Registo")
   }, 5000);
  
  return (
    <SafeAreaView style={{
      position:"relative",
      height: "100%"
    }}>
      <View
        style={{
          position: "relative",
        }}
      >
        <View
          style={{
            transform: [{ translateY: -80 }],
          }}
        >
          <Image
            source={require("../assets/images/Vector1.png")}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
          />
        </View>

        <View
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            position: "absolute",
            top: "20%",
          }}
        >
          <Ionicons name="basket" size={100} color="#1b305d" />

          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              letterSpacing: 1,
              color: "#1b305d",
              marginTop: 50,
            }}
          >
            O Meu CaBaz
          </Text>
         
        </View>
        
      </View>
      <View style={{
        display:"flex",
        alignItems: "center",
        width: "100%",
        position:"absolute",
        bottom: 80
      }}>
      <ActivityIndicator animating={true} color={MD2Colors.green100}  size="large"/>
      </View>
     
    </SafeAreaView>
  );
};

export default WelcomeScreen;
