import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      padding: 20,
      justifyContent: "center",
      alignContent: "center",
      backgroundColor: "lightgrey",
    },
    centered_view: {
      alignItems: "center",
      justifyContent: "center",
    },
    title_text: {
      fontSize: 22,
      textAlign: "center",
      fontWeight: "bold",
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: "absolute",
      backgroundColor: "white",
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    calculateBox: {
      width: 340,
      height: 400,
      backgroundColor: "#ffffff",
      marginTop: 50,
      borderRadius: 36,
    },
    resultCalculateBox: {
      width: 340,
      height: 230,
      backgroundColor: "#ffffff",
      marginTop: 50,
      borderRadius: 36,
    },
    calculateHeader: {
      width: 340,
      height: 120,
      textAlign: "center",
    },
    image1: {
      width: 340,
      height: 120,
      opacity: 1,
    },
    header_text: {
      fontSize: 32,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 35,
      color: "#ffffff",
    },
    calculateBody: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
    input_text: {
      fontSize: 17,
    },
    input_box: {
      height: 40,
      width: 300,
      borderColor: "black",
      borderWidth: 1,
      marginTop: 10,
      marginBottom: 16,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    dropdownStyle: {
      height: 40,
      width: 300,
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 8,
      marginTop: 10,
      marginBottom: 16,
    },
    calculate_button: {
      height: 40,
      width: 300,
      backgroundColor: "#4681f4",
      // borderRadius: 8,
      marginTop: 15,
    },
    calculate_button_text: {
      textAlign: "center",
      marginTop: 6,
      fontSize: 18,
    },
  });

  export default styles;