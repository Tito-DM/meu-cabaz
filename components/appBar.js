import { Appbar } from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";

const AppBarComp = ({ route, navigation }) => {
  return (
    <Appbar.Header
      style={{
        backgroundColor: "#1b305d",
      }}
    >
      {route?.name !== "Início" && (
        <Appbar.BackAction color="#fff" onPress={() => navigation?.goBack()} />
      )}
      <Appbar.Content title="Meu CaBaz" color="#fff" />
      <AntDesign
        name="shoppingcart"
        size={30}
        color="#fff"
        onPress={() => {}}
      />
      <Appbar.Action icon="bell" color="#fff" onPress={() => {}} />
    </Appbar.Header>
  );
};

export default AppBarComp;
