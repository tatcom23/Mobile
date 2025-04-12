import { View, Text, Image } from 'react-native';
import { styles } from './styles';

function FotoAnuncio(props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.titulo, styles.textCenter]}>
        {props.titulo}
      </Text>

      <Image source={props.foto} style={styles.imagem} />

      <Text style={[styles.legenda, styles.textJustify]}>
        {props.legenda}
      </Text>
    </View>
  );
}

export default FotoAnuncio;
