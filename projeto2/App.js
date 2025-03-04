import { View, Text, Image } from 'react-native';


import FotoPerfil from './assets/src/editar-img/index'
import DadosPessoais from './assets/src/Dados_Pessoais/index'
import Experiencia from './assets/src/Experiencia/index'
import Formacao from './assets/src/Formacao/index'



function App() {
  return (
    <View>
      <FotoPerfil/>
      <DadosPessoais/>
      <Experiencia/>
      <Formacao/>
    </View>
  )

}


export default App;
