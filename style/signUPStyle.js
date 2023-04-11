import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
  },
  image1: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    // flexDirection: "column",
    // marginTop: "1%",
    // zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerView: {
    backgroundColor: "#fff",
    width: responsiveWidth(70),
    height: responsiveHeight(8),
    borderRadius: 20,
    marginTop: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerViewText: {
    fontSize: responsiveFontSize(4),
    fontWeight: 900,
  },
  image2: {
    marginTop: "10%",
    marginBottom: "8%",
    flex: 1,
    width: responsiveWidth(80),
    // height: responsiveHeight(50),
    alignItems: "center",
  },
  bodyView: {
    flex: 1,
    marginTop: "5%",
  },
  input_box: {
    height: responsiveHeight(6),
    width: responsiveWidth(70),
    borderColor: "white",
    borderWidth: 1,
    marginTop: "5%",
    marginBottom: "5%",
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  dropdownStyle: {
    height: responsiveHeight(6),
    width: responsiveWidth(70),
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: "5%",
    marginBottom: "5%",
  },
});

export default styles;
