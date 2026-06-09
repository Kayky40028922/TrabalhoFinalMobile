import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styleCadastro } from "../style/styleCadastro";
import { useState } from "react";
import axios from "axios";

export default function Cadastro({ navigation }){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmar_senha, setConfirmar_senha] = useState('');

    const adicionar = () => {

        if (!email || !senha || !confirmar_senha){
            alert("preencha todos os campos");
            return;
        }
        if (senha !== confirmar_senha){
            alert("comfirme a senha correta");
            return;
        }

        axios.post("http://10.40.3.119:3000/cadastrar", {
            email,
            senha,
            confirmar_senha
        })
        .then((resposta) => {
            setEmail("");
            setSenha("");
            setConfirmar_senha("");

            navigation.navigate('Home');
        })
        .catch((erro) => {
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
            <TouchableOpacity onPress={adicionar} style={styleCadastro.botao}><Text style={styleCadastro.textoBotao}>enviar</Text></TouchableOpacity>
        </View>
    );
}