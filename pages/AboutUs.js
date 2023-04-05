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
            >
              {/* <BlurView style={{ opacity: 0.6 }}> */}
              {/* <View style={styles.blur_view}> */}
              <View style={{justifyContent: "center", flex: 1, margin: "7%"}}>
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
                Our vision is to create a sustainable future for our planet by
                harnessing the power of blockchain technology to reduce carbon
                emissions. We believe that a healthy planet is a foundation for
                a healthy society.
              </Text>
              <Text style={styles.text_vision_description}>
                Our platform aims to reduce the carbon footprint through
                blockchain technology by providing a marketplace for CarboEx
                token buyers and sellers. Our vision includes:
              </Text>
              <Text style={styles.text_vision_description}>
                • Creating a sustainable future for the planet.{" "}
              </Text>
              <Text style={styles.text_vision_description}>
                • Leveraging the power of blockchain technology to reduce carbon
                emissions.
              </Text>
              <Text style={styles.text_vision_description}>
                • Connect buyers and sellers of CarboEx tokens to reduce carbon
                footprint globally.
              </Text>
              <Text style={styles.text_vision_description}>
                • Promoting sustainability, transparency, and innovation.
              </Text>
              <Text style={styles.text_vision_description}>
                • Providing a reliable, scalable, and transparent marketplace
                for carbon credits.
              </Text>
              <Text
                style={[
                  styles.text_vision_description,
                  { marginBottom: "15%" },
                ]}
              >
                • Building a brighter, greener future for generations to come.
              </Text>
            </View>
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
            <View style={{ flex: 1 }}>
              <Text style={styles.text_mission_description}>
                At CarboEx, our mission is to facilitate the reduction of carbon
                emissions through market mechanisms. By creating a reliable and
                accessible platform for carbon credit trading, we can contribute
                to global efforts to mitigate climate change. Our platform
                enables entities to participate in carbon trading safely and
                openly. It is a chance for individuals and businesses to take
                meaningful action towards a sustainable future. We are committed
                to promoting transparency and integrity in the carbon trading
                market. We achieve this by utilizing blockchain technology to
                create an unchangeable and tamper-proof record of transactions.
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
              <View style={[styles.row1, {marginBottom: "10%"}]}>
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
