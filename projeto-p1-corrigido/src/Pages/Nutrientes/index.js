import React from 'react';
import { ScrollView, View, Dimensions } from 'react-native';

// 👉 Importa os componentes das "páginas" dos nutrientes
import Carboidratos from '../Carboidratos';
import Proteinas from '../Proteinas';
import Gorduras from '../Gorduras';
import Frutas from '../Frutas';
import styles from './styles';

// 👉 Pega a largura da tela do dispositivo (pra fazer o slide funcionar certinho)
const screenWidth = Dimensions.get('window').width;

export default function Nutrientes() {
  return (
    // 👉 ScrollView na horizontal, com "snap" de página (cada componente ocupa uma página inteira)
    <ScrollView
      horizontal // 👉 permite rolar pro lado
      pagingEnabled // 👉 faz o scroll parar de página em página
      showsHorizontalScrollIndicator={false} // 👉 tira a barrinha de scroll da parte de baixo
    >
      {/* 👉 Cada View representa uma página que mostra um nutriente diferente */}
      <View style={styles.page}><Carboidratos /></View>
      <View style={styles.page}><Proteinas /></View>
      <View style={styles.page}><Gorduras /></View>
      <View style={styles.page}><Frutas /></View>
    </ScrollView>
  );
}