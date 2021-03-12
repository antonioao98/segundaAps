import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      positionPhrase: 0,

      phrase:
      [
        {frase:"Clique no botão abaixo e veja sua frase", imagem:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvE2sdNnuDEGHgrdNNBaF_lSFLESeC8Q9UCg&usqp=CAU"},
        {frase:"Levanta, sacode a poeira, dá a volta por cima.", imagem:"https://cdn.pensador.com/img/imagens/pa/ul/paulo_vanzolini_levanta_sacode_a_poeira_da_volta_por_cima_1.jpg"},
        {frase:"Nem todos os dias são bons, mas há algo bom em cada dia", imagem:"https://cdn.pensador.com/img/imagens/ne/mt/nem_todos_os_dias_sao_bons_mas_ha_algo_bom.jpg"},
        {frase:"Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada, apenas dê o primeiro passo", imagem:"https://cdn.pensador.com/img/imagens/ma/rt/martin_luther_king_suba_primeiro_degrau_com_fe.jpg"},
        {frase:"Toda manhã você tem duas escolhas: continuar dormindo com seus sonhos ou acordar e persegui-los!", imagem:"https://cdn.pensador.com/img/imagens/to/da/toda_manha_voce_tem_duas_escolhas_continuar_dormindo.jpg"},
        {frase:"O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.", imagem:"https://cdn.pensador.com/img/imagens/fr/as/frases_positivas_para_o_dia_2_0.jpg"},
      ]
      
    }
    this.getPrashe = this.getPrashe.bind(this)
  }
  getPrashe(){
    console.log(this.state.positionPhrase)
     this.setState({
      positionPhrase: Math.floor(Math.random()* (this.state.phrase.length - 1))+1
      
    }) 
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
        source={{uri:this.state.phrase[this.state.positionPhrase].imagem}}
         style={{
           width:400,
         height:300
        }}
          />
        <Text style={styles.text}>{this.state.phrase[this.state.positionPhrase].frase}</Text>

        <TouchableHighlight style={styles.button} onPress={()=> this.getPrashe()}>
          <Text style={[styles.textButton]}>Abrir frase do dia</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent:"center"
  },
  text:{
    marginTop: 3,
    marginBottom: 15,
    fontSize: 25,
    textAlign:"center",
    fontSize: 25,
    maxWidth:300,
    color:"#FA6C4E"
  },
  button:{
    backgroundColor:"#FFF",
    borderColor:"#FA6C4E",
    width: 300,
    borderWidth:3,
    borderRadius: 15
  },
  textButton:{
    justifyContent:"center",
    textAlign:"center",
    padding:10,
    color:"#FA6C4E"
  }

});

export default App;