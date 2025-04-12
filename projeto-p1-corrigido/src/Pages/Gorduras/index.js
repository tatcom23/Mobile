import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker as PickerRN } from '@react-native-picker/picker';
import BotaoCalcular from '../../components/BotaoCalcular';
import SliderComponent from '../../components/SliderPorcao';
import Titulo from '../../components/Titulo';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

// Lista inicial de gorduras
const initial_gorduras = [
  { id: 1, nome: 'Abacate', porcao: '60g' },
  { id: 2, nome: 'Amêndoas', porcao: '15g' },
  { id: 3, nome: 'Amendoim', porcao: '15g' },
  { id: 4, nome: 'Avelã', porcao: '13g' },
  { id: 5, nome: 'Azeite', porcao: '10g' },
  { id: 6, nome: 'Cafés termogênicos', porcao: '20g' },
  { id: 7, nome: 'Castanhas', porcao: '15g' },
  { id: 8, nome: 'Chocolate 60% ou mais', porcao: '15g' },
  { id: 9, nome: 'Coalhada', porcao: '90g' },
  { id: 10, nome: 'Coco', porcao: '25g' },
  { id: 11, nome: 'Creme de leite', porcao: '30g' },
  { id: 12, nome: 'Creme de ricota', porcao: '45g' },
  { id: 13, nome: 'Cream cheese', porcao: '30g' },
  { id: 14, nome: 'Cream cheese light', porcao: '40g' },
  { id: 15, nome: 'Gema do ovo', porcao: '1 unidade' },
  { id: 16, nome: 'Iogurte natural integral', porcao: '140g' },
  { id: 17, nome: 'Leite integral', porcao: '130ml' },
  { id: 18, nome: 'Leite desnatado', porcao: '260ml' },
  { id: 19, nome: 'Leite em pó', porcao: '15g' },
  { id: 20, nome: 'Leite em pó desnatado', porcao: '25g' },
  { id: 21, nome: 'Leite de coco em pó', porcao: '15g' },
  { id: 22, nome: 'Manteiga', porcao: '10g' },
  { id: 23, nome: 'Óleo de coco', porcao: '10g' },
  { id: 24, nome: 'Queijo gorgonzola', porcao: '25g' },
  { id: 25, nome: 'Queijo meia cura', porcao: '25g' },
  { id: 26, nome: 'Queijo minas frescal', porcao: '35g' },
  { id: 27, nome: 'Queijo minas padrão', porcao: '30g' },
  { id: 28, nome: 'Queijo mussarela', porcao: '30g' },
  { id: 29, nome: 'Queijo parmesão', porcao: '20g' },
  { id: 30, nome: 'Requeijão', porcao: '35g' },
  { id: 31, nome: 'Requeijão light', porcao: '50g' },
  { id: 32, nome: 'Sementes', porcao: '15g' },
  { id: 33, nome: 'Tahine', porcao: '10g' },
];

// Função para converter a porção em número
const parsePorcao = (porcao) => {
  const valorLimpo = porcao.replace(/(unidades|g|ml)/gi, '').trim();
  return parseFloat(valorLimpo) || 0;
};

const Gorduras = () => {
  // Estado para a gordura selecionada
  const [gorduraSelecionada, setGorduraSelecionada] = useState(0);
  const [porcaoPersonalizada, setPorcaoPersonalizada] = useState(1);
  const [resultado, setResultado] = useState(null);

  // Cálculo da porção padrão
  const porcaoPadrao = parsePorcao(initial_gorduras[gorduraSelecionada]?.porcao);

  // Função para calcular a quantidade
  const calcularQuantidade = () => {
    const quantidadeCalculada = (porcaoPadrao * porcaoPersonalizada).toFixed(2);
    setResultado(quantidadeCalculada);
  };

  return (
    <LinearGradient colors={['#e0f7fa', '#ffffff']} style={styles.container}>
      {/* Título */}
      <Titulo titulo="Gorduras" 
      subtitulo="Calculadora de Porção"/>

      {/* Label para o Picker */}
      <Text style={styles.label}>Selecione a Gordura:</Text>

      {/* Picker com os itens mapeados */}
      <PickerRN
        selectedValue={gorduraSelecionada}
        onValueChange={(itemIndex) => setGorduraSelecionada(itemIndex)}
        style={styles.picker}
      >
        {initial_gorduras.map((valor) => (
          <PickerRN.Item key={valor.id} value={valor.id - 1} label={`${valor.nome}`} />
        ))}
      </PickerRN>

      {/* Slider para ajustar a porção */}
      <View style={{ marginTop: 100 }}>
        <SliderComponent
          value={porcaoPersonalizada}
          onValueChange={(value) => setPorcaoPersonalizada(value)}
        />
        <BotaoCalcular onPress={calcularQuantidade} />
      </View>

      {/* Exibição do resultado */}
      {resultado && (
        <Text style={styles.resultado}>Quantidade: {resultado} g</Text>
      )}
    </LinearGradient>
  );
};

export default Gorduras;