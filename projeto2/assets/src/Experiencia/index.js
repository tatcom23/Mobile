import { View, Text, Image } from 'react-native';
import {styles} from './styles'

function Experiencia(){

  return(
     <View style={styles.area}>

        <Text style={styles.textoPrincipal}> 
        Experiência 
        </Text>
        
        <Text style={styles.textoSecundario}>
          Hospital das CLínicas da Faculdade de Medicina da USP - Enfermeira da UTI de Transplante de 
          Fígado
        </Text>
        
        <Text style={styles.textoSecundario}>
          Hospital Santa Catarina - Enfermeira da UTI Neurológica
        </Text>
        
        <Text style={styles.textoSecundario}>
          Prefeitura Municipal Praia Grande - Estágio em Programação na Secretaria de Planejamento e
          Desenvolvimento
        </Text>

      </View>
  )
}

export default Experiencia;

