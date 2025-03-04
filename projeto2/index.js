import { View, Text, Image } from 'react-native';
import {styles} from './styles'

function DadosPessoais(){

  return(
     <View style={styles.area}>

        <Text style={styles.textoPrincipal}> 
        Dados Pessoais 
        </Text>

        <Text style={styles.textoSecundario}>
          Nome: Tatiana Nunes
        </Text>
        
      </View>
  )
}

export default DadosPessoais;