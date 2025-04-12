import { View, Text, Image } from 'react-native'
import {styles} from './styles'
import {useState} from 'react'
import Botao from '../../components/botao'
import Cronometro from './cronometro.png';


function Contador(){
  const [cont, setCont] = useState(0)

  function incrementar(){
    setCont(cont + 1)
  }

  function decrementar(){
    if (cont > 0)
      setCont(cont - 1)
  }

  function zerar(){
    setCont(0)
  }

  return(
    <View>
      <Text style={styles.titulo}>Contador de Pessoas</Text>

      <Image source={Cronometro} style={styles.img} />


      <Text style={styles.contador}>{cont}</Text>

      <Botao titulo='Acrescentar' cor='blue' funcao={incrementar}/>

      <Botao titulo='Diminuir' cor='hotpink' funcao={decrementar}/>

    </View>
  )
}

export default Contador