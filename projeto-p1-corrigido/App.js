// Importa as bibliotecas principais para navegação entre telas e ícones
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Importa as telas que serão usadas nas abas
import Inicio from './src/Pages/Inicio';
import IMC from './src/Pages/IMC';
import IngestaoAgua from './src/Pages/IngestaoAgua';
import Nutrientes from './src/Pages/Nutrientes'; // Tela com ScrollView

// Cria o componente de navegação por abas
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // NavigationContainer é obrigatório para usar a navegação
    <NavigationContainer>
      <Tab.Navigator
        // Define configurações personalizadas para cada aba
        screenOptions={({ route }) => ({
          // Define o ícone que será mostrado em cada aba, com base no nome da rota
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Ícones diferentes se estiver selecionado (focused) ou não
            if (route.name === 'Início') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'IMC') {
              iconName = focused ? 'calculator' : 'calculator-outline';
            } else if (route.name === 'Água') {
              iconName = focused ? 'water' : 'water-outline';
            } else if (route.name === 'Nutrientes') {
              iconName = focused ? 'nutrition' : 'nutrition-outline';
            }

            // Retorna o ícone da aba
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          // Cor quando a aba está ativa ou inativa
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: 'gray',
          // Remove o cabeçalho padrão das telas
          headerShown: false,
        })}
      >
        {/* Define cada aba com seu respectivo componente/tela */}
        <Tab.Screen name="Início" component={Inicio} />
        <Tab.Screen name="IMC" component={IMC} />
        <Tab.Screen name="Água" component={IngestaoAgua} />
        <Tab.Screen name="Nutrientes" component={Nutrientes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
