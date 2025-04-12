import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker as PickerRN } from '@react-native-picker/picker';
import BotaoCalcular from '../../components/BotaoCalcular';
import SliderComponent from '../../components/SliderPorcao';
import Titulo from '../../components/Titulo';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

// Dados iniciais dos carboidratos
const initial_carboidratos = [
  { id: 1, nome: 'Achocolatado em pó', porcao: '30g' },
  { id: 2, nome: 'Achocolatado em pó light', porcao: '35g' },
  { id: 3, nome: 'Abóbora crua', porcao: '320g' },
  { id: 4, nome: 'Abóbora cozida', porcao: '260g' },
  { id: 5, nome: 'Arroz integral ou branco cozido', porcao: '100g' },
  { id: 6, nome: 'Arroz integral ou branco cru', porcao: '35g' },
  { id: 7, nome: 'Aveia em flocos', porcao: '35g' },
  { id: 8, nome: 'Aveia em farelo ou farinha', porcao: '50g' },
  { id: 9, nome: 'Batata baroa', porcao: '150g' },
  { id: 10, nome: 'Batata doce crua', porcao: '105g' },
  { id: 11, nome: 'Batata doce cozida', porcao: '160g' },
  { id: 12, nome: 'Batata inglesa cozida ou crua', porcao: '145g' },
  { id: 13, nome: 'Biscoito de arroz', porcao: '30g' },
  { id: 14, nome: 'Biscoito de maizena', porcao: '25g' },
  { id: 15, nome: 'Biscoito de polvilho', porcao: '30g' },
  { id: 16, nome: 'Bolo ou broa', porcao: '50g' },
  { id: 17, nome: 'Caldo de cana', porcao: '160g' },
  { id: 18, nome: 'Chocolate ao leite', porcao: '20g' },
  { id: 19, nome: 'Chocolate branco', porcao: '20g' },
  { id: 20, nome: 'Cuzcuz cru', porcao: '35g' },
  { id: 21, nome: 'Doce de leite', porcao: '35g' },
  { id: 22, nome: 'Ervilha cozida', porcao: '150g' },
  { id: 23, nome: 'Feijão cozido', porcao: '160g' },
  { id: 24, nome: 'Nutella', porcao: '20g' },
  { id: 25, nome: 'Pão', porcao: '50g' },
  { id: 26, nome: 'Pipoca pronta', porcao: '90g' },
  { id: 27, nome: 'Tapioca', porcao: '45g' },
  { id: 28, nome: 'Suco integral sem açúcar', porcao: '260g' },
];

// Função para converter a porção em número
const parsePorcao = (porcao) => parseFloat(porcao.replace('g', '')) || 0;

const Carboidratos = () => {
  const [carboidratoSelecionado, setCarboidratoSelecionado] = useState(0);
  const [porcaoPersonalizada, setPorcaoPersonalizada] = useState(1);
  const [resultado, setResultado] = useState(null);

  const porcaoPadrao = parsePorcao(initial_carboidratos[carboidratoSelecionado]?.porcao);

  const calcularQuantidade = () => {
    const quantidadeCalculada = (porcaoPadrao * porcaoPersonalizada).toFixed(2);
    setResultado(quantidadeCalculada);
  };

  return (
    <LinearGradient colors={['#e0f7fa', '#ffffff']} style={styles.container}>
      {/* Título */}
      <Titulo 
      titulo="Carboidratos" 
      subtitulo="Calculadora de Porção"/>

      {/* Label para o Picker */}
      <Text style={styles.label}>Selecione o Carboidrato:</Text>

      {/* Picker com os itens mapeados */}
      <PickerRN
        selectedValue={carboidratoSelecionado}
        onValueChange={(itemIndex) => setCarboidratoSelecionado(itemIndex)}
        style={styles.picker}
      >
        {initial_carboidratos.map((valor) => (
          <PickerRN.Item key={valor.id} value={valor.id - 1} label={`${valor.nome}`} />
        ))}
      </PickerRN>

      {/* Slider */}
      <View style={{ marginTop: 100 }}>
        <SliderComponent
          value={porcaoPersonalizada}
          onValueChange={(value) => setPorcaoPersonalizada(value)}
        />
        <BotaoCalcular onPress={calcularQuantidade} />
      </View>

      {/* Resultado */}
      {resultado && (
        <Text style={styles.resultado}>Quantidade: {resultado} g</Text>
      )}
    </LinearGradient>
  );
};

export default Carboidratos;