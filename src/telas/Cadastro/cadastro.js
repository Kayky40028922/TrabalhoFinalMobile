import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styleCadastro } from "../style/styleCadastro";
import { useState } from "react";
import axios from "axios";

export default function Cadastro({ navigation }){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmar_senha, setConfirmar_senha] = useState('');

    const adicionar = () => {

    axios.post("http://10.105.18.224:3000/cadastrar", {
        email,
        senha,
        confirmar_senha
    })
    .then((resposta) => {

        // console.log(resposta.data);

        // alert("Adicionado com sucesso!");

        setEmail("");
        setSenha("");
        setConfirmar_senha("");

        navigation.navigate('Home');
    })
    .catch((erro) => {

        // console.log("Erro:", erro);
        // console.log("Resposta:", erro.response?.data);

        alert("Erro ao adicionar");
    });
};

    return(
        <View style={styleCadastro.container}>
            {/* <TouchableOpacity style={styleCadastro.btn} onPress={() => navigation.navigate('Login')}><Text>login</Text></TouchableOpacity> */}
            {/* <TouchableOpacity style={styleCadastro.btn2} onPress={() => navigation.navigate('Home')}><Text>home</Text></TouchableOpacity> */}
            <TextInput style={styleCadastro.email} placeholder="email" value={email} onChangeText={setEmail}></TextInput>
            <TextInput style={styleCadastro.senha} placeholder="senha" value={senha} onChangeText={setSenha}></TextInput>
            <TextInput style={styleCadastro.confSenha} placeholder="confirmar senha" value={confirmar_senha} onChangeText={setConfirmar_senha}></TextInput>
            <TouchableOpacity onPress={adicionar}><Text>enviar</Text></TouchableOpacity>
        </View>
    );
}