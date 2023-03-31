import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import LojaProd from './componentes/Loja';
import Compras from './componentes/Compras';
import Product from './componentes/Product';
import Config from './componentes/Config';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Config />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  //container geral 
  container: {
    backgroundColor: 'black',
  },
  //texto geral
  texto: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
  },

  //rodape
  rodape: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  //texto dos produtos
  produto: {
    color: 'lightgray',
    fontSize: 30,
    alignSelf: 'center',
  },
});