import React, { useState } from 'react'
import { View, Text, TextInput, Button, SafeAreaView, Image } from 'react-native'
import {styles} from './styles'

import Campo from '../../components/Campo'
import Botao from '../../components/Botao'
import Calculadora from './calculadora.png'

function Multiplicador(){
  const [resultado, setResultado] = useState()
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')

  function calcular(){
    if (input1 === ''){
      alert('É necessário digitar um valor para o 1° número!')
      return
    }
    else if (input2 === ''){
      alert('É necessário digitar um valor para o 2° número!')
      return
    }
    else
      setResultado(input1 * input2)
  }

  return(
    <SafeAreaView>
      <View style={styles.area}>
        <Text style={styles.titulo}>Multiplicador (x) de Números</Text>

        <Image source={Calculadora} style={styles.img} />

        <Campo
          placeholder = 'Digite o 1° número'
          funcao = {setInput1}
          tipo = 'numeric'
        />

        <Campo
          placeholder = 'Digite o 2° número'
          funcao = {setInput2}
          tipo = 'numeric'
        />

        <Botao 
          titulo = 'Calcular'
          cor = 'hotpink'
          funcao = {calcular}
        />

        <Botao
          titulo = 'Limpar'
          cor = 'lightgreen'
          funcao = {() => setResultado('')}
        />

        <Text style={styles.resultado}>{resultado}</Text>

        </View>
    </SafeAreaView>
  )
}

export default Multiplicador