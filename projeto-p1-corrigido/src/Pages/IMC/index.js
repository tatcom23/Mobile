import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // usado para fundo com degradê
import styles from './styles'; // estilos definidos em outro arquivo
import { MaterialCommunityIcons } from '@expo/vector-icons'; // ícones bonitinhos
import BotaoCalcular from '../../components/BotaoCalcular'; // Importa o componente BotaoCalcular

// Componente principal da tela de IMC
export default function IMC() {
  // Estados para armazenar os valores digitados e os resultados
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  // Função que calcula o IMC
  const calcularIMC = () => {
    // Troca vírgula por ponto e converte para número
    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));

    if (!isNaN(pesoNum) && !isNaN(alturaNum)) {
      // Corrige altura caso o usuário digite em centímetros
      const alturaMetros = alturaNum > 3 ? alturaNum / 100 : alturaNum;
      const imcCalculado = pesoNum / (alturaMetros * alturaMetros);

      // Armazena o IMC com 2 casas decimais
      setIMC(imcCalculado.toFixed(2));
      definirClassificacao(imcCalculado); // chama a função de classificação
    } else {
      alert('Por favor, insira valores válidos para peso e altura.');
    }
  };

  // Define a classificação do IMC com base no valor
  const definirClassificacao = (imc) => {
    if (imc < 18.5) setClassificacao('Abaixo do Peso');
    else if (imc >= 18.5 && imc <= 24.9) setClassificacao('Peso Normal');
    else if (imc >= 25 && imc <= 29.9) setClassificacao('Sobrepeso');
    else if (imc >= 30 && imc <= 34.9) setClassificacao('Obesidade Grau I');
    else if (imc >= 35 && imc <= 39.9) setClassificacao('Obesidade Grau II');
    else setClassificacao('Obesidade Grau III ou Mórbida');
  };

  return (
    <LinearGradient
      colors={['#e0f7fa', '#ffffff']} // fundo em degradê (do azul claro pro branco)
      style={styles.container}
    >
      {/* Título da tela */}
      <Text style={styles.titulo}>Cálculo do IMC</Text>

      {/* Imagem ilustrativa */}
      <Image source={require('../../../assets/obesidade.png')} style={styles.imagem} />

      {/* Campo para o peso */}
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="scale-balance" size={24} color="#999" style={styles.icon} />
        <TextInput
          placeholder="Peso (kg)"
          keyboardType="numeric"
          value={peso}
          onChangeText={(text) => setPeso(text)}
          style={styles.input}
          placeholderTextColor="#999"
        />
      </View>

      {/* Campo para a altura */}
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="ruler" size={24} color="#999" style={styles.icon} />
        <TextInput
          placeholder="Altura (m ou cm)"
          keyboardType="numeric"
          value={altura}
          onChangeText={(text) => setAltura(text)}
          style={styles.input}
          placeholderTextColor="#999"
        />
      </View>

      {/* Botão para calcular */}
      <BotaoCalcular titulo="Calcular" onPress={calcularIMC} />

      {/* Exibe o resultado se já tiver IMC calculado */}
      {imc && (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoTitulo}>Seu IMC:</Text>
          <Text style={styles.resultadoValor}>{imc}</Text>
          <Text style={styles.classificacao}>Classificação: {classificacao}</Text>
        </View>
      )}
    </LinearGradient>
  );
}