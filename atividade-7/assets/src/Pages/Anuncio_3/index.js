import { View } from 'react-native';
import { styles } from './styles';

// Importar o componente correto
import FotoAnuncio from '../../FotoAnuncio';

// Importar a imagem corretamente
import Praia from './apt3.jpg';

function Anuncio_3() {
  return (
    <View style={styles.container}>
      <FotoAnuncio
        titulo="Venda Apartamento no Gonzaga"
        foto={Praia} // Usar chaves para passar a variável
        legenda="Viva no coração do Gonzaga, a uma quadra da praia! Lindo apartamento com 3 dormitórios (sende 2 suítes), acabamento moderno e sol da manhã. Condomínio completo com piscina, academia e salão de festas. Localizado próximo aos melhores shoppings, cafés e restaurantes de Santos. Ideal para quem quer praticidade e sofisticação. Valor: R$ 980.000 Ligue já e venha conhecer seu novo lar na praia!"
      />
    </View>
  );
}

export default Anuncio_3;

