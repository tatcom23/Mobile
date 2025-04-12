import { View } from 'react-native';
import { styles } from './styles';

// Importar o componente correto
import Vagas from '../../Vagas';

function Vaga_1() {
  return (
    <View style={styles.container}>
      <Vagas
        titulo="Analista de Dados"
        salario='6.000,00'
        descricao='Procuramos um Analista de Dados com experiência em SQL, Power BI ou Tableau e modelagem de dados. Conhecimento em Python (bibliotecas como Pandas e NumPy) será considerado um diferencial. O profissional será responsável por extrair insights estratégicos a partir de grandes volumes de dados, apoiando decisões de negócios e criando dashboards dinâmicos.'
        contato='(11) 999999999'
      />
    </View>
  );
}

export default Vaga_1;

