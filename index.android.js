import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native';

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

const gerarNovaFrase = () => {
  
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 11);

  var frases = Array();
  frases[0] = 'Aquele que luta com monstros deve acautelar-se para não tornar-se também um monstro. Quando se olha muito tempo para um abismo, o abismo olha para você.';
  frases[1] = 'Não existe cedo ou tarde, não existe tempo certo ou errado. As coisas acontecem quando tem que acontecer...';
  frases[2] = 'A gratidão desbloqueia a abundância da vida. Ela torna o que temos em suficiente, e mais. Ela torna a negação em aceitação, caos em ordem, confusão em claridade.';
  frases[3] = 'É difícil dizer quem nos faz mais mal: inimigos com as piores intenção, ou amigos com as melhores.';
  frases[4] = 'Não acredite em algo simplesmente porque ouviu. Não acredite em algo simplesmente porque todos falam a respeito. Não acredite em algo simplesmente porque esta escrito em seus livros religiosos...';
  frases[5] = 'Pensar de mais, falar de mais, fazer de mais, platonismo de mais, tudo de mais… Menos aquilo que deveria ser de menos, menos aquilo que deveria ser a dosagem certa.';
  frases[6] = 'Quando somos jovens nos sentimos infinitos. E realmente somos. Mas se lembre, não seremos jovens para sempre. Será que estamos prontos para ser finitos? Será que estamos prontos para ser cada vez mais limitados pelo tempo?';
  frases[7] = 'Somos aquilo que sentimos e percebemos. Se estamos zangados, somos a raiva. Se estamos apaixonados, somos o amor...';
  frases[8] = 'A música é só um reflexo do movimento que acontece dentro de você...';
  frases[9] = 'Normalmente o que queremos ou desejamos é algo que mantemos dentro de nós';
  frases[10] = 'Você faz as suas escolhas, e suas escolhas fazem você.';

  var fraseEscolhida = frases[ numeroAleatorio ];

  Alert.alert(fraseEscolhida);
}

const App = () => {
  
  const { principal, botao, textoBotao } = Estilos;
  
  return(
    <View style={ principal }>
      <Image source={ require('./imgs/logo.png') } />
      <TouchableOpacity 
      onPress={ gerarNovaFrase }
      style={ botao }>
        <Text style={ textoBotao }>Nova frase</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('FrasesDoDia', () => App);
