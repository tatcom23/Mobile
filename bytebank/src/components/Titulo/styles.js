// styles.js
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingVertical: 20, 
    backgroundColor: '#F5F5F5', 
    marginBottom: 20, 
  },
  titulo: {
    fontSize: 28, 
    fontWeight: 'bold', // Negrito para destacar
    color: '#8A1538', // Verde para remeter à saúde e nutrição
    marginBottom: 8, // Espaçamento entre o título e o subtítulo
  },
  subtitulo: {
    fontSize: 16, // Tamanho menor para o subtítulo
    color: '#1C1C1E', // Cor escura, mas não muito intensa
    fontWeight: '500', // Peso médio para equilibrar
  },
  textCenter: {
    textAlign: 'center', // Centraliza o texto
  },
});