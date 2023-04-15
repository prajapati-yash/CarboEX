import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#AEF5DC",
  },
  centered_view: {
    alignItems: "center",
    alignItems: "center",
    marginTop: "5%",
    // marginBottom: "20%",
  },
  header: {
    marginBottom: "10%",
    alignItems: "center",
  },
  header_view_text: {
    fontSize: responsiveFontSize(4),
    fontWeight: "bold",
    // alignItems: "center",
    // textAlign: "center",
    // marginTop: "11%",
    // marginBottom: "11%",
    color: "#000",
  },
  title_text: {
    fontSize: responsiveFontSize(3.5),
    textAlign: "center",
    fontWeight: "bold",
    // marginTop:"30%"
  },
  title_text_view: {
    flex: 1,
    marginTop: "50%",
  },

  mainBox: {
    // flex: 1,
    width: responsiveWidth(90),
    // height: responsiveHeight(59),
    backgroundColor: "#ffffff",
    // marginTop: "15%",
    borderRadius: 36,
    paddingBottom: "8%",
    marginBottom: "8%",
  },
  boxHeader: {
    marginTop: "8%",
    alignItems: "center",
  },
  boxBody: {
    alignItems: "center",
    marginTop: "8%",
  },
  header_text: {
    fontSize: responsiveFontSize(4),
    fontWeight: "bold",
    // alignItems: "center",
    // textAlign: "center",
    // marginTop: "11%",
    // marginBottom: "11%",
    color: "#AEF5DC",
  },
  input_text: {
    fontSize: responsiveFontSize(2.2),
  },
  input_box: {
    paddingLeft: "2%",
    height: responsiveHeight(6),
    width: responsiveWidth(72),
    backgroundColor: "#efefef",
    // borderColor: "black",
    // borderWidth: 1,
    marginTop: "5%",
    marginBottom: "5%",
    borderRadius: 8,
    paddingVertical: "4%",
    // paddingVertical: 8,
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
    fontWeight: "bold",
    fontSize: responsiveFontSize(2.5),
  },
});

export default styles;
