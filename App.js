import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./src/telas/Login/login";
import Cadastro from "./src/telas/Cadastro/cadastro";
import Home from "./src/telas/Home/home";
import Categorias from "./src/telas/Categorias/categorias";
import Perfil from "./src/telas/Perfil/perfil";

const Stack = createNativeStackNavigator()

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown:false}}
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Perfil' component={Perfil} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Categorias' component={Categorias} />
        <Stack.Screen name='Cadastro' component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
