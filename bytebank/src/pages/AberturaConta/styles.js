import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 8,
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
  },
  resultadoContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
  },
  resultadoTexto: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 8,
  },
});