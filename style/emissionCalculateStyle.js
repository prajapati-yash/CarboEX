import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
      },
      modal: {
        width: 300,
        height: 240,
      },
      text: {
        color: '#000000',
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
      },
      centered_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099'
      },
      result_modal: {
        width: 320,
        height: 222,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
      },
      result_header: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BAD7E9',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flexDirection:'row',
        position: "relative",
      },
      result_title: {
        position: "absolute",
      },
      result_body: {
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buy_button:{
        backgroundColor:'#ff0000',
        width:"50%",
        borderBottomLeftRadius:20,
      },
      sell_button:{
        backgroundColor:'#00ff00',
        width:"50%",
      },
      resultFooter:{
        flexDirection:"row",
        overflow:"hidden",
        marginTop:-50,
        borderBottomRightRadius:20
      }
  });

  export default styles;