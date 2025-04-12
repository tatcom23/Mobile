// Botao.js
import React from 'react';
import { View, Button } from 'react-native';
import { styles } from './styles'; // Importando os estilos

function Botao(props) {
  return (
    <View style={styles.contorno}>
      <Button
        title={props.titulo} // Título do botão
        color={props.cor}    // Cor do botão
        onPress={props.funcao} // Função a ser executada ao pressionar
      />
    </View>
  );
}

export default Botao;