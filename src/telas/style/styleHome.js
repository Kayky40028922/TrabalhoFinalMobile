import { StyleSheet } from "react-native";

export const styleHome = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2b2b2b",
        paddingTop: 15,
    },

    card: {
        backgroundColor: "#363636",
        marginHorizontal: 12,
        marginVertical: 8,
        borderRadius: 16,
        padding: 12,
        borderWidth: 1,
        borderColor: "#444",
        overflow: "hidden",
        elevation: 5,
    },

    imagem: {
        width: "100%",
        height: 220,
        borderRadius: 12,
        marginBottom: 12,
    },

    titulo: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 8,
    },

    texto: {
        color: "#D0D0D0",
        fontSize: 14,
        lineHeight: 20,
    }
});