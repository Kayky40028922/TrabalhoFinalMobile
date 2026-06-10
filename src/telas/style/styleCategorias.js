import { StyleSheet } from "react-native";

export const styleCategorias = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    paddingTop: 20,
    paddingHorizontal: 16,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%", // ~2 colunas
    marginBottom: 18,
  },

  titulo: {
    color: "white",
    textAlign: "center",
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "700",
  },

  imagem: {
    width: "100%",
    height: 160,
    borderRadius: 12,
  },
});
