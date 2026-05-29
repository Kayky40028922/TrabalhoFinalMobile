import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styleLogin } from "../style/styleLogin";

export default function Login({ navigation }){
    return(
        <View style={styleLogin.container}>
            <View style={styleLogin.areaLogo}>
                <Image></Image>
            </View>
            <View style={styleLogin.areaImputs}>
                <TextInput style={styleLogin.email}></TextInput>
                <View style={styleLogin.areaSenha}>
                    <TextInput style={styleLogin.senha}></TextInput>
                    <TouchableOpacity style={styleLogin.btn} onPress={() => navigation.navigate('Cadastro')}><Text>cadastro</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}