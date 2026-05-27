import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/telas/Login/login";

const Stack = createNativeStackNavigator()

export default function App() {
  

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown:false}}
      >
        <Stack.Screen name='login' component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
