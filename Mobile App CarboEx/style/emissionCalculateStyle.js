import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
      },
      modal: {
        width: responsiveWidth(90),
        height: responsiveHeight(32.2),
      },
      centered_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099'
      },
      result_modal: {
        width: responsiveWidth(90),
        height: responsiveHeight(30.4),
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
      },
      result_header: {
        height: responsiveHeight(7.4),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BAD7E9',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flexDirection:'row',
        position: "relative",
      },
      result_header_title: {
        position: "absolute",
      },
      result_header_title_text: {
        color: '#000000',
        fontSize: responsiveFontSize(3),
        textAlign: 'center',
      },
      result_body: {
        height: responsiveHeight(17.6),
        justifyContent: 'center',
        alignItems: 'center',
      },
      result_body_text: {
        color: '#000000',
        fontSize: responsiveFontSize(2.5),
        textAlign: 'center',
      },
      resultFooter:{
        flexDirection:"row",
        overflow:"hidden",
        borderBottomRightRadius:20
      },
      result_button_text: {
        color: '#000000',
        textAlign:'center',
        fontSize: responsiveFontSize(4)
      },
      buy_button:{
        backgroundColor:'#ff0000',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        width:"100%",
        height:"100%"
      },
      sell_button:{
        backgroundColor:'#00ff00',
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        width:"100%",
        height:"100%"
      },
  });

  export default styles;