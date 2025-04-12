import React, { useState } from 'react';
import { SafeAreaView, View, Text, Alert, Image } from 'react-native';
import { styles } from './styles'; // Importando os estilos
import Campo from '../../Campo'; // Importando o componente Campo
import Botao from '../../Botao'; // Importando o componente Botao
import Balanca from './balanca.jpg'

function IMCCalculator() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  function calcularIMC() {
    // Convertendo peso e altura para números
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    // Validando se os campos estão vazios ou inválidos
    if (isNaN(pesoNum) || pesoNum <= 0) {
      Alert.alert('Erro', 'É necessário digitar um valor válido para o peso!');
      return;
    }
    if (isNaN(alturaNum) || alturaNum <= 0) {
      Alert.alert('Erro', 'É necessário digitar um valor válido para a altura (em metros)!');
      return;
    }

    // Calculando o IMC
    const imc = pesoNum / (alturaNum * alturaNum);

    // Determinando a faixa de IMC
    let mensagem = '';
    if (imc < 18.5) {
      mensagem = `Magreza (${imc.toFixed(2)})`;
    } else if (imc >= 18.5 && imc < 24.9) {
      mensagem = `Normal (${imc.toFixed(2)})`;
    } else if (imc >= 24.9 && imc < 30) {
      mensagem = `Sobrepeso (${imc.toFixed(2)})`;
    } else {
      mensagem = `Obesidade (${imc.toFixed(2)})`;
    }

    // Atualizando o estado com o resultado
    setResultado(mensagem);
  }

  // Função para limpar os campos
  function limparCampos() {
    setPeso('');
    setAltura('');
    setResultado('');
  }

  return (
    <SafeAreaView>
      <View style={styles.area}>
        <Text style={styles.titulo}>Calculadora de IMC</Text>

       <Image source={Balanca} style={styles.img} />

        {/* Campo para o peso */}
        <Campo
          placeholder="Digite seu peso (kg)"
          funcao={(text) => setPeso(text)}
          tipo="numeric"
        />

        {/* Campo para a altura */}
        <Campo
          placeholder="Digite sua altura (m)"
          funcao={(text) => setAltura(text)}
          tipo="numeric"
        />

        {/* Botão de Calcular */}
        <Botao
          titulo="Calcular IMC"
          cor="lightpink" // Verde
          funcao={calcularIMC}
        />

        {/* Botão de Limpar */}
        <Botao
          titulo="Limpar"
          cor="lightblue" // Adicionando cor ao botão Limpar
          funcao={limparCampos} // Chamando a função de limpeza
        />

        {/* Exibindo o resultado */}
        <Text style={styles.resultado}>{resultado}</Text>
      </View>
    </SafeAreaView>
  );
}

export default IMCCalculator;