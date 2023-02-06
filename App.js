import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./components/tabNavigation";
import Home from "./pages/home";
import Mercearia from "./pages/mercearia";
import Mercearias from "./pages/mercearias";
import Registo from "./pages/registo";
import WelcomeScreen from "./pages/welcomeScreen";

const MyTheme = {
  colors: {
    background: "#1b305d",
    color: "#fff",
  },
};
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabNavigation" component={Mercearia} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Mercearias" component={Mercearias} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
