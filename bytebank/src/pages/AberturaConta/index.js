import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Campo from '../../components/Campo'; 
import Botao from '../../components/Botao'; 
import SliderComponent from '../../components/Slider'; 
import SwitchComponent from '../../components/Switch'; 
import Titulo from '../../components/Titulo'
import { styles } from './styles'; 

export default function App() {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexoSelecionado, setSexoSelecionado] = useState(0); 
  const [escolaridadeSelecionada, setEscolaridadeSelecionada] = useState(0); 
  const [limiteConta, setLimiteConta] = useState(0); 
  const [isBrasileiro, setIsBrasileiro] = useState(false); 
  const [dadosInseridos, setDadosInseridos] = useState(false); 

  const initial_sexo = [
    { id: 1, nome: 'Feminino' },
    { id: 2, nome: 'Masculino' },
    { id: 3, nome: 'Outro' },
  ];

  const initial_escolaridade = [
    { id: 1, nome: 'Não Alfabetizado' },
    { id: 2, nome: 'Ensino Fundamental Incompleto' },
    { id: 3, nome: 'Ensino Fundamental Completo' },
    { id: 4, nome: 'Ensino Médio Incompleto' },
    { id: 5, nome: 'Ensino Médio Completo' },
    { id: 6, nome: 'Ensino Técnico' },
    { id: 7, nome: 'Ensino Superior Incompleto' },
    { id: 8, nome: 'Ensino Superior Completo' },
    { id: 9, nome: 'Pós-Graduação' },
    { id: 10, nome: 'Mestrado' },
    { id: 11, nome: 'Doutorado' },
  ];

  const handleConfirmar = () => {
    setDadosInseridos(true); 
  };

  return (
    <View style={styles.container}>

       <Titulo titulo="ByteBank" subtitulo="Abertura de Conta" />
  
      <Campo
        placeholder="Digite seu nome"
        funcao={(text) => setNome(text)} 
      />
     
      <Campo
        placeholder="Digite sua idade"
        funcao={(text) => setIdade(text)} 
        tipo="numeric" 
      />
     
      <Text style={styles.label}>Selecione o Sexo:</Text>
      <Picker
        selectedValue={sexoSelecionado}
        onValueChange={(itemValue) => setSexoSelecionado(itemValue)}
        style={styles.picker}
      >
        {initial_sexo.map((valor) => (
          <Picker.Item key={valor.id} value={valor.id} label={valor.nome} />
        ))}
      </Picker>
      
      <Text style={styles.label}>Selecione a Escolaridade:</Text>
      <Picker
        selectedValue={escolaridadeSelecionada}
        onValueChange={(itemValue) => setEscolaridadeSelecionada(itemValue)}
        style={styles.picker}
      >
        {initial_escolaridade.map((valor) => (
          <Picker.Item key={valor.id} value={valor.id} label={valor.nome} />
        ))}
      </Picker>

      <SliderComponent
        value={limiteConta}
        onValueChange={(value) => setLimiteConta(value)}
        label="Limite de Conta (R$)"
        minimumValue={0}
        maximumValue={1000}
        step={50}
      />

      <SwitchComponent
        label="Brasileiro:"
        value={isBrasileiro}
        onValueChange={(value) => setIsBrasileiro(value)}
      />

      <Botao onPress={handleConfirmar} />
 
      {dadosInseridos && (
        <View style={styles.resultadoContainer}>
         <Titulo titulo="ByteBank" subtitulo="Dados Informados:" />
          <Text style={styles.resultadoTexto}>Nome: {nome}</Text>
          <Text style={styles.resultadoTexto}>Idade: {idade}</Text>
          <Text style={styles.resultadoTexto}>
            Sexo: {initial_sexo.find((s) => s.id === sexoSelecionado)?.nome || 'Não informado'}
          </Text>
          <Text style={styles.resultadoTexto}>
            Escolaridade:{' '}
            {initial_escolaridade.find((e) => e.id === escolaridadeSelecionada)?.nome || 'Não informado'}
          </Text>
          <Text style={styles.resultadoTexto}>Limite de Conta: R$ {limiteConta.toFixed(2)}</Text>
          <Text style={styles.resultadoTexto}>
            Brasileiro: {isBrasileiro ? 'Sim' : 'Não'}
          </Text>
        </View>
      )}
    </View>
  );
}