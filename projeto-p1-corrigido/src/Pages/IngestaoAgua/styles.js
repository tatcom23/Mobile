// estilos.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00695c',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 80,
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
    height: 50,
    marginVertical: 15,
    justifyContent: 'center',
  },
  inputIcon: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
  },
  inputWithIcon: {
    height: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingLeft: 40,
    paddingRight: 10,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
  },
  botao: {
    backgroundColor: '#00695c',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  imagem: {
  width: '100%',
  height: 360,
  marginVertical: 20,
  borderRadius: 10,
  alignItems: 'center',
},
});