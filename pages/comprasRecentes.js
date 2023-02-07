import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native";
import AppBarComp from "../components/appBar";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
import ComprasLista from "../components/comprasLista";

const ComprasRecent = ({ navigation }) => {
  const route = useRoute();
  const onChangeSearch = (query) => setSearchQuery(query);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <AppBarComp navigation={navigation} route={route} />
      <Searchbar
        style={{
          borderRadius: 10,
          margin: 5,
        }}
        placeholder="Encontra o Seu Produto"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />

      <ScrollView style={{
        marginTop: 25
      }}>
        <ComprasLista />
        <ComprasLista />
        <ComprasLista />
        <ComprasLista />
      </ScrollView>
    </>
  );
};

export default ComprasRecent;
