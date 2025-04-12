import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

function Campo(props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={props.funcao}
        keyboardType={props.tipo || 'default'} // Define o tipo de teclado (padrão é 'default')
      />
    </View>
  );
}

// Estilos do campo
const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },
});

export default Campo;