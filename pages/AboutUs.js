import * as React from "react";
import { ImageBackground, ScrollView, Text, View, Image } from "react-native";
import styles from "../style/aboutusStyle";
import { BlurView } from "expo-blur";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerView}
      >
        <View>
          <View style={{ alignItems: "center" }}>
            <ImageBackground
              style={styles.image1}
              borderRadius={50}
              source={require("../assets/aboutUsAssets/BG1.png")}
              // blurRadius={0}
            >
              {/* <BlurView style={{ opacity: 0.6 }}> */}
              {/* <View style={styles.blur_view}> */}
              <View style={{ justifyContent: "center", flex: 1, margin: "7%" }}>
                <Text style={styles.blur_view_text}>
                  We've made this project for a cause with a dream in mind. Know
                  our vision and mission statements.
                </Text>
              </View>
              {/* </View> */}
              {/* </BlurView> */}
            </ImageBackground>
          </View>
        </View>

        <View style={styles.centerView}>
          <View style={styles.view_vision}>
            <View style={{ flex: 1 }}>
              <Text style={styles.text_vision}>Our Vision</Text>
            </View>
          </View>
          <Image
            source={require("../assets/aboutUsAssets/lines2.png")}
            style={styles.lines2}
          ></Image>

          <View style={styles.view_vision_description}>
            <View style={{ flex: 1 }}>
              <Text
                style={[styles.text_vision_description, { marginTop: "20%" }]}
              >
                Our vision at CarboEx is to build a sustainable future by making
                businesses and governments accountable for their carbon
                footprint.
              </Text>
              <Text
                style={[
                  styles.text_vision_description,
                  { marginBottom: "15%" },
                ]}
              >
                Our ultimate goal is to achieve net-zero emissions, where our
                platform plays a key role in reducing the carbon footprint of
                society. We strive to be a leader in the carbon credit trading
                industry, promoting social responsibility and sustainability to
                drive a positive impact on the planet for future generations.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.centerView}>
          <View style={styles.view_mission}>
            <View style={{ flex: 1 }}>
              <Text style={styles.text_mission}>Our Mission</Text>
            </View>
          </View>
          <Image
            source={require("../assets/aboutUsAssets/lines1.png")}
            style={styles.lines1}
          ></Image>
          <View style={styles.view_mission_description}>
            <View style={{ flex: 1 }}>
              <Text
                style={[styles.text_mission_description, { marginTop: "20%" }]}
              >
                At CarboEx, our mission is to provide a secure and transparent
                carbon credit trading platform for buyers and sellers,
                underpinned by blockchain technology and Renewable Energy (RE)
                certificates verified by our Decentralized Autonomous
                Organization (DAO).
              </Text>
              <Text
                style={[
                  styles.text_mission_description,
                  { paddingBottom: "11%" },
                ]}
              >
                Our platform uses our own tokens, which are generated and used
                for carbon credit trading, to increase efficiency and
                accessibility while reducing costs.
              </Text>
            </View>
          </View>
        </View>

        <ImageBackground
          style={styles.image2}
          borderTopLeftRadius={50}
          borderTopRightRadius={50}
          source={require("../assets/aboutUsAssets/BG2.png")}
        >
          <View style={styles.team_title}>
            <Text style={styles.team_text}>Our Team</Text>
          </View>

          <View style={{ flex: 1, marginBottom: "10%" }}>
            <View style={styles.view_row1}>
              <View style={styles.row1_left}>
                <View style={{ flex: 1 }}>
                  <Image
                    source={require("../assets/aboutUsAssets/jay.png")}
                    style={styles.team_image}
                  ></Image>
                  <View style={[styles.view_image_subtext]}>
                    {/* <View style={{ flex: 1 }}> */}
                    <Text
                      style={[styles.text_image_subtext, { marginTop: "3%", marginBottom: "1%", fontWeight: 600, fontSize: responsiveFontSize(1.7) }]}
                    >
                      Jay Patel
                    </Text>
                    {/* </View> */}
                    <Text
                      style={[
                        styles.text_image_subtext,
                        { marginBottom: "4%" },
                      ]}
                    >
                      Backend Developer
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.row1_right}>
                <Image
                  source={require("../assets/aboutUsAssets/purvi.jpeg")}
                  style={styles.team_image}
                ></Image>
                <View style={styles.view_image_subtext}>
                  <Text
                    style={[styles.text_image_subtext, { marginTop: "3%", marginBottom: "1%", fontWeight: 600, fontSize: responsiveFontSize(1.7) }]}
                  >
                    Purvi Vaghela
                  </Text>
                  <Text
                    style={[styles.text_image_subtext, { marginBottom: "4%" }]}
                  >
                    Backend Developer
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.view_row1}>
              <View style={styles.row1_left}>
                <Image
                  source={require("../assets/aboutUsAssets/purvik.jpeg")}
                  style={styles.team_image}
                ></Image>
                <View style={styles.view_image_subtext}>
                  <Text
                    style={[styles.text_image_subtext, { marginTop: "3%", marginBottom: "1%", fontWeight: 600, fontSize: responsiveFontSize(1.7) }]}
                  >
                    Purvik Panchal
                  </Text>
                  <Text
                    style={[styles.text_image_subtext, { marginBottom: "4%" }]}
                  >
                    Web Developer
                  </Text>
                </View>
              </View>
              <View style={styles.row1_right}>
                <Image
                  source={require("../assets/aboutUsAssets/yash.jpg")}
                  style={styles.team_image}
                ></Image>
                <View style={styles.view_image_subtext}>
                  <Text
                    style={[styles.text_image_subtext, { marginTop: "3%", marginBottom: "1%", fontWeight: 600, fontSize: responsiveFontSize(1.7) }]}
                  >
                    Yash Prajapati
                  </Text>
                  <Text
                    style={[styles.text_image_subtext, { marginBottom: "4%" }]}
                  >
                    Web Developer
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.view_row1}>
              <View style={styles.row1_left}>
                <Image
                  source={require("../assets/aboutUsAssets/abhishek.png")}
                  style={styles.team_image}
                ></Image>
                <View style={styles.view_image_subtext}>
                  <Text
                    style={[styles.text_image_subtext, { marginTop: "3%", marginBottom: "1%", fontWeight: 600, fontSize: responsiveFontSize(1.7) }]}
                  >
                    Abhishek Rajput
                  </Text>
                  <Text
                    style={[styles.text_image_subtext, { marginBottom: "4%" }]}
                  >
                    App Developer
                  </Text>
                </View>
              </View>

              <View style={[styles.row1_right]}>
                <View>
                  <Image
                    source={require("../assets/aboutUsAssets/isha.jpeg")}
                    style={styles.team_image}
                  ></Image>
                </View>

                <View style={[styles.view_image_subtext]}>
                  <Text
                    style={[styles.text_image_subtext, { marginTop: "3%", marginBottom: "1%", fontWeight: 600, fontSize: responsiveFontSize(1.7) }]}
                  >
                    Isha Mistry
                  </Text>
                  <Text
                    style={[styles.text_image_subtext, { marginBottom: "4%" }]}
                  >
                    App Developer
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}
