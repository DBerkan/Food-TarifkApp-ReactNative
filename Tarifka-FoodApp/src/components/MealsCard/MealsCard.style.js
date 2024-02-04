import { StyleSheet,Dimensions } from 'react-native';


 const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 3,
        backgroundColor: '#ffff',
    },
    image: {
        height: 150,
        minWidth:Dimensions.get('window').width/2,
        borderRadius: 20,
        resizeMode: 'cover',

        overflow:'hidden'

    },
    
    text: {
        fontSize:18,
        color: 'black',
        textAlign:'center',

      },
      
      contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        justifyContent:'center'
      },
  });



export default styles;