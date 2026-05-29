import { Text, TouchableOpacity, View } from "react-native";
import { styleCadastro } from "../style/styleCadastro";

export default function Cadastro({ navigation }){
    return(
        <View style={styleCadastro.container}>
            <TouchableOpacity style={styleCadastro.btn} onPress={() => navigation.navigate('Login')}><Text>login</Text></TouchableOpacity>
            <TouchableOpacity style={styleCadastro.btn2} onPress={() => navigation.navigate('Home')}><Text>home</Text></TouchableOpacity>
        </View>
    );
}