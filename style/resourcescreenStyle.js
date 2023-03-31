import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
  } from "react-native-responsive-dimensions";
  import { StyleSheet } from "react-native";
 

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
      },
      centerView: {
        alignItems: "center",
      },
      section1_image: {
        width: responsiveWidth(85),
        height: responsiveHeight(30),
        marginTop: 10,
        resizeMode:"cover",
        zIndex: 4,
      },
      section1_text:{
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "18%",
        fontSize: responsiveFontSize(5),
        color:"#ffffff",
        textAlign: "center",
        textAlignVertical:"center"
      },
      section2_image: {
        width: responsiveWidth(100),
        height: responsiveHeight(50),
        marginTop: "-10%",
        flexDirection: "column",
        resizeMode:"cover",
        opacity:0.7,
        zIndex:3
      },
      section2_title: {
        alignItems: "center",
        marginTop: "18%",
        marginLeft:"20%",
        marginRight:"20%"
      },
      section2_text: {
        fontSize: responsiveFontSize(2.5),
        color: "#000",
        fontWeight:"bold",
        textAlign:"center"
      },
      section2_modal_center: {
        flex: 1,
        alignItems: "center",
      },
      section2_modal_view: {
        height: responsiveHeight(20),
        width: responsiveWidth(80),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        margin: "6%",
        borderRadius: 35,
      },
      section3_image: {
        width: responsiveWidth(100),
        height: responsiveHeight(55),
        marginTop: "-25%",
        flexDirection: "column",
        resizeMode:"cover",
        opacity:0.7
      },
      section3_title: {
        alignItems: "center",
        marginTop: "32%",
        marginLeft:"18%",
        marginRight:"18%"
      },
      section3_text: {
        fontSize: responsiveFontSize(2.1),
        color: "#000",
        fontWeight:"bold",
        textAlign:"center"
      },
      section3_modal_center: {
        flex: 1,
        alignItems: "center",
      },
      section3_modal_view: {
        height: responsiveHeight(20),
        width: responsiveWidth(80),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DDDDDD",
        margin: "5%",
        borderRadius: 35,
      },
      section4_image: {
        width: responsiveWidth(100),
        height: responsiveHeight(47),
        marginTop: "-2%",
        flexDirection: "column",
        resizeMode:"cover",
        opacity:0.7,
        zIndex:1
      },
      section4_title: {
        alignItems: "center",
        marginTop: "7%",
        marginLeft:"18%",
        marginRight:"18%"
      },
      section4_text: {
        fontSize: responsiveFontSize(3),
        color: "#000",
        fontWeight:"bold",
        textAlign:"center"
      },
      section4_description:{
        marginTop:"10%"
      },
      section4_description_text: {
        fontSize: responsiveFontSize(2),
        color: "#000",
        fontWeight:"bold",
        textAlign:"center",
        marginLeft:"8%",
        marginRight:"8%"
      },
      section4_button_view:{
        alignItems:"center",
        marginTop:"10%",
        borderRadius:35,
        overflow:"hidden"
      },
      section4_description_button: {
        width: responsiveWidth(40),
        height: responsiveHeight(6),
        borderRadius:35,
        backgroundColor: "#19376D",
      },
      section4_description_button_text: {
        textAlign: "center",
        marginTop: "6%",
        fontSize: responsiveFontSize(2.2),
        fontWeight: "bold",
        color:"#fff"
      },
      section5_image: {
        width: responsiveWidth(100),
        height: responsiveHeight(30),
        marginTop: "-18%",
        flexDirection: "column",
        resizeMode:"cover",
        marginBottom: -20,
        zIndex:2
      },
      section5_title: {
        alignItems: "center",
        marginTop: "18%",
      },
      section5_inner_image:{
        width: responsiveWidth(40),
        height: responsiveHeight(10),
      },
      section5_button_text:{
        marginTop:"-4%",
        marginLeft:"-18%",
        fontWeight:"bold"
      }
  });

  export default styles;