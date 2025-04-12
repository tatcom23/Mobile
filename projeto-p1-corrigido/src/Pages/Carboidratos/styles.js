import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    marginTop: 80,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00695c',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'black',
  },
  picker: {
    height: 80,
    marginBottom: 20,
    marginTop: 2,
    color: '#00695c',
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    color: '#00695c',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;