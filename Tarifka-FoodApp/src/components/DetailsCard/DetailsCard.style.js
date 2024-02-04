import { StyleSheet,Dimensions } from 'react-native';


 const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    image: {
      height:Dimensions.get('window').height/3,
      width:Dimensions.get('window').width,
      resizeMode:'stretch',


    },
    text: {
      color:"red",
      fontSize:18,
      textAlign:'center',
      paddingLeft:10,
      },
    
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        justifyContent:'center',
      },
    descrip:{
      padding:10,
      margin:5,
    },
    button:{
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 15,
      margin:15,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign:'center',
    },
  });



export default styles;