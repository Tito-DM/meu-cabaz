import { Image, Text, View } from "react-native";

const HorizontalCard = ({name,price,img, mercearia}) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 100,
        justifyContent: "space-between",
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
              color: "#fff",
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
                color: "#fff",
                fontWeight: "bold",
              }}
            >
             {price}
            </Text>
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              €/kg
            </Text>
          </View>
          <Text style={{
            fontWeight: "bold",
            color: "#fff"
          }}
          >{mercearia}</Text>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: -20,
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
              color: "#fff",
            }}
          >
            6
          </Text>
          <Text
            style={{
              color: "#fff",
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
