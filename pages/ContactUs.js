import React, { useState } from "react";
import styles from "../style/contactusStyle";
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
  Linking,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const handleCallPress = (phoneNumber) => {
  const url = `tel:${phoneNumber}`;
  Linking.openURL(url);
};

const handleEmailPress = (email, subject) => {
  const url = `mailto:${email}?subject=${subject}`;
  Linking.openURL(url);
};

const handleLocationClick = () => {
  const url = `https://www.google.com/maps/place/Lampros+Tech+-+Blockchain+Development+Company/@23.0356768,72.5040929,17z/data=!3m1!4b1!4m6!3m5!1s0x395e8519cbd57c41:0x82aab98ef368655e!8m2!3d23.0356768!4d72.5040929!16s%2Fg%2F11fq4tp_xg`;
  Linking.openURL(url);
};

export default function ContactUs() {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerView}
      >
        <ImageBackground
          style={styles.image1}
          borderRadius={80}
          source={require("../assets/contactUsAssets/contactus.png")}
        >
          <View style={styles.image_textView}>
            <Text style={styles.text}>
              To know more about our project or participate in Carbon trading,
              fill out the form and send us your query!
            </Text>
          </View>
        </ImageBackground>

        <View style={{ alignItems: "center", zIndex: 1, flex: 1 }}>
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

            <View style={{ flex: 1 }}>
              <View style={styles.view_phone}>
                <View style={styles.image_phone}>
                  <FontAwesome5
                    name={"phone-alt"}
                    size={16}
                    onPress={() => handleCallPress("7621911088")}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={styles.text_phone}
                    onPress={() => handleCallPress("7621911088")}
                  >
                    +91 9924915518
                  </Text>
                </View>
                <View></View>
              </View>

              <View style={styles.view_mail}>
                <View style={styles.image_mail}>
                  <FontAwesome5
                    name={"envelope"}
                    size={16}
                    onPress={() =>
                      handleEmailPress(
                        "mistryisha22@gmail.com",
                        "Support Request"
                      )
                    }
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={styles.text_mail}
                    onPress={() =>
                      handleEmailPress(
                        "mistryisha22@gmail.com",
                        "Support Request"
                      )
                    }
                  >
                    purvik@gmail.com
                  </Text>
                </View>
              </View>

              <View style={styles.view_address}>
                <View style={styles.image_address}>
                  <FontAwesome5
                    name={"map-marker-alt"}
                    size={16}
                    onPress={() => handleLocationClick()}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={styles.text_address}
                    onPress={() => handleLocationClick()}
                  >
                    Shilp Epitome, 1211, behind Rajpath Rangoli Road, Bodakdev,
                    Ahmedabad, Gujarat 380054
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

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
                  // onChangeText={(value) => setFname(value)}
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
                  // onChangeText={(value) => setLname(value)}
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
                  // onChangeText={(value) => setEmail(value)}
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
                  // onChangeText={(value) => setPhone(value)}
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
                  numberOfLines={6}
                  multiline={true}
                  // onChangeText={(value) => setAddress(value)}
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
      </ScrollView>
    </View>
  );
}
