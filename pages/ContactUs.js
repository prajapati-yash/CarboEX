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
import * as MailComposer from "expo-mail-composer";
import Mailer from "react-native-mail";
import MailCore from "react-native-mailcore";
import axios from "axios";

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
  const [inputData, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSendMessage = () => {
    const { fname, lname, email, phone, address } = inputData;

    const messageBody = `FirstName: ${fname}\nLastName: ${lname}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\n`;

    axios.post('http://localhost:5001/send-email', {
      messageBody: messageBody,
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });

    // MailComposer.composeAsync({
    //   recipients: ["mistryisha22@gmail.com"],
    //   subject: "Form Submission",
    //   body: messageBody,
    // });

    /* if (Mailer) {
      Mailer.mail(
        {
          subject: "Form Submission",
          sender: email,
          recipients: ["mistryisha22@gmail.com"],
          // ccRecipients: ['ccrecipient1@example.com'],
          // bccRecipients: ['bccrecipient1@example.com'],
          body: messageBody,
          isHTML: true,
        },
        (error, event) => {
          if (error) {
            console.log("Error sending email:", error);
          } else {
            console.log("Email sent successfully!");
          }
        }
      );
    } else {
      console.log("error: mailer object is null");
    } */

    /* const mailOptions = {
      mail: {
        from: email, // Replace with the sender email
        to: 'ishamistry.lamprostech@gmail.com', // Replace with the recipient email
        subject: 'Form Submission',
        body: messageBody,
        isHTML: false,
        attachments: [],
      },
      smtp: {
        host: 'smtp.gmail.com', // Replace with your SMTP server host
        port: 465, // Replace with your SMTP server port
        ssl: true,
        username: 'ishamistry.lamprostech@gmail.com', // Replace with your SMTP server username
        password: 'xwdsrdqxqeedljmt', // Replace with your SMTP server password
      },
    };

    MailCore.sendMail(mailOptions, (error, event) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent successfully');
      }
    }); */


  };

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
                  <FontAwesome5
                    name={"phone-alt"}
                    size={16}
                    onPress={() => handleCallPress("7621911088")}
                  />
                </View>
                <View>
                  <Text
                    style={styles.text_phone}
                    onPress={() => handleCallPress("7621911088")}
                  >
                    Phone
                  </Text>
                </View>
                <View>
                  <View style={styles.text_phone_description}>
                    <Text style={styles.text_phone_descriptionText}>
                      9924915518
                    </Text>
                  </View>
                </View>
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
                <View>
                  <Text
                    style={styles.text_mail}
                    onPress={() =>
                      handleEmailPress(
                        "mistryisha22@gmail.com",
                        "Support Request"
                      )
                    }
                  >
                    Email
                  </Text>
                </View>
                <View>
                  <View style={styles.text_mail_description}></View>
                  {/* <Text style={styles.text_mail_descriptionText}>9924915518</Text> */}
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
                <View>
                  <Text
                    style={styles.text_address}
                    onPress={() => handleLocationClick()}
                  >
                    Address
                  </Text>
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
                    onChangeText={(text) =>
                      setInputData({ ...inputData, fname: text })
                    }
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
                    onChangeText={(text) =>
                      setInputData({ ...inputData, lname: text })
                    }
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
                    onChangeText={(text) =>
                      setInputData({ ...inputData, email: text })
                    }
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
                    onChangeText={(text) =>
                      setInputData({ ...inputData, phone: text })
                    }
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
                    onChangeText={(text) =>
                      setInputData({ ...inputData, address: text })
                    }
                  />
                </View>
              </View>

              <View style={styles.view_button}>
                <Pressable
                  style={styles.send_button}
                  android_ripple={{ color: "#ff0000" }}
                  onPress={handleSendMessage}
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
