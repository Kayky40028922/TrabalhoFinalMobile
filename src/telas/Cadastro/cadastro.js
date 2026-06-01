import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styleCadastro } from "../style/styleCadastro";
import { useState } from "react";

export default function Cadastro({ navigation }){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmar_senha, setConfirmar_senha] = useState('');

    const enviarDados = async () => {
        if (!email || !senha || !confirmar_senha) {
        Alert.alert("Aviso", "Preencha todos os campos");
        return;
        }

        try {
         // SUBSTITUA PELO SEU IP REAL (Não use localhost)
            const resposta = await fetch('http://172.24.194.224', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, senha, confirmar_senha })
            });

            const dados = await resposta.json();

            if (dados.sucesso) {
            Alert.alert("Sucesso", "Aluno salvo no banco de dados!");
            setEmail('');
            setSenha('');
            setConfirmar_senha('');
            }
        } catch (error) {
            Alert.alert("Erro", "Não foi possível enviar os dados.");
        }
    };

    return(
        <View style={styleCadastro.container}>
            {/* <TouchableOpacity style={styleCadastro.btn} onPress={() => navigation.navigate('Login')}><Text>login</Text></TouchableOpacity> */}
            {/* <TouchableOpacity style={styleCadastro.btn2} onPress={() => navigation.navigate('Home')}><Text>home</Text></TouchableOpacity> */}
            <TextInput style={styleCadastro.email} placeholder="email" value={email} onChangeText={setEmail}></TextInput>
            <TextInput style={styleCadastro.senha} placeholder="senha" value={senha} onChangeText={setSenha}></TextInput>
            <TextInput style={styleCadastro.confSenha} placeholder="confirmar senha" value={confirmar_senha} onChangeText={setConfirmar_senha}></TextInput>
            <TouchableOpacity onPress={enviarDados()}><Text>enviar</Text></TouchableOpacity>
        </View>
    );
}