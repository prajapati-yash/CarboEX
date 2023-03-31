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
    width: responsiveWidth(85),
    height: responsiveHeight(40),
    // flexDirection: "column",
    marginTop: 10,
    zIndex: 1,
  },
  text: {
    margin: "10%",
    fontSize: responsiveFontSize(2.7),
    fontWeight: "bold",
    textAlign: "center",
  },
  modal_centered_view: {
    flex: 1,
    alignItems: "center",
  },
  modal_view: {
    height: responsiveHeight(20),
    width: responsiveWidth(70),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    opacity: 0.7,
    margin: "4%",
    // marginTop: 5,
    borderRadius: 35,
  },
  modal_text: {
    fontSize: responsiveFontSize(1.4),
    textAlign:"justify",
    marginLeft: "5%",
    marginRight: "5%",
    alignItems:"center"
  },
  modal_body: {
    height: responsiveHeight(15.6),
    justifyContent: "center",
    alignItems: "center",
  },
  modal_button: {
    width: responsiveWidth(70),
    height: responsiveHeight(5),
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    backgroundColor: "#C4DDFF",
  },
  modal_button_text: {
    textAlign: "center",
    marginTop: 5,
    fontSize: responsiveFontSize(1.7),
    fontWeight: "bold",
  },

  image2: {
    width: responsiveWidth(100),
    height: responsiveHeight(72),
    marginTop: "-10%",
    flexDirection: "column",
  },
  section2_title: {
    alignItems: "center",
    marginTop: 50,
  },
  section2_text: {
    fontSize: responsiveFontSize(3),
    color: "#434242",
    fontWeight: "bold",
  },
  section2_description: {
    margin: 20,
  },
  section2_description_view1: {
    height: responsiveHeight(16),
    width: responsiveWidth(90),
    backgroundColor: "#fff",
    opacity: 0.8,
    borderRadius: 20,
    marginTop: "2%",
    justifyContent: "center",
  },
  section2_descriptionText: {
    textAlign:"justify",
    color: "#000",
    fontSize: responsiveFontSize(1.67),
    margin:"3%",
  },

  image3: {
    width: responsiveWidth(100),
    height: responsiveHeight(85),
    flexDirection: "column",
  },
  section3_title: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  section3_text: {
    fontSize: responsiveFontSize(3),
    color: "#86EBF8",
    fontWeight: "bold",
  },
  section3_view1: {
    width: responsiveWidth(62),
    height: responsiveHeight(22),
    borderRadius: 50,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#86EBF8",
    margin: 10,
  },
  section3_subtitle: {
    fontSize: responsiveFontSize(2.4),
    color: "#fff",
    marginTop: 25,
    fontWeight: 500,
  },
  section3_underline: {
    height: responsiveHeight(0.2),
    width: responsiveWidth(50),
    backgroundColor: "#fff",
    margin: 10,
  },
  section3_subtext: {
    textAlign: "justify",
    color: "#fff",
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  image4: {
    width: responsiveWidth(100),
    height: responsiveHeight(128),
    marginBottom: -20,
    marginTop: "5%",
    flexDirection: "column",
  },
  section4_title: {
    alignItems: "center",
    marginTop: 50,
  },
  section4_text: {
    fontSize: responsiveFontSize(3),
    color: "#fff",
    fontWeight: "bold",
  },
  section4_description: {
    margin: 20,
  },
  section4_descriptionView: {
    marginBottom: 15,
    justifyContent: "center",
  },
  section4_descriptionText: {
    color: "#fff",
    fontSize: responsiveFontSize(1.75),
    margin: 2,
  },
});


export default styles;