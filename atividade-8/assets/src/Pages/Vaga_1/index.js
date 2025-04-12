import { View } from 'react-native';
import { styles } from './styles';

// Importar o componente correto
import Vagas from '../../Vagas';

function Vaga_1() {
  return (
    <View style={styles.container}>
      <Vagas
        titulo="Desenvolvedor Java"
        salario='7.300,00'
        descricao='Procuramos um desenvolvedor Java com sólida experiência em programação orientada a objetos, frameworks como Spring Boot e Hibernate, e conhecimentos em bancos de dados SQL. Desejável familiaridade com APIs REST, controle de versão (Git) e metodologias ágeis. Será responsável por desenvolver e manter sistemas de alta performance, garantindo qualidade e inovação nas soluções entregues'
        contato='11) 999999999'
      />
    </View>
  );
}

export default Vaga_1;

