import { View } from 'react-native';
import { styles } from './styles';

// Importar o componente correto
import Vagas from '../../Vagas';

function Vaga_1() {
  return (
    <View style={styles.container}>
      <Vagas
        titulo="Designer UX/UI"
        salario='5.000,00'
        descricao='Procuramos um Designer UX/UI com habilidades em pesquisa de usuário, prototipagem, wireframes e ferramentas como Figma, Sketch ou Adobe XD. Experiência em design responsivo, mapeamento de jornada do usuário e noções de acessibilidade são diferenciais. Sua missão será transformar ideias em experiências visuais funcionais e impactantes, alinhadas às necessidades do cliente/usuário.'
        contato='(11) 999999999'
      />
    </View>
  );
}

export default Vaga_1;

