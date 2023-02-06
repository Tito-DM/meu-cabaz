import { Image } from "react-native";
import { Card, Text } from "react-native-paper";

const CardComponent = ({ name, ofertas,width,height }) => {
  return (
    <Card
      mode="elevated"
      style={{
        borderRadius: 0,
        marginTop: 15,
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={require("../assets/images/nrd-D6Tu_L3chLE-unsplash.jpg")}
        style={{
          width: width,
          height: height,
        }}
      />
      <Card.Content>
        <Text variant="titleLarge">{name}</Text>
        <Text variant="bodyMedium">{ofertas}</Text>
      </Card.Content>
    </Card>
  );
};

export default CardComponent;
