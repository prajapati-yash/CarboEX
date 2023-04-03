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
    height: responsiveHeight(50),
    width: responsiveWidth(90),
    marginTop: 10,
  },
  text: {
    margin: "10%",
    fontSize: responsiveFontSize(2.7),
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  contact_info_view: {
    height: responsiveHeight(40),
    width: responsiveWidth(80),
    backgroundColor: "#16172E",
    borderRadius: 50,
    marginTop: 20,
  },
  contact_info_heading: {
    margin: 20,
  },
  contact_info_heading_text: {
    color: "#fff",
    fontSize: responsiveFontSize(2.5),
    marginTop: "6%",
    marginBottom: "3%",
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
    margin: 10,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text_phone: {
    color: "#fff",
    fontSize: responsiveFontSize(2),
    marginLeft: "10%",
  },
  text_phone_description: {
    height: responsiveHeight(3),
    width: responsiveWidth(35),
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
    margin: 10,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text_mail: {
    color: "#fff",
    fontSize: responsiveFontSize(2),
    marginLeft: "10%",
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
    margin: 10,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text_address: {
    color: "#fff",
    fontSize: responsiveFontSize(2),
    marginLeft: "10%",
  },
  text_address_description: {
    height: responsiveHeight(3),
    width: responsiveWidth(35),
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  view_user_contact: {
    height: responsiveHeight(95),
    width: responsiveWidth(100),
    backgroundColor: "#B5DF78A1",
    marginTop: "-18%",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    marginBottom: 10,
  },

  contact_table: {
    // height: responsiveHeight(80),
    // width: responsiveWidth(100),
    marginRight: 50,
    marginLeft: 50,
    marginTop: "30%",
    alignItems: "center",
  },
  contact_details: {
    fontSize: responsiveFontSize(2),
  },
  input_box: {
    height: responsiveHeight(5),
    width: responsiveWidth(60),
    borderColor: "black",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 16,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  textAreaContainer: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 16,
    alignItems: "center",
  },
  textArea: {
    height: responsiveHeight(10),
    width: responsiveWidth(60),
    justifyContent: "flex-start",
  },

  view_button: {
    alignItems: "center",
  },
  send_button: {
    height: responsiveHeight(5),
    width: responsiveWidth(75),
    backgroundColor: "#16172E",
    borderRadius: 10,
    marginTop: 20,
  },

  send_button_text: {
    textAlign: "center",
    marginTop: 6,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
