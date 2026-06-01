import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styleLogin } from "../style/styleLogin";

export default function Login({ navigation }){
    return(
        <View style={styleLogin.container}>
            <View style={styleLogin.areaLogo}>
                <Image></Image>
            </View>
            <View style={styleLogin.areaInputs}>
                <TextInput style={styleLogin.email} placeholder="email"></TextInput>
                <View style={styleLogin.areaSenha}>
                    <TextInput style={styleLogin.senha} placeholder="senha"></TextInput>
                    {/* <TouchableOpacity style={styleLogin.linkcadastro} onPress={() => navigation.navigate('Cadastro')}><Text>cadastro</Text></TouchableOpacity> */}
                </View>
                <TouchableOpacity style={styleLogin.btnproximo}><Text>proximo</Text></TouchableOpacity>
            </View>
            <Text>OU</Text>
            <View style={styleLogin.areaOutrosLogins}>
                <View style={styleLogin.coluna1}>
                    <TouchableOpacity><Text>G</Text></TouchableOpacity>
                    <TouchableOpacity><Text>N</Text></TouchableOpacity>
                </View>
                <View style={styleLogin.coluna2}>
                    <TouchableOpacity><Text>F</Text></TouchableOpacity>
                    <TouchableOpacity><Text>Xbox</Text></TouchableOpacity>
                </View>
                <View style={styleLogin.coluna3}>
                    <TouchableOpacity><Text>X</Text></TouchableOpacity>
                    <TouchableOpacity><Text>PS</Text></TouchableOpacity>
                </View>
            </View>
            <View style={styleLogin.areabtn}>
                <TouchableOpacity style={styleLogin.btn}><Text>Avançar</Text></TouchableOpacity>
            </View>
        </View>
    );
}