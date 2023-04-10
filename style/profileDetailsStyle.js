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
  view_profile: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "center",
    // alignContent: "center",
  },
  view_logo: {
    margin: "3%",
  },
  profile_logo: {
    height: 100,
    width: 100,
    borderRadius: 65,
  },
  view_profile_content: {
    justifyContent: "center",
    marginLeft: "3%",
  },
  text_company_name: {
    fontSize: responsiveFontSize(2),
    margin: "2%",
  },
  text_email: {
    fontSize: responsiveFontSize(2),
    margin: "2%",
  },
  locate_icon: {
    justifyContent: "center",
    marginLeft: "10%",
  },
  view_icon: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    margin: "3%",
    // marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
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
  profileHeader: {
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
  profileBody: {
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
    borderColor: "black",
    borderWidth: 1,
    marginTop: "3%",
    marginBottom: "3%",
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  credit_input_box: {
    height: responsiveHeight(4),
    width: responsiveWidth(40),
    borderColor: "black",
    borderWidth: 1,
    marginTop: "3%",
    marginBottom: "3%",
    borderRadius: 8,
    paddingHorizontal: 8,
  },

  /* my proposal screen */
  main_view: {
    width: responsiveWidth(100),
    alignItems: "center",
  },
  main_view_text: {
    fontSize: responsiveFontSize(4),
    color: "#000",
    marginTop: "10%",
    marginBottom: "10%",
    marginLeft: "3%",
    marginRight: "3%",
    fontWeight: "bold",
    textAlign: "center",
  },
  view_details: {
    backgroundColor: "#fff",
    width: responsiveWidth(80),
    borderRadius: 50,
    marginBottom: "15%",
  },
  view_proposal_data: {
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "10%",
    marginBottom: "7%",
    // marginTop: "5%",
    // marginBottom: "10%",
    // paddingTop: "5%",

  },
  view_proposal: {
    backgroundColor: "#EFEFEF",
    borderRadius: 30,
    marginBottom: "5%",
    padding: "10%",
  },
  view_proposal_name: {
    marginBottom: "4%",
  },
  text_proposal_name: {
    fontSize: responsiveFontSize(2),
  },
  view_proposal_description: {
    marginBottom: "6%",
  },
  text_proposal_description: {
    fontSize: responsiveFontSize(2),
  },
});

export default styles;
