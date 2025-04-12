import React, { useState } from 'react';
import { ScrollView, Text, TextInput, Image, View, TouchableOpacity, Switch } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles'; 
import SwitchPersonalizado from '../../components/Switch'

const IngestaoAgua = () => {
  // 👉 useState usado pra controlar o valor digitado no input (ml), o total de água e se a notificação tá ativada ou não
  const [ml, setMl] = useState('');
  const [total, setTotal] = useState(0);
  const [lembrar, setLembrar] = useState(false);

  // 👉 Função chamada ao clicar no botão "Adicionar"
  const adicionarAgua = () => {
    const valor = parseInt(ml); // converte o valor digitado para número inteiro
    if (!isNaN(valor)) { // verifica se é um número válido
      setTotal(total + valor); // soma o valor digitado ao total
      setMl(''); // limpa o campo depois de adicionar
    } else {
      alert('Digite uma quantidade válida de ml!'); // avisa se a pessoa digitou algo inválido
    }
  };

  return (
    <LinearGradient
      colors={['#e0f7fa', '#ffffff']} // 👉 Gradiente de fundo: azul claro pro branco
      style={styles.container}
    >
      <ScrollView style={{ padding: 20 }}>
        <Text style={styles.titulo}>Ingestão de Água</Text>

        {/* 👉 Imagem relacionada ao tema água */}
        <Image source={require('../../../assets/agua.png')} style={styles.imagem} />

        {/* 👉 Campo de input com ícone de copo */}
        <View style={styles.inputWrapper}>
          <MaterialCommunityIcons
            name="cup-water"
            size={20}
            color="#999"
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Quantos ml você bebeu?"
            placeholderTextColor="#999"
            value={ml}
            onChangeText={setMl}
            keyboardType="numeric" // 👉 Define que o teclado vai ser numérico
            style={styles.inputWithIcon}
          />
        </View>

        {/* 👉 Botão pra adicionar o valor digitado ao total */}
        <TouchableOpacity style={styles.botao} onPress={adicionarAgua}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>

        {/* 👉 Mostra o total de água ingerida no dia */}
        <Text style={{ marginTop: 20, fontSize: 18 }}>
          💧 Total ingerido hoje: <Text style={{ fontWeight: 'bold' }}>{total} ml</Text>
        </Text>

        {/* 👉 Switch pra ativar ou desativar lembrete de beber água */}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
          <Text style={{ marginRight: 10 }}>Lembrar de beber água?</Text>
          <Switch value={lembrar} onValueChange={setLembrar} />
        </View>
      </ScrollView>
    </LinearGradient> // 👉 Fecha o LinearGradient que envolve toda a tela
  );
};

export default IngestaoAgua;