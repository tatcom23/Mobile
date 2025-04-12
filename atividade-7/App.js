import { View, Text, Image, ScrollView } from 'react-native';

import Anuncio_1 from './assets/src/Pages/Anuncio_1'
import Anuncio_2 from './assets/src/Pages/Anuncio_2'
import Anuncio_3 from './assets/src/Pages/Anuncio_3'



function App() {
  return (
    <View>
    <ScrollView horizontal={true}>
      <View><Anuncio_1 /></View>
      <View><Anuncio_2 /></View>
      <View><Anuncio_3 /></View>
   </ScrollView>
    </View>
  )

}


export default App;
