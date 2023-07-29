import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecondScreen from "./screens/SecondScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: "Bienvenido"}}
        />

        <Stack.Screen
          name="Calculadora"
          component={SecondScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}