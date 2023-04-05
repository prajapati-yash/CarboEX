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
  image1: {
    // flex: 1,
    height: responsiveHeight(50),
    width: responsiveWidth(90),
    marginTop: 10,
  },
  image_textView: {
    flex: 1,
    justifyContent: "center",
    margin: "10%",
    // marginTop: "30%",
    // marginBottom: "30%",
  },
  text: {
    // margin: "10%",
    fontSize: responsiveFontSize(3),
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  contact_info_view: {
    // height: responsiveHeight(40),
    width: responsiveWidth(80),
    backgroundColor: "#16172E",
    borderRadius: 50,
    marginTop: "6%",
    padding: "4%",
  },
  contact_info_heading: {
    flex: 1,
    margin: "2%",
  },
  contact_info_heading_text: {
    color: "#fff",
    fontSize: responsiveFontSize(2.5),
    marginTop: "6%",
    marginBottom: "3%",
    fontWeight: "bold",
  },
  contact_info_subheading_text: {
    color: "#fff",
    fontSize: responsiveFontSize(1.6),
    textAlign: "auto",
  },
  view_phone: {
    flexDirection: "row",
    alignItems: "center",
  },
  image_phone: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    margin: "3%",
    // marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text_phone: {
    color: "#fff",
    fontSize: responsiveFontSize(2),
    marginLeft: "5%",
  },
  text_phone_description: {
    height: responsiveHeight(3),
    width: responsiveWidth(25),
    backgroundColor: "#fff",
    borderRadius: 5,
    // alignItems: "center",
    justifyContent: "center",
  },
  text_phone_descriptionText: {
    color: "#16172E",
    fontSize: responsiveFontSize(1.5),
    marginLeft: "3%",
  },

  view_mail: {
    flexDirection: "row",
    alignItems: "center",
  },
  image_mail: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    margin: "3%",
    // marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text_mail: {
    color: "#fff",
    fontSize: responsiveFontSize(2),
    marginLeft: "5%",
  },
  text_mail_description: {
    height: responsiveHeight(3),
    width: responsiveWidth(35),
    backgroundColor: "#fff",
    borderRadius: 5,
  },

  view_address: {
    flexDirection: "row",
    alignItems: "center",
  },
  image_address: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    margin: "3%",
    // marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text_address: {
    color: "#fff",
    fontSize: responsiveFontSize(2),
    marginLeft: "5%",
    // textAlign: "justify",
  },
  text_address_description: {
    height: responsiveHeight(3),
    width: responsiveWidth(35),
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  view_user_contact: {
    flex: 1,
    // height: responsiveHeight(95),
    width: responsiveWidth(100),
    backgroundColor: "#B5DF78A1",
    marginTop: "-18%",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    marginBottom: "3%",
    padding: "10%",
  },

  contact_table: {
    // height: responsiveHeight(80),
    // width: responsiveWidth(100),
    marginRight: "15%",
    marginLeft: "15%",
    marginTop: "20%",
    alignItems: "center",
  },
  // view_contact_heading: {
  //   flex: 1,
  // },
  contact_details: {
    fontSize: responsiveFontSize(2),
  },
  input_box: {
    // height: responsiveHeight(5),
    width: responsiveWidth(60),
    borderColor: "black",
    borderWidth: 1,
    marginTop: "3%",
    marginBottom: "4.5%",
    borderRadius: 8,
    paddingHorizontal: "1.5%",
  },
  textAreaContainer: {
    borderColor: "black",
    borderWidth: 1,
    // padding: 5,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 16,
    alignItems: "center",
  },
  textArea: {
    // height: responsiveHeight(10),
    width: responsiveWidth(60),
  },

  view_button: {
    alignItems: "center",
    flex: 1,
  },
  send_button: {
    flex: 1,
    // height: responsiveHeight(5),
    width: responsiveWidth(65),
    backgroundColor: "#16172E",
    borderRadius: 10,
    marginTop: "5%",
    // marginBottom: "3%",
  },

  send_button_text: {
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginTop: "3%",
    marginBottom: "3%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
