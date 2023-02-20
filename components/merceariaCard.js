import React, { useContext, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  MyOrderContext,
  MyOrderDispatchContext,
} from "../context/myOrderContext";

const MerceariaCard = ({
  nome,
  discription,
  detalhe,
  price,
  img,
  rating,
  loja,
  navigation,
  setVisible,
}) => {
  const [favorityState, setFavorityState] = useState(false);
  const SetMyOrder = useContext(MyOrderDispatchContext);
  const myorder = React.useContext(MyOrderContext);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() =>
        navigation.navigate("Mercearia", {
          nome,
          rating,
        })
      }
    >
      <View
        style={{
          backgroundColor: "#fff",
          elevation: 1,
          width: "100%",
          position: "relative",
          marginBottom: 5,
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

        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
          }}
        >
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
              }}
            />
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
          {loja && (
            <Text
              style={{
                color: "#000",
                padding: 2,
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              {loja}
            </Text>
          )}
          {discription && <Text>{discription}</Text>}

          {rating && (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons name="star" color="#000" size={13} />
              <Text>{rating}</Text>
            </View>
          )}

          {detalhe && (
            <Text
              style={{
                color: "#000",
                paddingVertical: 2,
              }}
            >
              {detalhe}
            </Text>
          )}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#00796b",
                fontSize: 16,
                fontWeight: "bold",
                marginTop: 5,
              }}
            >
              {`${price}€/kg`}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            display: "flex",
            alignItems: "flex-end",
            padding: 2,
          }}
        >
          <TouchableOpacity activeOpacity={1}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 2,
                backgroundColor: "#00796b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="add"
                size={20}
                color="#fff"
                onPress={() => {
                  setVisible(true);
                  SetMyOrder([
                    ...myorder,
                    {
                      nome,
                      discription,
                      detalhe,
                      price,
                      img,
                      rating,
                      loja,
                    },
                  ]);
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MerceariaCard;
