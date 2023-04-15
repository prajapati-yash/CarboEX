import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C0E28E",
    alignItems: "center",
  },
  main_view: {
    width: responsiveWidth(100),
    alignItems: "center",
  },
  main_view_text: {
    fontSize: responsiveFontSize(4),
    color: "#fff",
    marginTop: "10%",
    marginBottom: "10%",
    marginLeft: "3%",
    marginRight: "3%",
    fontWeight: "bold",
    textAlign: "center",
  },
  view_details: {
    margin: "5%",
    width: responsiveWidth(80),
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    elevation: 5,
  },
  view_data1_row1: {
    marginTop: "12%",
    marginBottom: "4%",
  },
  view_data2_row1: {
    marginBottom: "4%",
  },
  text_data: {
    fontSize: responsiveFontSize(2),
    textAlign: "center",
  },
  input_box: {
    // height: responsiveHeight(5),
    width: responsiveWidth(60),
    borderColor: "black",
    borderWidth: 1,
    marginTop: "5%",
    marginBottom: "5%",
    borderRadius: 8,
    paddingHorizontal: "1.5%",
    paddingTop: "1%",
    paddingBottom: "1%",
  },
  view_button: {
    // flexDirection: "row",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  }
});

export default styles;
