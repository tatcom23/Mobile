import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker as PickerRN } from '@react-native-picker/picker';
import BotaoCalcular from '../../components/BotaoCalcular';
import SliderComponent from '../../components/SliderPorcao';
import Titulo from '../../components/Titulo';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

// Lista inicial de frutas
const initial_frutas = [
  { id: 1, nome: 'Abacaxi', porcao: '200g' },
  { id: 2, nome: 'Açaí polpa pura sem açúcar', porcao: '175g' },
  { id: 3, nome: 'Acerola', porcao: '310g' },
  { id: 4, nome: 'Água de coco', porcao: '500ml' },
  { id: 5, nome: 'Ameixa', porcao: '210g' },
  { id: 6, nome: 'Ameixa seca', porcao: '40g' },
  { id: 7, nome: 'Amora', porcao: '230g' },
  { id: 8, nome: 'Atemóia', porcao: '100g' },
  { id: 9, nome: 'Banana da terra', porcao: '80g' },
  { id: 10, nome: 'Banana', porcao: '90g' },
  { id: 11, nome: 'Mirtilo', porcao: '175g' },
  { id: 12, nome: 'Caju', porcao: '230g' },
  { id: 13, nome: 'Caqui', porcao: '80g' },
  { id: 14, nome: 'Carambola', porcao: '320g' },
  { id: 15, nome: 'Cereja', porcao: '200g' },
  { id: 16, nome: 'Ciriguela', porcao: '125g' },
  { id: 17, nome: 'Cupuaçu', porcao: '200g' },
  { id: 18, nome: 'Damasco seco', porcao: '40g' },
  { id: 19, nome: 'Figo', porcao: '135g' },
  { id: 20, nome: 'Framboesa', porcao: '180g' },
  { id: 21, nome: 'Geléia 100% fruta', porcao: '55g' },
  { id: 22, nome: 'Goiaba', porcao: '150g' },
  { id: 23, nome: 'Graviola', porcao: '150g' },
  { id: 24, nome: 'Jabuticaba', porcao: '170g' },
  { id: 25, nome: 'Jaca', porcao: '105g' },
  { id: 26, nome: 'Kiwi', porcao: '160g' },
  { id: 27, nome: 'Laranja', porcao: '210g' },
  { id: 28, nome: 'Lichia', porcao: '140g' },
  { id: 29, nome: 'Maçã', porcao: '190g' },
  { id: 30, nome: 'Mamão', porcao: '230g' },
  { id: 31, nome: 'Manga', porcao: '160g' },
  { id: 32, nome: 'Maracujá', porcao: '140g' },
  { id: 33, nome: 'Melancia', porcao: '330g' },
  { id: 34, nome: 'Melão', porcao: '340g' },
  { id: 35, nome: 'Tangerina', porcao: '200g' },
  { id: 36, nome: 'Morango', porcao: '300g' },
  { id: 37, nome: 'Pera', porcao: '175g' },
  { id: 38, nome: 'Pêssego', porcao: '250g' },
  { id: 39, nome: 'Tamara seca', porcao: '35g' },
  { id: 40, nome: 'Uva', porcao: '180g' },
  { id: 41, nome: 'Uva passas', porcao: '30g' },
];

// Função para converter a porção em número
const parsePorcao = (porcao) => {
  const valorLimpo = porcao.replace(/(unidades|g|ml)/gi, '').trim();
  return parseFloat(valorLimpo) || 0;
};

const Frutas = () => {
  // Estado para a fruta selecionada
  const [frutaSelecionada, setFrutaSelecionada] = useState(0);
  const [porcaoPersonalizada, setPorcaoPersonalizada] = useState(1);
  const [resultado, setResultado] = useState(null);

  // Cálculo da porção padrão
  const porcaoPadrao = parsePorcao(initial_frutas[frutaSelecionada]?.porcao);

  // Função para calcular a quantidade
  const calcularQuantidade = () => {
    const quantidadeCalculada = (porcaoPadrao * porcaoPersonalizada).toFixed(2);
    setResultado(quantidadeCalculada);
  };

  return (
    <LinearGradient colors={['#e0f7fa', '#ffffff']} style={styles.container}>
      {/* Título */}
      <Titulo 
      titulo="Frutas" 
      subtitulo="Calculadora de Porção"/>

      {/* Label para o Picker */}
      <Text style={styles.label}>Selecione a Fruta:</Text>

      {/* Picker com os itens mapeados */}
      <PickerRN
        selectedValue={frutaSelecionada}
        onValueChange={(itemIndex) => setFrutaSelecionada(itemIndex)}
        style={styles.picker}
      >
        {initial_frutas.map((valor) => (
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

export default Frutas;