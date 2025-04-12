import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function Botao({ onPress }) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.textoBotao}>Confirmar</Text>
    </TouchableOpacity>
  );
}

// Estilos do botão
const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#8A1538', // Verde
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Botao;