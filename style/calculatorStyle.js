import { StyleSheet } from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const styles = StyleSheet.create({
    container: {
      flex:1,
   
      paddingLeft:"5%",
      paddingRight:"5%",
      justifyContent: "center",
      alignContent: "center",
      backgroundColor: "lightgrey",
    },
    centered_view: {
      alignItems: "center",
      justifyContent: "center",
    },
    title_text: {
      fontSize: responsiveFontSize(3.5),
      textAlign: "center",
      fontWeight: "bold",
      // marginTop:"30%"
    },
    title_text_view: {
      flex:1,
      marginTop:"50%"
    },

    calculateBox: {
      flex:1,
      width: responsiveWidth(90),
      // height: responsiveHeight(59),
      backgroundColor: "#ffffff",
      marginTop: "15%",
      borderRadius: 36,
      paddingBottom:"8%"
    },
    resultCalculateBox: {
      flex:1,
      width: responsiveWidth(90),
      // height: responsiveHeight(32),
      marginBottom:"20%",
      backgroundColor: "#ffffff",
      marginTop: "15%",
      borderRadius: 36,
      marginBottom:"58%",
      paddingBottom:"10%"
    },
    calculateHeader: {
      flex:1,
      width: responsiveWidth(90),
      // height: responsiveHeight(17),
      textAlign: "center",
    },
    image1: {
      flex:1,
      width: responsiveWidth(90),
      // height: responsiveHeight(17),
      opacity: 1,
    },
    header_text: {
      fontSize: responsiveFontSize(4),
      fontWeight: "bold",
      textAlign: "center",
      marginTop: "11%",
      marginBottom: "11%",
      color: "#ffffff",
    },
    calculateBody: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: "6%",
    },
    input_text: {
      fontSize: responsiveFontSize(2.2),
    },
    input_box: {
      height: responsiveHeight(6),
      width: responsiveWidth(82),
      borderColor: "black",
      borderWidth: 1,
      marginTop: "5%",
      marginBottom: "5%",
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    dropdownStyle: {
      height: responsiveHeight(6),
      width: responsiveWidth(82),
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 8,
      marginTop: "5%",
      marginBottom: "5%",
    },
    calculate_button: {
      height: responsiveHeight(6),
      width: responsiveWidth(82),
      backgroundColor: "#4681f4",
      borderRadius: 8,
      marginTop: "4%",
      justifyContent: "center",
    },
    calculate_button_text: {
      textAlign: "center",
      marginTop: "1%",
      marginBottom: "1%",
      fontWeight:'bold',
      fontSize: responsiveFontSize(2.5),
    },
  });

  export default styles;