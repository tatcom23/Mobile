import { View } from 'react-native';
import { styles } from './styles';

// Importar o componente correto
import Vagas from '../../Vagas';

function Vaga_1() {
  return (
    <View style={styles.container}>
      <Vagas
        titulo="Especialista em Marketing Digital"
        salario='5.000,00'
        descricao='Buscamos um Especialista em Marketing Digital com expertise em estratégias de SEO, Google Ads, redes sociais e e-mail marketing. Experiência em análise de métricas (Google Analytics) e criação de campanhas de alto impacto é essencial. Sua missão será aumentar a visibilidade da marca, engajar o público-alvo e gerar resultados mensuráveis.'
        contato='(11) 999999999'
      />
    </View>
  );
}

export default Vaga_1;

