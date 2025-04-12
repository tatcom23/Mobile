import { View } from 'react-native';
import { styles } from './styles';

// Importar o componente correto
import FotoAnuncio from '../../FotoAnuncio';

// Importar a imagem corretamente
import Praia from './praia.jpg';

function Anuncio_1() {
  return (
    <View style={styles.container}>
      <FotoAnuncio
        titulo="Venda Apartamento na Ponta da Praia"
        foto={Praia} // Usar chaves para passar a variável
        legenda="Apartamento dos sonhos na Ponta da Praia com vista deslumbrante para o mar! More em um dos bairros mais procurados de Santos e aproveite toda a infraestrutura que a região oferece. Este imóvel possui 3 dormitórios, sala ampla com varanda gourmet integrada, cozinha moderna e área de serviço. A poucos metros do Shopping Praiamar, restaurantes, padarias e ciclovias."
      />
    </View>
  );
}

export default Anuncio_1;

