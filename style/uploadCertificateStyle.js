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
    backgroundColor: "#AFF6FF",
  },
  centered_view: {
    alignItems: "center",
    marginTop: "5%",
    marginBottom: "20%",
  },
  title_text: {
    fontSize: responsiveFontSize(3.5),
    textAlign: "center",
    // fontWeight: "bold",
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
  },
  header: {
    marginBottom: "10%",
    alignItems: "center",
  },
  boxBody: {
    alignItems: "center",
    marginTop: "8%",
  },
  header_text: {
    fontSize: responsiveFontSize(4),
    fontWeight: "bold",
    color: "#000",
  },
  input_text: {
    marginLeft: "2%",
    marginRight: "2%",
    fontSize: responsiveFontSize(2.3),
    // fontWeight: "bold",
  },
  input_box: {
    height: responsiveHeight(6),
    width: responsiveWidth(72),
    borderColor: "black",
    borderWidth: 1,
    marginTop: "5%",
    marginBottom: "5%",
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  document_upload_button: {
    height: responsiveHeight(6),
    width: responsiveWidth(72),
    borderColor: "black",
    borderWidth: 1,
    marginTop: "5%",
    marginBottom: "5%",
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  dropdownStyle: {
    height: responsiveHeight(6),
    width: responsiveWidth(72),
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: "5%",
    marginBottom: "5%",
  },
  textArea: {
    width: responsiveWidth(72),
  },
  textAreaContainer: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 16,
    alignItems: "center",
  },
});

export default styles;
