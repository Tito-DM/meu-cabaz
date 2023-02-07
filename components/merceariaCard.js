import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const MerceariaCard = ({ nome, discription, detalhe, price, img }) => {
  const [favorityState, setFavorityState] = useState(false);

  return (
    <View
      style={{
        backgroundColor: "#fff",
        elevation: 1,
        margin: 5,
        width:"47.5%",
        position: "relative"
        
      }}
    >
      <Image
        source={img}
        style={{
          width: "100%",
          height: 100,
          resizeMode: "cover",
        }}
      />

      <View style={{
        position: "absolute",
        top: 0,
        right: 0,
      }}>
      {favorityState ? (
            <Ionicons
              name="heart"
              size={30}
              color="#fff"
              onPress={() => setFavorityState(!favorityState)}
              style={{
                marginRight: 5,
              }}
            />
          ) : (
            <Ionicons
              name="heart-outline"
              size={30}
              color="#fff"
              onPress={() => setFavorityState(!favorityState)}
              style={{
                marginRight: 5,
              }}/>
          )}
      </View>

      <View
        style={{
          padding: 5,
        }}
      >
        <Text
          style={{
            color: "#000",
            padding: 2,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {nome}
        </Text>
        <Text
          style={{
            
          }}
        >
          {discription}
        </Text>

        <Text
          style={{
            color: "#000",
            paddingVertical: 2,
          }}
        >
          {detalhe}
        </Text>
        <Text
          style={{
            color: "#00796b",
            fontSize: 16,
            fontWeight: "bold",
            
          }}
        >
          {price}
        </Text>
      </View>
      <View style={{
        width:"100%",
        display: "flex",
        alignItems: "flex-end",
        padding: 2,
      }}>
        <TouchableOpacity
        activeOpacity={1}
        >
          <View style={{
            width: 30,
            height: 30,
            borderRadius: 2,
            backgroundColor: "#00796b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
           
          

          }}>
            <Ionicons name="add" size={20} color="#fff"/>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MerceariaCard;
