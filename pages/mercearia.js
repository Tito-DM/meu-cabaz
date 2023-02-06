import { SafeAreaView, ScrollView, Text, View } from "react-native";
import AppBarComp from "../components/appBar";
import CardComponent from "../components/card";

const Mercearia = () => {
  return (
    <SafeAreaView>
        <AppBarComp/>
        
      <ScrollView
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor:"red",
          width: "100%",
          flexWrap:"nowrap"
        }}
      >
      <Text>ghhhh</Text>
      <Text>ghhhh</Text>
      <Text>ghhhh</Text>
      <Text>ghhhh</Text>
      <Text>ghhhh</Text>
      <Text>ghhhh</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Mercearia;
