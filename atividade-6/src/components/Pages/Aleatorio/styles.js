import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    area:{
        marginTop: 40
    },
    titulo:{
        fontSize: 20,
        color: 'orange',
        textAlign: 'center'
    },
    input:{
      height: 45,
      borderWidth: 1,
      borderColor: '#222',
      margin: 10,
      fontSize: 20,
      padding: 10,
    },
    resultado:{
      marginTop: 15,
      fontSize: 64,
      color: 'green',
      textAlign: 'center' 
    },
       img:{
        marginTop: 20,
        width: 200, 
        height: 200,
        alignSelf: 'center'
    }
});

export {styles}