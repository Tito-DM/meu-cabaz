const { Image, StyleSheet, View, Text, TouchableOpacity } = require("react-native");
const { Divider } = require("react-native-paper");

const ComprasLista = ({navigation,title}) => {
  return (
    <TouchableOpacity 
    activeOpacity={1}
    onPress={() => navigation.navigate("ProdutoListCompra", { title })}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          marginTop: 10,
          marginBottom: 5,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/vegetable.png")}
            style={{
              resizeMode: "contain",
              width: 50,
              height: 50,
            }}
          />
          <View
            style={{
              marginLeft: 20,
            }}
          >
            <Text style={styles.textStyle}>{title}</Text>
            <Text style={styles.textStyle}>Nº de Artigos: 9</Text>
            <Text style={styles.textStyle}>12/01/2023</Text>
          </View>
        </View>

        <View>
          <Text
            style={[styles.textStyle, { fontWeight: "bold", fontSize: 20 }]}
          >
            20,32€
          </Text>
        </View>
      </View>
      <Divider bold={true} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "#fff",
    fontSize: 18,
    padding: 2,
  },
});

export default ComprasLista;
