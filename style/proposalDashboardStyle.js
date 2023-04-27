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
    marginBottom: "5%",
    marginLeft: "3%",
    marginRight: "3%",
    fontWeight: "bold",
    textAlign: "center",
  },
  view_proposal_data: {
    margin: "10%",
    // marginTop: "5%",
    // marginBottom: "10%",
  },
  view_proposal: {
    width: responsiveWidth(90),
    backgroundColor: "#fff",
    borderRadius: 30,
    marginBottom: "5%",
    padding: "10%",
  },
  view_proposal_name: {
    marginBottom: "4%",
  },
  text_proposal_name: {
    fontSize: responsiveFontSize(2),
    fontWeight: "bold",
  },
  view_proposal_name_value: {
    backgroundColor: "#EFEFEF",
    marginTop: "2%",
    borderRadius: 10,
    flex:1,
  },
  text_proposal_name_value: {
    // fontSize: responsiveFontSize(1.7),
    paddingVertical: "3%",
    paddingLeft: "3%",
  },
  view_proposal_description: {
    marginBottom: "6%",
  },
  text_proposal_description: {
    fontSize: responsiveFontSize(2),
    fontWeight: "bold",
  },
});

export default styles;
