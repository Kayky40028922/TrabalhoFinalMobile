import { StyleSheet } from "react-native";

export const styleNavegacao = StyleSheet.create({
    container: {
    height: '10vh',
    width: '100vw',
    backgroundColor: '#1b1a1a',
    position: 'fixed',
    bottom: 0,
  },
  btns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '20px'
  }
})