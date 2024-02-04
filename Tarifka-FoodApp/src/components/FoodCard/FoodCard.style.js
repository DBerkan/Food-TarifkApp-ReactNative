import { StyleSheet,Dimensions } from 'react-native';


 const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 3,
        backgroundColor: '#ffff',
        borderRadius: 10,
        justifyContent: 'center',

    },
    image: {
        height: 100,
        width:200,
        borderRadius: 10,
        resizeMode: 'contain',
    },
    text: {
        fontSize:18,
        color: 'black',
      },
      contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
      },
  });



export default styles;