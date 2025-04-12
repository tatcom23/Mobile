import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, Image, StyleSheet, Alert } from 'react-native';
import Dado from './dado.webp';


export default function JogoNumeroAleatorio() {
  // Estado para armazenar o número aleatório
  const [numeroAleatorio, setNumeroAleatorio] = useState('');

  // Função para gerar um número aleatório de 0 a 10
  function gerarNumero() {
    const numero = Math.floor(Math.random() * 11); // Gera um número entre 0 e 10
    setNumeroAleatorio(numero);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Título */}
      <Text style={styles.titulo}>Jogo do Número Aleatório</Text>

      <Image source={Dado} style={styles.imagem} />

      {/* Instrução */}
      <Text style={styles.instrucao}>Pense em um número de 0 a 10</Text>

      {/* Resultado */}
      <Text style={styles.resultado}>{numeroAleatorio !== '' ? `Número Gerado: ${numeroAleatorio}` : ''}</Text>

      {/* Botão para gerar o número */}
      <Button
        title="Gerar Número"
        color="#4CAF50" // Verde
        onPress={gerarNumero}
      />
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  instrucao: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#39FF14',
    marginBottom: 24,
    color: 'black',
  },
});