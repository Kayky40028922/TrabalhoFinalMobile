import { StyleSheet } from "react-native";

export const stylePerfil = StyleSheet.create({
  container: {
    flex: 1,
  },

  tela: {
    flex: 1,
    backgroundColor: "#111",
    padding: 10,
  },
  usuario: {
    backgroundColor: "#1d1d1d",
    borderRadius: 12,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  foto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ccc",
  },

  info: {
    flex: 1,
    marginLeft: 10,
  },

  nome: {
    color: "#fff",
    fontSize: 14,
  },

  email: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 3,
  },

  opcao: {
    backgroundColor: "#1d1d1d",
    borderRadius: 12,
    padding: 15,
    marginTop: 10,
  },

  tituloOpcao: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },

  subtituloOpcao: {
    color: "#888",
    fontSize: 11,
    marginTop: 2,
  },

  cardManga: {
    backgroundColor: "#1d1d1d",
    borderRadius: 12,
    padding: 10,
    flexDirection: "row",
    marginTop: 20,
  },

  capa: {
    width: 90,
    height: 140,
    borderRadius: 8,
  },

  textoManga: {
    flex: 1,
    marginLeft: 10,
  },

  top10: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 10,
  },

  descricao: {
    color: "#bbb",
    fontSize: 11,
  },
  espaco: {
    height: '10%',
    width: '100%',
  }
});