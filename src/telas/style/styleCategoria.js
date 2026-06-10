import { StyleSheet } from "react-native";

export const styleCategorias = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 20,
  },

  card: {
    marginBottom: 20,
    alignItems: "center",
  },

  titulo: {
    color: "#fff",
    marginBottom: 5,
  },

  imagem: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
});
