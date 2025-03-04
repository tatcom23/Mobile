import { View, Text, Image } from 'react-native';
import {styles} from './styles'

function Formacao(){

  return(
     <View style={styles.area}>

        <Text style={styles.textoPrincipal}> 
        Formação 
        </Text>
        
        <Text style={styles.textoSecundario}>
          Enfermagem - 2003
        </Text>
        
        <Text style={styles.textoSecundario}>
          Gastronomia - 2014
        </Text>
        
        <Text style={styles.textoSecundario}>
          ADS - 2025
        </Text>

      </View>
  )
}

export default Formacao;

