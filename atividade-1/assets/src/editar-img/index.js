import { View, Text, Image } from 'react-native';
import {styles} from './styles'

import fotoPerfil from './foto_perfil.jpg'; // Mude aqui o nome da sua imagem

function FotoPerfil(){

  return(
     <View style={styles.area}>
        <Text style={[styles.textoPrincipal, styles.alinhaTexto]}
        >Meu Perfil Profissional</Text>
      
         <Image source={fotoPerfil} style={styles.img} />

      </View>
  )
}

export default FotoPerfil;
