import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

function App() {
  let initial_feed = [
    { id: 1, vaga: 'Desenvolvedor Java', salário: 'R$ 6.500,00', descricao: 'Procuramos um desenvolvedor Java com sólida experiência em programação orientada a objetos, frameworks como Spring Boot e Hibernate, e conhecimentos em bancos de dados SQL. Desejável familiaridade com APIs REST, controle de versão (Git) e metodologias ágeis. Será responsável por desenvolver e manter sistemas de alta performance, garantindo qualidade e inovação nas soluções entregues.', contato: 'test@gmail.com' },
    { id: 2, vaga: 'Desenvolvedor Front-End', salário: 'R$ 7.300,00', descricao: 'Buscamos um desenvolvedor Front-End com experiência em HTML, CSS, JavaScript (ES6+), e frameworks como React.js ou Angular. Desejável conhecimento em consumo de APIs REST, versionamento Git e otimização de performance. Será responsável por criar interfaces modernas, responsivas e intuitivas, garantindo a melhor experiência para os usuários.', contato: 'test2@gmail.com' },
    { id: 3, vaga: 'Designer UX/UI', salário: 'R$ 5.000,00', descricao: 'Procuramos um Designer UX/UI com habilidades em pesquisa de usuário, prototipagem, wireframes e ferramentas como Figma, Sketch ou Adobe XD. Experiência em design responsivo, mapeamento de jornada do usuário e noções de acessibilidade são diferenciais. Sua missão será transformar ideias em experiências visuais funcionais e impactantes, alinhadas às necessidades do cliente/usuário.', contato: 'test3@gmail.com' },
    { id: 4, vaga: 'Analista de Dados', salário: 'R$ 6.000,00', descricao: 'Procuramos um Analista de Dados com experiência em SQL, Power BI ou Tableau e modelagem de dados. Conhecimento em Python (bibliotecas como Pandas e NumPy) será considerado um diferencial. O profissional será responsável por extrair insights estratégicos a partir de grandes volumes de dados, apoiando decisões de negócios e criando dashboards dinâmicos.', contato: 'test4@gmail.com' },
    { id: 5, vaga: 'Especialista em Marketing Digital', salário: 'R$ 5.000,00', descricao: 'Buscamos um Especialista em Marketing Digital com expertise em estratégias de SEO, Google Ads, redes sociais e e-mail marketing. Experiência em análise de métricas (Google Analytics) e criação de campanhas de alto impacto é essencial. Sua missão será aumentar a visibilidade da marca, engajar o público-alvo e gerar resultados mensuráveis.', contato: 'test5@gmail.com' },
  ];

  const [feed, setFeed] = useState(initial_feed);

  return (
    <View style={styles.container}>
      <FlatList
        data={feed}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Vaga data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  vagaContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  vagaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  vagaSalary: {
    fontSize: 16,
    color: '#2ecc71',
    marginBottom: 8,
  },
  vagaDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  vagaContact: {
    fontSize: 14,
    color: '#3498db',
    fontStyle: 'italic',
  },
});

export default App;

function Vaga(props) {
  return (
    <View style={styles.vagaContainer}>
      <Text style={styles.vagaTitle}>Vaga: {props.data.vaga}</Text>
      <Text style={styles.vagaSalary}>Salário: {props.data.salário}</Text>
      <Text style={styles.vagaDescription}>Descrição: {props.data.descricao}</Text>
      <Text style={styles.vagaContact}>Contato: {props.data.contato}</Text>
    </View>
  );
}



