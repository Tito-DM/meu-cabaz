import AntDesign from "react-native-vector-icons/AntDesign";
import { Divider } from "react-native-paper";
import { Text, View,TouchableOpacity } from "react-native";
const ListCompras = ({ title, data, artigos,navigation }) => {
  return (
    <View
      style={{
        marginVertical: 5,
      }}
    >
      <Divider bold={true} />

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("ProdutoListCompra", { title })}
          activeOpacity={1}
        >
          <View
            style={{
              marginTop: 10,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
              }}
            >
              {title}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 5,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                }}
              >
                {`Artigos adiconados: ${artigos}`}
              </Text>
              <Text
                style={{
                  color: "#fff",
                }}
              >
                {data}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View
          style={{
            display: "flex",
            justifyContent: "center",
            marginRight: 15,
          }}
        >
          <AntDesign
            name="sharealt"
            size={30}
            color="#37B697"
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

export default ListCompras;
