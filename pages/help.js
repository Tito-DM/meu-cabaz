const {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} = require("react-native");
const { Divider } = require("react-native-paper");
import { useRoute } from "@react-navigation/native";
import AppBarComp from "../components/appBar";

const Help = ({ navigation, route }) => {
  const routes = useRoute();
  return (
    <>
      <AppBarComp navigation={navigation} route={routes} />
      <View style={{
           
        }}>
        <TextInput multiline={true} numberOfLines={4} style={{
            backgroundColor: "#fff"
        }} />
        <TouchableOpacity>
            <Text>Enviar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "#fff",
    fontSize: 18,
    padding: 2,
  },
});

export default Help;
