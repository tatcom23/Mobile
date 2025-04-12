import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const SliderComponent = ({ value, onValueChange, label, minimumValue, maximumValue, step }) => {
  return (
    <View style={styles.container}>
      {/* Label para o Slider */}
      <Text style={styles.label}>{label}</Text>

      {/* Slider */}
      <Slider
        style={styles.slider}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        step={step}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor="#8A1538" // Cor da parte selecionada
        maximumTrackTintColor="#CCCCCC" // Cor da parte não selecionada
        thumbTintColor="#3A3A3C" // Cor do controle deslizante
      />

      {/* Valor Atual */}
      <Text style={styles.valorAtual}>R$ {value.toFixed(2)}</Text>
    </View>
  );
};

// Estilos do Slider
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 8,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  valorAtual: {
    fontSize: 16,
    color: '#8A1538',
    marginTop: 8,
  },
});

export default SliderComponent;