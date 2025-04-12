import { View, TextInput } from 'react-native'

import {styles} from './styles'

function Campo(props){
  return(
    <View>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={props.funcao}
        keyboardType={props.tipo}
      />
    </View>
  )
}

export default Campo