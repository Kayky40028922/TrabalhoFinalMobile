import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styleLogin } from "../style/styleLogin";
import { useState } from "react";
import axios from "axios";

export default function Login({ navigation }){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    // const procurar = async ()=>{
    //     try {

    //     const response = await axios.post(
    //         "http://169.254.3.230:3000/logar",
    //         {
    //             email,
    //             senha
    //         }
    //     );

    //     if (response.data.sucesso) {

    //         Alert.alert("login feito");

    //         // navigation.navigate('Home');

    //     } else {

    //         Alert.alert(
    //             "Erro",
    //             response.data.mensagem
    //         );

    //     }


    // } catch (error) {

    //     Alert.alert("email ou senha nao exite");
    //     console.log(error);

    // };
    // };
    const procurar = ()=>{
        axios.post("http://10.76.10.224:3000/logar", {
            email,
            senha
        })
        .then(response => {
            // console.log(response.data);
            alert("login feito")
        })
        .catch(error => {
            // console.log(error);
            alert("nao existe")
        });
    };

    return(
        <View style={styleLogin.container}>
            <TextInput style={styleLogin.email} placeholder="email" value={email} onChangeText={setEmail}></TextInput>
            <TextInput style={styleLogin.senha} placeholder="senha" value={senha} onChangeText={setSenha}></TextInput>
            <TouchableOpacity onPress={procurar}><Text>entrar</Text></TouchableOpacity>
        </View>
    );
}