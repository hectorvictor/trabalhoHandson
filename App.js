import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import IconsEvill from 'react-native-vector-icons/EvilIcons';
import IconsAwesome from 'react-native-vector-icons/FontAwesome5';
import IconsAntDesign from 'react-native-vector-icons/AntDesign';
import IconsMaterialCons from 'react-native-vector-icons/MaterialIcons';
import IconsSimplesLine from 'react-native-vector-icons/SimpleLineIcons';

class App extends Component {      

  render() {        
    
    return (
      <View style={styles.container}>
        <View style = {styles.titulo}>
            <View>
                <Text style={styles.tituloTexto}>Olá, Hector</Text>
            </View>
            <View style={styles.areaIcones}>
                <View style={styles.iconsTitulo}>
                <IconsEvill name="eye" size={35} color="white"/>
                </View>
                <View style={styles.iconsTitulo}>
                <IconsEvill name="gear" size={35} color="white"/>  
                </View>
            </View>
        </View> 

          <View style={{flex:1}}>                       
            <View style={styles.quadrado1}>                 
                <View style={{flexDirection:'row', margin:10}}>
                    <View>
                      <IconsEvill name="credit-card" size={35} color="#7b7b7b"/>
                    </View>
                    <Text style={{fontSize: 15, left: 20, color:'#7b7b7b'}}>Cartão de Crédito</Text>
                </View>

                  <View style={{marginLeft:25}}>
                    <Text style={{color:'#7b7b7b'}}>Fatura fechada</Text>
                    <View style={{backgroundColor:'#d9d9d9',  width:350, height:40, marginTop: 10, marginBottom:10}}></View>

                    <View style={{flexDirection:'row'}}>
                      <TouchableOpacity style={styles.botao}>                        
                          <Text style={{color:'#c3376b', fontWeight:'bold'}}>PAGAR FATURA</Text>                        
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.botao1}>                        
                          <Text style={{fontWeight:'bold'}}>PARCELAR</Text>                        
                      </TouchableOpacity>
                    </View>
                  </View>
            </View>

            <View style={styles.quadrado2}>
              <View style={styles.area2}>
                  <View style={{flexDirection:'row'}}>
                      <IconsAwesome name="coins" size={25} color="#7b7b7b"/>
                      <Text style={{fontSize: 17, left: 20, color:'#7b7b7b'}}>Conta</Text>
                  </View>
                  <View style={{paddingTop:10}}>
                      <Text style={{fontSize: 13, color:'#7b7b7b'}}>Saldo disponivel</Text>
                      <View style={{backgroundColor:'#d9d9d9',  width:350, height:30, marginTop: 10, marginBottom:10}}></View>
                  </View>
              </View>
            </View>

            <View style={styles.quadrado3}>
                <View style={styles.area2}>
                    <View style={{flexDirection:'row'}}>
                        <IconsAntDesign style={{backgroundColor:'#8412b4', opacity: 0.3, borderRadius:15, height:35}}name="gift" size={30} />
                        <Text style={{left:20,fontSize:20, color:'#8412b4', fontWeight:'bold'}}>Rewards</Text>
                    </View>
                    <View style={{paddingTop:15}}>
                        <Text style={{fontSize:15}}>Apague compras com pontos que nunca</Text>
                        <Text>expiram.</Text>
                        <TouchableOpacity style={styles.botao2}>
                          <Text style={{fontWeight:'bold', color:'#8412b4'}}>CONHECER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{flex:1}}> 
                <View style={{flexDirection:'row'}}>
                    <View style={styles.quadradinho}>
                        <View>
                            <IconsMaterialCons name="control-camera" size={30} color="white"/>
                            <Text style={{color:'white', top: 20}}>Pix</Text>
                        </View>
                    </View>
                    <View style={styles.quadradinho}>
                        <View>
                            <IconsAntDesign name="barcode" size={30} color="white"/>
                            <Text style={{color:'white', top: 20}}>Pagar</Text>
                        </View>
                    </View>
                    <View style={styles.quadradinho}>
                         <View>
                          <IconsAntDesign name="user" size={30} color="white"/>
                          <Text style={{color:'white', top: 5}}>Indicar amigos</Text>
                        </View>
                    </View>
                    <View style={styles.quadradinho}>
                        <View>
                          <IconsMaterialCons name="monetization-on" size={30} color="white"/>
                          <Text style={{color:'white', top: 20}}>Transferir</Text>
                        </View>
                    </View>
                    <View style={styles.quadradinho}>
                        <View>
                          <IconsSimplesLine name="basket" size={30} color="white"/>
                          <Text style={{color:'white', top: 20}}>Transferir</Text>
                        </View>
                    </View>
                    <View style={styles.quadradinho}>

                    </View>
                  </View>             
             </View>                 
           </View>                 
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop:10,
    flex: 1,
    backgroundColor: '#8412b4' 
  },
  titulo:{    
    flexDirection:'row',    
    margin: 20
  },
  tituloTexto: {
    fontSize:25,
    color:'white',
    fontWeight:'bold'
  },
  areaIcones: {
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end' 
   
  },
  iconsTitulo: {       
    backgroundColor:'#9278b5',   
    opacity:0.5, 
    height:40,     
    borderRadius: 20,
    marginLeft:15,
    padding:7         
  },
  quadrado2: {
    height: 130,
    width: 390,
    backgroundColor:'white',
    margin: 9,
    borderRadius: 6
  },
  quadrado1: {
    height:180,
    width: 390,
    backgroundColor:'white',
    margin:9,
    borderRadius: 6,
    
  },
  botao: {
    justifyContent:'center',
    borderWidth:1,
    height:35,
    padding:10,
    borderRadius:5   
  },
  botao1: {
    justifyContent:'center',
    borderWidth:1,
    height:35,
    padding:10,
    borderRadius:5,
    left:20   
  },
  area2:{
    padding: 20,
    flex:1
  },
  botao2:{
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    height:35,
    padding:10,
    borderRadius:5,
    width:120,
    marginTop:10    
  },
  quadrado3: {
    height: 160,
    width: 390,
    backgroundColor:'white',
    margin: 9,
    borderRadius: 6
  },
  quadradinho: {
    backgroundColor:'#a016da',
    height:80,
    width: 80,
    marginTop:2,
    marginLeft:10,
    opacity: 0.6,
    padding:5    
  }
});

