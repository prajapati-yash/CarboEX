import * as React from "react";
import { ImageBackground, ScrollView, Text, View, Image } from "react-native";
import styles from "../style/aboutusStyle";
import { BlurView } from "expo-blur";

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
            ></ImageBackground>
          </View>
          <View>
            <BlurView style={{ opacity: 0.6 }}>
              <View style={styles.blur_view}>
                <Text style={styles.blur_view_text}>Lorem Ipsum Dollar</Text>
              </View>
            </BlurView>
          </View>
        </View>

        <View style={styles.centerView}>
          <View style={styles.view_vision}>
            <Text style={styles.text_vision}>Our Vision</Text>
          </View>
          <Image
            source={require("../assets/aboutUsAssets/lines2.png")}
            style={styles.lines2}
          ></Image>
          <View style={styles.view_vision_description}>
            <Text style={styles.text_vision_description}>
              The platform will automate the exchange of carbon credits by using
              smart contracts, reducing transaction cost and providing an
              incentive mechanism for companies to reduce their emissions. If
              carbon credits expire before the allotted time, a penalty must be
              paid before another batch can be purchased.
            </Text>
          </View>
        </View>

        <View style={styles.centerView}>
          <View style={styles.view_mission}>
            <Text style={styles.text_mission}>Our Mission</Text>
          </View>
          <Image
            source={require("../assets/aboutUsAssets/lines1.png")}
            style={styles.lines1}
          ></Image>
          <View style={styles.view_mission_description}>
            <Text style={styles.text_mission_description}>Description</Text>
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

          <View>
            <View style={styles.view_row1}>
              <View style={styles.row1}>
                <Image
                  source={require("../assets/aboutUsAssets/jay.jpg")}
                  style={styles.team_image}
                ></Image>
              </View>
              <View style={styles.row1}>
                <Image
                  source={require("../assets/aboutUsAssets/purvi.jpeg")}
                  style={styles.team_image}
                ></Image>
              </View>
            </View>
            <View style={styles.view_row1}>
              <View style={styles.row1}>
                <Image
                  source={require("../assets/aboutUsAssets/purvik.jpeg")}
                  style={styles.team_image}
                ></Image>
              </View>
              <View style={styles.row1}>
                <Image
                  source={require("../assets/aboutUsAssets/yash.jpg")}
                  style={styles.team_image}
                ></Image>
              </View>
            </View>
            <View style={styles.view_row1}>
              <View style={styles.row1}>
                <Image
                  source={require("../assets/aboutUsAssets/abhishek.jpg")}
                  style={styles.team_image}
                ></Image>
              </View>
              <View style={styles.row1}>
                <Image
                  source={require("../assets/aboutUsAssets/isha.jpeg")}
                  style={styles.team_image}
                ></Image>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}
