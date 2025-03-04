import { View, Text, Image } from 'react-native';

import fotoPerfil from './assets/fotoPerfil.jpg'; // Mude aqui o nome da sua imagem

function App(){

  return(
     <View>
        <Text style={{fontSize: 15, fontStyle: 'italic', textAlign:'center', marginTop: 80, 
        marginBottom: 15}}
        >Meu Perfil Profissional</Text>

      
         <Image source={fotoPerfil} style={{ width: 200, height: 200, alignSelf: 'center'}} />
        
        <Text style={{fontSize: 18, marginLeft: 15, marginTop: 15, fontStyle: 'bold'}}> 
        Dados Pessoais </Text>
        <Text style={{fontSize: 14, marginLeft: 15}}>
          Nome: Tatiana Nunes
        </Text>
        
        <Text style={{fontSize: 18, marginLeft: 15, marginTop: 15, fontStyle: 'bold'}}> 
        Formação </Text>
        <Text style={{fontSize: 14, marginLeft: 15}}>
          Enfermagem - 2003
        </Text>
        <Text style={{fontSize: 14, marginLeft: 15}}>
          Gastronomia - 2014
        </Text>
        <Text style={{fontSize: 14, marginLeft: 15}}>
          ADS - 2025
        </Text>

        <Text style={{fontSize: 18,  marginLeft: 15,  marginTop: 15, fontStyle: 'bold'}}> 
        Experiência </Text>
        <Text style={{fontSize: 14, marginLeft: 15}}>
          Hospital das CLínicas da Faculdade de Medicina da USP - Enfermeira da UTI de Transplante de 
          Fígado
        </Text>
        <Text style={{fontSize: 14, marginLeft: 15}}>
          Hospital Santa Catarina - Enfermeira da UTI Neurológica
        </Text>
        <Text style={{fontSize: 14, marginLeft: 15}}>
          Prefeitura Municipal Praia Grande - Estágio em Programação na Secretaria de Planejamento e
          Desenvolvimento
        </Text>


        <Text style={{fontSize: 18, marginLeft: 15, marginTop: 15, fontStyle: 'bold'}}> 
        Portifólio </Text>
        <Text style={{fontSize: 14, marginLeft: 15}}>
          Calculadora de Medicamentos - Linguagem JS, HTML e CSS
        </Text>
        <Text style={{fontSize: 14, marginLeft: 15}}>
          Ferramenta de análise para ECG - Linguagem Java, JS, HTML, CSS, APIs: Geminy e Openai
        </Text>


      </View>
  )
}




export default App;
