import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styleLogin } from "../style/styleLogin";
import { useState } from "react";
import axios from "axios";

export default function Login({ navigation }){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const procurar = ()=>{
        axios.post("http://10.40.3.119:3000/logar", {
            email,
            senha
        })
        .then(response => {
            navigation.navigate('Home');
        })
        .catch(error => {
            alert("nao existe");
        });
    };

    return(
        <View style={styleLogin.container}>
            <TextInput style={styleLogin.email} placeholder="email" value={email} onChangeText={setEmail}></TextInput>
            <TextInput style={styleLogin.senha} placeholder="senha" value={senha} onChangeText={setSenha}></TextInput>
            <TouchableOpacity onPress={procurar} style={styleLogin.botao}><Text>entrar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}><Text style={styleLogin.cadastro}>nao possui conta?</Text></TouchableOpacity>
        </View>
    );
}