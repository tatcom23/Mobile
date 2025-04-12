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
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // Cor neutra para o título
    marginBottom: 8,
  },
  textCenter: {
    textAlign: 'center', // Centraliza o texto
  },
  textJustify: {
    textAlign: 'justify', // Justifica o texto para melhor leitura
  },
  salario: {
    fontSize: 18,
    color: '#2ecc71', // Verde para destacar o salário positivamente
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 8,
  },
  descricao: {
    fontSize: 14,
    color: '#555', // Cor cinza escuro para descrição
    marginTop: 8,
    marginBottom: 8,
  },
  contato: {
    fontSize: 14,
    color: '#3498db', // Azul para destacar o contato
    fontStyle: 'italic', // Itálico para diferenciar visualmente
    marginTop: 8,
  },
});

export { styles };
