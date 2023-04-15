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
import { proc } from "react-native-reanimated";

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
  const phone_number = process.env.PHONE_NUMBER;
  const email = process.env.EMAIL;
  const [inputData, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSendMessage = async () => {
    const { fname, lname, email, phone, message } = inputData;

    const messageBody = {
      fname: `${fname}`,
      lname: `${lname}`,
      email: `${email}`,
      phone: `${phone}`,
      message: `${message}`,
    };
    try{
    let response = await fetch("http://process.env.IP_ADDR:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(messageBody),
    });
    // console.log(response.json());
    // alert(response.json().status);
    alert(response);
    // console.log(response);
  }
    catch(err){
      console.log("Error: ", err)
    }
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
                    onPress={() => handleCallPress(phone_number)}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={styles.text_phone}
                    onPress={() => handleCallPress(phone_number)}
                  >
                    +91 9999998880
                  </Text>
                </View>
                <View></View>
              </View>

              <View style={styles.view_mail}>
                <View style={styles.image_mail}>
                  <FontAwesome5
                    name={"envelope"}
                    size={16}
                    onPress={() => handleEmailPress(email, "Support Request")}
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text
                    style={styles.text_mail}
                    onPress={() => handleEmailPress(email, "Support Request")}
                  >
                    lamprostech@gmail.com
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
                <Text>First Name</Text>
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
                <Text>Last Name</Text>
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
                <Text>Email</Text>
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
                <Text>Phone Number</Text>
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
                <Text>Send Message</Text>
              </View>
              <View style={styles.textAreaContainer}>
                <TextInput
                  style={styles.textArea}
                  underlineColorAndroid="transparent"
                  placeholder="Type something"
                  placeholderTextColor="grey"
                  numberOfLines={6}
                  multiline={true}
                  onChangeText={(text) =>
                    setInputData({ ...inputData, message: text })
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
      </ScrollView>
    </View>
  );
}
