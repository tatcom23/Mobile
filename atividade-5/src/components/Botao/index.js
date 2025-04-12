import { View, Button } from 'react-native'

function Botao(props){
  return(
    <View>
      <Button
        title = {props.titulo}
        color = {props.cor}
        onPress = {props.funcao}
      />
    </View>
  )
}

export default Botao