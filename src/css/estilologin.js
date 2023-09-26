import {StyleSheet} from 'react-native';


const estilos = StyleSheet.create({

    containerPrincipal:{
      flex:1,
      flexDirection: 'column',
    },

    imagemFundo:{
        flex: 1,
        resizeMode: 'cover',
        width: 'auto',
        height: 'auto',
      },

    title:{
      color:'#000000',
      fontSize: '30px',
      fontWeight: 'bold',
      margin: 20,
    },

    imagemLogo:{
      width: 200,
      height:200,
      left:60,
      top:10,
      borderRadius: 50,
    },

    caixaEmail:{
      backgroundColor: '#ffffff',
      borderWidth: 2,
      padding: 15,
      fontSize: '18px',
      borderRadius: 50,
      marginTop: 20,
      marginHorizontal: 10,
    },

    caixaSenha:{
      backgroundColor: '#ffffff',
      borderWidth: 2, 
      padding: 15,
      fontSize: '18px',
      borderRadius: 50,
      marginTop: 20,
      marginHorizontal: 10,
    },

    Botao:{
      backgroundColor:'#ffffff',
    width:250,
    height:60,
    marginTop:30,
    marginEnd:20,
    borderRadius:50,
    padding:20,
    alignSelf: 'center',
    },

    textoBotao:{
      color: '#000000',
      fontSize: '15px',
      fontWeight:'bold',
      alignSelf: 'center',
    }

  })

  export default estilos;