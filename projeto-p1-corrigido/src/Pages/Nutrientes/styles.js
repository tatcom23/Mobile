import { StyleSheet, Dimensions } from 'react-native';

// 👉 Pega a largura da tela do dispositivo
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  page: {
    width: screenWidth, // 👉 garante que cada página ocupe a tela inteira
    padding: 10,
  },
});

export default styles;