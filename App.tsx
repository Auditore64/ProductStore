import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaHome from './telas/TelaHome';
import TelaContato from './telas/TelaContato';
import Tela1 from './telas/Tela1';
import Tela2 from './telas/Tela2';
import Tela3 from './telas/Tela3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        
        <Stack.Screen
          name='TelaHome'
          component={TelaHome}
          options={{ title: 'Página Home' }}
        />

        <Stack.Screen
          name='TelaContato'
          component={TelaContato}
          options={{ title: 'Página Contato' }}
        />
        
        <Stack.Screen
          name='Tela1'
          component={Tela1}
          options={{ title: 'Tela Principal' }}
        />
        
        <Stack.Screen
          name='Tela2'
          component={Tela2}
          options={{ title: 'Segunda Tela' }}
        />
          
         <Stack.Screen
           name='Tela3'
           component={Tela3}
           options={{ title: 'Terceira Tela' }}
         />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  //container geral 
  container: {
    backgroundColor: 'black',
  },
  //texto geral
  texto: {
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