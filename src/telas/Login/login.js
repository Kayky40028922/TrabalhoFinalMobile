import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styleLogin } from "../style/styleLogin";
import { useState } from "react";
import axios from "axios";

export default function Login({ navigation }){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const procurar = ()=>{
        axios.post("http://10.105.18.224:3000/logar", {
            email,
            senha
        })
        .then(response => {
            // console.log(response.data);
            // alert("login feito")
            navigation.navigate('Home');
        })
        .catch(error => {
            // console.log(error);
            alert("nao existe");
        });
    };

    return(
        <View style={styleLogin.container}>
            <TextInput style={styleLogin.email} placeholder="email" value={email} onChangeText={setEmail}></TextInput>
            <TextInput style={styleLogin.senha} placeholder="senha" value={senha} onChangeText={setSenha}></TextInput>
            <TouchableOpacity onPress={procurar}><Text>entrar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>nao possui conta?</TouchableOpacity>
        </View>
    );
}