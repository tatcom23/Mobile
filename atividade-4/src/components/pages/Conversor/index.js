import React, { useState } from 'react';
import { SafeAreaView, View, Text, Alert, Image } from 'react-native';
import { styles } from './styles'; // Importando os estilos
import Campo from '../../Campo'; // Importando o componente Campo (corrigido)
import Botao from '../../Botao'; // Importando o componente Botao (corrigido)
import Bomba from './red-fuel-pump-gasoline-can-600nw-2524138605.webp';

function Conversor() {
  const [precoAlcool, setPrecoAlcool] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular() {
    // Convertendo os preços para números
    const precoEtanol = parseFloat(precoAlcool);
    const precoGas = parseFloat(precoGasolina);

    // Validando se os campos estão vazios ou inválidos
    if (isNaN(precoEtanol)) {
      Alert.alert('Erro', 'É necessário digitar um valor válido para o preço do álcool!');
      return;
    }
    if (isNaN(precoGas)) {
      Alert.alert('Erro', 'É necessário digitar um valor válido para o preço da gasolina!');
      return;
    }

    // Calculando a razão entre o preço do álcool e o preço da gasolina
    const razao = precoEtanol / precoGas;

    // Determinando qual combustível é mais vantajoso
    if (razao < 0.7) {
      setResultado('Álcool é mais vantajoso!');
    } else {
      setResultado('Gasolina é mais vantajosa!');
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.area}>
        <Text style={styles.titulo}>Conversor de combustível</Text>

         <Image source={Bomba} style={styles.imagem} />

        {/* Campo para o preço do álcool */}
        <Campo
          placeholder="Digite o preço do álcool"
          funcao={(text) => setPrecoAlcool(text)}
          tipo="numeric"
        />

        {/* Campo para o preço da gasolina */}
        <Campo
          placeholder="Digite o preço da gasolina"
          funcao={(text) => setPrecoGasolina(text)}
          tipo="numeric"
        />

        {/* Botão de Calcular */}
        <Botao
          titulo="Calcular"
          cor="red" // Verde
          funcao={calcular}
        />

        {/* Botão de Limpar */}
        <Botao
          titulo="Limpar"
          cor="blue" // Adicionando cor ao botão Limpar
          funcao={() => {
            setPrecoAlcool('');
            setPrecoGasolina('');
            setResultado('');
          }}
        />

        {/* Exibindo o resultado */}
        <Text style={styles.resultado}>{resultado}</Text>
      </View>
    </SafeAreaView>
  );
}

export default Conversor;