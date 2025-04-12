import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#f9f9f9', // Fundo claro para melhor contraste
    borderRadius: 8, // Bordas arredondadas para um design moderno
    shadowColor: '#000', // Sombra para destacar o card
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Para Android
    marginBottom: 16, // Espaçamento entre os cards
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // Cor neutra para o título
    marginBottom: 12,
  },
  textCenter: {
    textAlign: 'center', // Centraliza o texto
  },
  textJustify: {
    textAlign: 'justify', // Justifica o texto para melhor leitura
  },
  imagem: {
    marginTop: 16,
    width: 280,
    height: 200,
    borderRadius: 8, // Bordas arredondadas para a imagem
    resizeMode: 'cover', // Garante que a imagem cubra o espaço sem distorção
    alignSelf: 'center',
  },
  legenda: {
    fontSize: 14,
    color: '#555', // Cor cinza escuro para a legenda
    fontStyle: 'italic', // Itálico para diferenciar visualmente
    marginTop: 12,
  },
});

export { styles };
