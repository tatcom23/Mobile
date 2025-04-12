import { View } from 'react-native';
import { styles } from './styles';

// Importar o componente correto
import FotoAnuncio from '../../FotoAnuncio';

// Importar a imagem corretamente
import Praia from './apt2.jpg';

function Anuncio_2() {
  return (
    <View style={styles.container}>
      <FotoAnuncio
        titulo="Venda Apartamento no Embaré"
        foto={Praia} // Usar chaves para passar a variável
        legenda="Apartamento à venda no Embaré, a poucos passos da praia! More com vista para o mar e desfrute de toda a tranquilidade que o bairro oferece. Com 2 dormitórios (1 suíte), sala ampla, cozinha planejada e varanda com espaço gourmet, este imóvel é perfeito para quem busca conforto e estilo. Próximo ao Aquário de Santos, mercados, restaurantes e transporte. Garagem coberta inclusa. Valor: R$ 650.000. Entre em contato agora e agende sua visita!"
      />
    </View>
  );
}

export default Anuncio_2;

