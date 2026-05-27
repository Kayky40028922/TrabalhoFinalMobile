import { Image, Text, TextInput, View } from "react-native";
import { styleLogin } from "../style/styleLogin";

export default function Login(){
    return(
        <View style={styleLogin.container}>
            <View style={styleLogin.areaLogo}>
                <Image></Image>
            </View>
            <View style={styleLogin.areaImputs}>
                <TextInput style={styleLogin.email}></TextInput>
                <View style={styleLogin.areaSenha}>
                    <TextInput style={styleLogin.senha}></TextInput>
                    <
                </View>
            </View>
        </View>
    );
}