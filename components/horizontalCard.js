import { Image, Text, View } from "react-native";

const HorizontalCard = ({name,price,img}) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 100,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        elevation: 2,
        marginVertical: 4,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image
          source={img}
          style={{
            width: 150,
            height: "100%",
            resizeMode: "cover",
          }}
        />
        <View
          style={{
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              color: "#000",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            {name}
          </Text>
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
                fontWeight: "bold",
              }}
            >
             {price}
            </Text>
            <Text
              style={{
                color: "#00796b",
                fontWeight: "bold",
              }}
            >
              €/kg
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginRight: 5,
        }}
      >
        <View
          style={{
            backgroundColor: "#00796b",
            width: 30,
            height: 30,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
            }}
          >
            +
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <Text
            style={{
              color: "#000",
            }}
          >
            6
          </Text>
          <Text
            style={{
              color: "#000",
            }}
          >
            unit
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#00796b",
            width: 30,
            height: 30,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
            }}
          >
            -
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HorizontalCard;
