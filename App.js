import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./src/telas/Login/login";
import Cadastro from "./src/telas/Cadastro/cadastro";
import Home from "./src/telas/Home/home";

const Stack = createNativeStackNavigator()

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown:false}}
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Cadastro' component={Cadastro} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
