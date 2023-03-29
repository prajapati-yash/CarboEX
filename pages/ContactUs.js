import * as React from "react";
import {
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  TextInput,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import FontAwesome5, {
  solidIcons,
} from "react-native-vector-icons/FontAwesome5";

export default function AboutUs() {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerView}
      >
        <ImageBackground
          style={styles.image1}
          borderRadius={80}
          source={require("../assets/contactus.png")}
        >
          <View>
            <Text style={styles.text}>Connect Tagline</Text>
          </View>
        </ImageBackground>

        <View style={{ alignItems: "center", zIndex: 1 }}>
          <View style={styles.contact_info_view}>
            <View style={styles.contact_info_heading}>
              <Text style={styles.contact_info_heading_text}>
                Contact Information
              </Text>
              <Text style={styles.contact_info_subheading_text}>
                Fill up the form and our team will get back to you within 24
                hours.
              </Text>
            </View>

            <View>
              <View style={styles.view_phone}>
                <View style={styles.image_phone}>
                  <FontAwesome5 name={"phone-alt"} size={16} />
                </View>
                <View>
                  <Text style={styles.text_phone}>Phone</Text>
                </View>
                <View>
                  <View style={styles.text_phone_description}></View>
                </View>
              </View>

              <View style={styles.view_mail}>
                <View style={styles.image_mail}>
                  <FontAwesome5 name={"envelope"} size={16} />
                </View>
                <View>
                  <Text style={styles.text_mail}>Email</Text>
                </View>
                <View>
                  <View style={styles.text_mail_description}></View>
                </View>
              </View>

              <View style={styles.view_address}>
                <View style={styles.image_address}>
                  <FontAwesome5 name={"map-marker-alt"} size={16} />
                </View>
                <View>
                  <Text style={styles.text_address}>Address</Text>
                </View>
                <View>
                  <View style={styles.text_address_description}></View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.view_user_contact}>
            <View style={styles.contact_table}>
              <View style={styles.contact_info_data}>
                <View style={styles.view_contact_heading}>
                  <Text style={styles.text_contact_details}>First Name</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.input_box}
                    placeholder="Enter first name"
                  ></TextInput>
                </View>
              </View>

              <View style={styles.contact_info_data}>
                <View>
                  <Text style={styles.text_contact_details}>Last Name</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.input_box}
                    placeholder="Enter last name"
                  ></TextInput>
                </View>
              </View>

              <View style={styles.contact_info_data}>
                <View>
                  <Text style={styles.text_contact_details}>Email</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.input_box}
                    placeholder="Enter email address"
                  ></TextInput>
                </View>
              </View>

              <View style={styles.contact_info_data}>
                <View>
                  <Text style={styles.text_contact_details}>Phone Number</Text>
                </View>
                <View>
                  <TextInput
                    style={styles.input_box}
                    placeholder="Enter phone number"
                  ></TextInput>
                </View>
              </View>

              <View style={styles.contact_info_data}>
                <View>
                  <Text style={styles.text_contact_details}>Send Message</Text>
                </View>
                <View style={styles.textAreaContainer}>
                  <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Type something"
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                  />
                </View>
              </View>

              <View style={styles.view_button}>
                <Pressable
                  style={styles.send_button}
                  android_ripple={{ color: "#ff0000" }}
                >
                  <Text style={styles.send_button_text}>SEND MESSAGE</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

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
});
