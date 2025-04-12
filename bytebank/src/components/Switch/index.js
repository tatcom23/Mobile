import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

function SwitchComponent({ label, value, onValueChange }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#CCCCCC', true: '#8A1538' }}
        thumbColor={value ? '#FFFFFF' : '#8A1538'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
});

export default SwitchComponent;