import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AEF5DC",
    alignItems: "center",
  },
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
    margin: "10%",
    // marginTop: "5%",
    // marginBottom: "10%",

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
