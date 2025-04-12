// src/pages/styles/imcStyles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 32, // Aumentei o tamanho
    fontWeight: 'bold',
    color: '#00695c',
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.3)', // Sombra no texto
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  imagem: {
    width: '90%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000', // Sombra na imagem
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  
 inputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  width: '80%',
  height: 50,
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 10,
  paddingHorizontal: 10,
  marginBottom: 15,
  backgroundColor: '#fff',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 3,
},
icon: {
  marginRight: 10,
},
  button: {
    backgroundColor: '#00695c', // Cor de fundo verde para o botão
    paddingVertical: 15, // Espaço vertical dentro do botão
    paddingHorizontal: 30, // Espaço horizontal dentro do botão
    borderRadius: 20, // Bordas arredondadas no botão
    elevation: 5, // Elevação para a sombra no Android
    shadowOpacity: 0.2, // Opacidade da sombra (translúcida)
    shadowRadius: 8, // Difusão da sombra
    shadowColor: '#000', // Cor da sombra (preta)
    shadowOffset: { width: 0, height: 4 }, // Deslocamento da sombra para baixo
  },
  buttonText: {
    color: '#FFF', // Cor do texto (branco)
    fontSize: 18, // Tamanho da fonte
    fontWeight: 'bold', // Estilo de fonte em negrito
    textShadowColor: '#000', // Cor da sombra do texto (preto)
  },
  resultadoContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  resultadoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  resultadoValor: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00695c',
    marginBottom: 10,
    textAlign: 'center',
  },
  classificacao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default styles;