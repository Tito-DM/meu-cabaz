import {  Appbar } from "react-native-paper";

const AppBarComp = () => {
  return (
    <Appbar.Header
      style={{
        backgroundColor: "#1b305d",
      }}
    >
      {/* <Appbar.BackAction onPress={() => {}} />*/}
      <Appbar.Content title="Meu CaBaz" color="#fff" />
      <Appbar.Action icon="bell" color="#fff" onPress={() => {}} />
    </Appbar.Header>
  );
};

export default AppBarComp;
