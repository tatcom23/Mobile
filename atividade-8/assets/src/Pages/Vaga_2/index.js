import { View } from 'react-native';
import { styles } from './styles';

// Importar o componente correto
import Vagas from '../../Vagas';

function Vaga_2() {
  return (
    <View style={styles.container}>
      <Vagas
        titulo="Desenvolvedor Front-End"
        salario='6.500,00'
        descricao='Buscamos um desenvolvedor Front-End com experiência em HTML, CSS, JavaScript (ES6+), e frameworks como React.js ou Angular. Desejável conhecimento em consumo de APIs REST, versionamento Git e otimização de performance. Será responsável por criar interfaces modernas, responsivas e intuitivas, garantindo a melhor experiência para os usuários.'
        contato='(11) 999999999'
      />
    </View>
  );
}

export default Vaga_2;

