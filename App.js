import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./components/tabNavigation";
import ComprasRecent from "./pages/comprasRecentes";
import Conta from "./pages/conta";
import Home from "./pages/home";
import List from "./pages/Lista";
import Login from "./pages/login";
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
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Registo" component={Registo} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Mercearias" component={Mercearias} />
        <Stack.Screen name="Conta" component={Conta} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="ComprasRecent" component={ComprasRecent} />
        <Stack.Screen name="Mercearia" component={Mercearia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
