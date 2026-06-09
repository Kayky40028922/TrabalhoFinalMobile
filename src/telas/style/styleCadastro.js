import { StyleSheet } from "react-native";

export const styleCadastro = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2b2b2b",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
    },

    email: {
        width: "100%",
        height: 55,
        backgroundColor: "#363636",
        borderRadius: 15,
        paddingHorizontal: 15,
        color: "#fff",
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#444",
    },

    senha: {
        width: "100%",
        height: 55,
        backgroundColor: "#363636",
        borderRadius: 15,
        paddingHorizontal: 15,
        color: "#fff",
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#444",
    },

    confSenha: {
        width: "100%",
        height: 55,
        backgroundColor: "#363636",
        borderRadius: 15,
        paddingHorizontal: 15,
        color: "#fff",
        marginBottom: 25,
        borderWidth: 1,
        borderColor: "#444",
    },

    botao: {
        width: "100%",
        height: 55,
        backgroundColor: "#fff",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },

    textoBotao: {
        color: "#2b2b2b",
        fontSize: 16,
        fontWeight: "bold",
    }
})