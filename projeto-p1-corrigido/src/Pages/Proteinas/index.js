import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker as PickerRN } from '@react-native-picker/picker';
import BotaoCalcular from '../../components/BotaoCalcular';
import SliderComponent from '../../components/SliderPorcao';
import Titulo from '../../components/Titulo';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

// Lista inicial de proteínas
const initial_proteinas = [
  { id: 1, nome: 'Acém', porcao: '70g' },
  { id: 2, nome: 'Atum cozido', porcao: '110g' },
  { id: 3, nome: 'Atum cru', porcao: '100g' },
  { id: 4, nome: 'Camarão e outros frutos do mar', porcao: '160g' },
  { id: 5, nome: 'Clara de ovo', porcao: '9 unidades' },
  { id: 6, nome: 'Creme de ricota light', porcao: '100g' },
  { id: 7, nome: 'Coalhada desnatada', porcao: '250g' },
  { id: 8, nome: 'Coxão duro', porcao: '70g' },
  { id: 9, nome: 'Coração de galinha', porcao: '90g' },
  { id: 10, nome: 'Cupim', porcao: '70g' },
  { id: 11, nome: 'Fraldinha', porcao: '60g' },
  { id: 12, nome: 'Frango coxa e sobrecoxa desossada', porcao: '60g' },
  { id: 13, nome: 'Frango peito', porcao: '100g' },
  { id: 14, nome: 'Fígado', porcao: '75g' },
  { id: 15, nome: 'Filé mignon', porcao: '70g' },
  { id: 16, nome: 'Iogurte desnatado de 2 ingredientes', porcao: '250g' },
  { id: 17, nome: 'Kefir desnatado', porcao: '430g' },
  { id: 18, nome: 'Músculo bovino', porcao: '80g' },
  { id: 19, nome: 'Patinho', porcao: '70g' },
  { id: 20, nome: 'Peixe branco', porcao: '140g' },
  { id: 21, nome: 'Peru', porcao: '100g' },
  { id: 22, nome: 'Picanha', porcao: '70g' },
  { id: 23, nome: 'Whey e similares', porcao: '40g' },
  { id: 24, nome: 'Queijo cottage', porcao: '150g' },
  { id: 25, nome: 'Salmão', porcao: '60g' },
  { id: 26, nome: 'Suíno lombo', porcao: '70g' },
  { id: 27, nome: 'Suíno filé mignon', porcao: '100g' },
  { id: 28, nome: 'Tofu', porcao: '200g' },
];

// Função para converter a porção em número
const parsePorcao = (porcao) => {
  const valorLimpo = porcao.replace(/(unidades|g)/gi, '').trim();
  return parseFloat(valorLimpo) || 0;
};

const Proteinas = () => {
  // Estado para a proteína selecionada
  const [proteinaSelecionada, setProteinaSelecionada] = useState(0);
  const [porcaoPersonalizada, setPorcaoPersonalizada] = useState(1);
  const [resultado, setResultado] = useState(null);

  // Cálculo da porção padrão
  const porcaoPadrao = parsePorcao(initial_proteinas[proteinaSelecionada]?.porcao);

  // Função para calcular a quantidade
  const calcularQuantidade = () => {
    const quantidadeCalculada = (porcaoPadrao * porcaoPersonalizada).toFixed(2);
    setResultado(quantidadeCalculada);
  };

  return (
    <LinearGradient colors={['#e0f7fa', '#ffffff']} style={styles.container}>
      {/* Título */}
      <Titulo titulo="Proteínas"
      subtitulo="Calculadora de Porção"/>

      {/* Label para o Picker */}
      <Text style={styles.label}>Selecione a Proteína:</Text>

      {/* Picker com os itens mapeados */}
      <PickerRN
        selectedValue={proteinaSelecionada}
        onValueChange={(itemIndex) => setProteinaSelecionada(itemIndex)}
        style={styles.picker}
      >
        {initial_proteinas.map((valor) => (
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

export default Proteinas;