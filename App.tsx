import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Carrinho from './componentes/Carrinho';
import ListaProdutos from './componentes/ListaProdutos';
import ListaSecoes from './componentes/ListaSecoes';

const produtos = [
  { img: require('./componentes/images/rice.jpg'), nome: 'Arroz ', preco: 15, desc: 'Descrição: Arroz branco comum', },
  { img: require('./componentes/images/beans.jpg'), nome: 'Feijão ', preco: 9.85, desc: 'Descrição: Feijão vermelho', },
  { img: require('./componentes/images/sugar_1.jpg'), nome: 'Açúcar', preco: 10, desc: 'Descrição: Açúcar branco tipo cristal', },
  { img: require('./componentes/images/vannila_ice_cream.webp'), nome: 'Sorvete ', preco: 20, desc: 'Descrição: Sorvete sabor Baunilha', },
];



export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Text style={styles.prodText} >Produtos</Text>

        <Text style={styles.listaText}>Lista de Produtos</Text>

        <ListaSecoes />
        {/*<ListaProdutos 
        produtos={produtos} />

        <Carrinho />*/}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  //container geral 

  container: {
    backgroundColor: 'black',
  },

  // texto "produto"
  prodText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 45,
  },

  listaText: {
    color: 'white',
    fontSize: 45,
  }

});