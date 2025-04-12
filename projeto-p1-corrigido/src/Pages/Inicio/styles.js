import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    marginTop: 40,
    paddingVertical: 100,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00695c',
    textAlign: 'center',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 12,
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    color: '#333',
    fontSize: 17,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#004d40',
    marginVertical: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
  },
  cardInfo: {
    flex: 1,
  },
  cardName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00695c',
  },
  cardDesc: {
    fontSize: 16,
    color: '#777',
  },
});

export default styles;