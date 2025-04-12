import { View, Text } from 'react-native';
import { styles } from './styles';

function Vagas(props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.titulo, styles.textCenter]}>
        {props.titulo}
      </Text>

      <Text style={[styles.salario, styles.textCenter]}>
        Salário: R$ {props.salario}
      </Text>

      <Text style={[styles.descricao, styles.textJustify]}>
        Descrição: {props.descricao}
      </Text>

      <Text style={[styles.contato, styles.textJustify]}>
        Contato: {props.contato}
      </Text>
    </View>
  );
}

export default Vagas;
