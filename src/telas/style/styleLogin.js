import { StyleSheet } from "react-native";

export const styleLogin = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2b2b2b",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
    },

    titulo: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 40,
    },

    email: {
        width: "100%",
        height: 55,
        backgroundColor: "#363636",
        borderRadius: 12,
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
        borderRadius: 12,
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
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        // marginBottom: 20,
    },

    textoBotao: {
        color: "#2b2b2b",
        fontWeight: "bold",
        fontSize: 16,
    },

    cadastro: {
        color: "#cfcfcf",
        marginTop: 5,
    }
});