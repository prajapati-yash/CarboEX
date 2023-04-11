import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#AFF6FF",
    alignItems: "center",
  },
  centerView: {
    alignItems: "center",
    backgroundColor: "#AFF6FF",
  },
  view_title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: "5%",
  },
  text_title: {
    fontSize: responsiveFontSize(4),
    fontWeight: "bold",
    color: "#fff",
  },

  mainBox: {
    // flex: 1,
    width: responsiveWidth(90),
    // height: responsiveHeight(59),
    backgroundColor: "#ffffff",
    // marginTop: "15%",
    borderRadius: 36,
    paddingBottom: "4%",
    marginVertical: "5%",
  },
  boxHeader: {
    // marginTop: "8%",
    alignItems: "center",
  },
  boxBody: {
    alignItems: "center",
    // marginTop: "8%",
  },
  header_view: {
    flex: 1,
    width: responsiveWidth(90),
    // height: responsiveHeight(20),
    textAlign: "center",
  },
  image1: {
    // flex: 1,
    width: responsiveWidth(90),
    height: responsiveHeight(20),
    opacity: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  view_body: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "6%",
  },
  header_text: {
    fontSize: responsiveFontSize(4),
    fontWeight: "bold",
    // alignItems: "center",
    textAlign: "center",
    // marginTop: "11%",
    // marginBottom: "11%",
    color: "#AEF5DC",
  },
  input_text: {
    fontSize: responsiveFontSize(2),
  },
  input_box: {
    height: responsiveHeight(4),
    width: responsiveWidth(72),
    paddingVertical: "1%",
    borderColor: "black",
    borderWidth: 1,
    marginTop: "3%",
    marginBottom: "3%",
    borderRadius: 8,
    paddingHorizontal: 8,
  },
});

export default styles;
