import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Conta from "../pages/conta";
import Favorities from "../pages/favority";
import Home from "../pages/home";
import List from "../pages/Lista";
import Mercearias from "../pages/mercearias";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Início") {
            iconName = "home";
          } else if (route.name === "List") {
            iconName = "receipt-outline";
          } else if (route.name === "Mercearias") {
            iconName = "basket";
          } else if (route.name === "Conta") {
            iconName = "person-circle";
          } else if (route.name === "Favoritos") {
            iconName = "heart";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#6DE2C6",
        tabBarStyle: {
          backgroundColor: "#1b305d",
          paddingBottom:5
        },
      })}
    >
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="List" component={List} />
      <Tab.Screen name="Favoritos" component={Favorities} />
      <Tab.Screen name="Mercearias" component={Mercearias} />
      <Tab.Screen name="Conta" component={Conta} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
