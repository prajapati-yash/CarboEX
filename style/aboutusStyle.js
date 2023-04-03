import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  centerView: {
    alignItems: "center",
  },
  image1: {
    width: responsiveWidth(85),
    height: responsiveHeight(40),
    marginTop: "2%",
    position: "relative",
    zIndex: 1,
  },
  image_view: {
    alignItems: "center",
    justifyContent: "center",
    // flex: 1,
  },
  blurredContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.5)", // background color with opacity
    borderRadius: 10,
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  lines2: {
    height: responsiveHeight(20),
    width: responsiveWidth(100),
    marginTop: "-25%",
  },
  view_vision: {
    width: responsiveWidth(40),
    height: responsiveHeight(8),
    backgroundColor: "#86EBF8",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    elevation: 10,
    marginTop: "10%",
  },
  text_vision: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: "bold",
    color: "#fff",
  },
  view_vision_description: {
    // flex: 1,
    width: responsiveWidth(100),
    height: responsiveHeight(40),
    backgroundColor: "#86EBF8",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    alignItems: "center",
    marginTop: "-21%",
    zIndex: -1,
  },
  text_vision_description: {
    marginLeft: "3%",
    marginRight: "2%",
    textAlign: "justify",
    marginTop: "20%",
    marginBottom: "15%",
    fontSize: responsiveFontSize(2),
  },

  lines1: {
    height: responsiveHeight(20),
    width: responsiveWidth(100),
    marginTop: "-25%",
  },
  view_mission: {
    // flex: 1,
    width: responsiveWidth(40),
    height: responsiveHeight(8),
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    elevation: 10,
    marginTop: "10%",
  },
  text_mission: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: "bold",
    color: "#86EBF8",
  },
  view_mission_description: {
    width: responsiveWidth(100),
    // height: responsiveHeight(40),
    backgroundColor: "#fff",
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    alignItems: "center",
    elevation: 5,
    marginTop: "-21%",
    zIndex: -1,
  },
  text_mission_description: {
    marginTop: "20%",
    fontSize: responsiveFontSize(2),
  },

  image2: {
    width: responsiveWidth(100),
    height: responsiveHeight(90),
    marginTop: "5%",
  },

  team_title: {
    alignItems: "center",
    margin: "8%",
  },
  team_text: {
    fontSize: responsiveFontSize(3.2),
    color: "#fff",
    fontWeight: "bold",
  },

  view_row1: {
    flexDirection: "row",
    justifyContent: "center",
    // margin: "8%",
  },
  row1: {
    height: 130,
    width: 130,
    borderRadius: 65,
    backgroundColor: "#fff",
    margin: "5%",
  },

  team_image: {
    height: 130,
    width: 130,
    borderRadius: 65,
  },
  blur_view: {
    // flex: 1,
    marginTop: "-48%",
    width: responsiveWidth(100),
    zIndex: 2,
    backgroundColor: "#CDE990",
    alignItems: "center",
  },
  blur_view_text: {
    fontSize: responsiveFontSize(5),
  },
});

export default styles;
