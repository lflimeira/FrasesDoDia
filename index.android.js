import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity } from 'react-native';

const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const botaoPressionado = () => {
  
}

const App = () => {
  
  const { principal, botao, textoBotao } = Estilos;
  
  return(
    <View style={ principal }>
      
      <Image source={ require('./imgs/logo.png') } />
      <TouchableOpacity style={ botao }>
        <Text style={ textoBotao }>Nova frase</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('daysPhrases', () => App);
