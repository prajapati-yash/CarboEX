import * as React from "react";
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
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function ContactUs() {
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState(0);
  // const [address, setAddress] = useState("");

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
                    numberOfLines={10}
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
        </View>
      </ScrollView>
    </View>
  );
}
