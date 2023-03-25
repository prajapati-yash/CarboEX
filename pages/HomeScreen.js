import * as React from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  navigation
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import Calculator from "./Calculator";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerView}
      >
        <ImageBackground
          style={styles.image1}
          borderRadius={50}
          source={require("../assets/BG1.png")}
        >
          <View>
            <Text style={styles.text}>
              Control Carbon emission with CarboEx!
            </Text>
          </View>

          <View transparent animationType="fade" hardwareAccelerated>
            <View style={styles.modal_centered_view}>
              <View style={styles.modal_view}>
                <View style={styles.modal_body}>
                  <Text style={styles.modal_text}>
                    The Carbon Trading Platform using Blockchain aims to
                    facilitate carbon credit trading by creating an unchangeable
                    and tamper-proof record of transactions, automating the
                    exchange of carbon credits, and supporting sustainable
                    development.
                  </Text>
                </View>

                <View
                  style={{
                    borderBottomRightRadius: 35,
                    borderBottomLeftRadius: 35,
                    overflow: "hidden",
                  }}
                >
                  <Pressable
                    style={styles.modal_button}
                    onPress={() => navigation.navigate(Calculator)}
                    android_ripple={{
                      color: "#3C84AB",
                    }}
                  >
                    <Text style={styles.modal_button_text}>Get Started</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>

        <ImageBackground
          style={styles.image2}
          borderBottomLeftRadius={70}
          borderBottomRightRadius={70}
          source={require("../assets/BG2.png")}
        >
          <View>
            <View style={styles.section2_title}>
              <Text style={styles.section2_text}>ABOUT PROJECT</Text>
            </View>

            <View style={styles.section2_description}>
              <Text style={styles.section2_descriptionText}>
                The Carbon Trading Platform Using Blockchain is a decentralised
                application that aims to facilitate carbon credit trading by
                creating an unchangeable and tamper-proof record of
                transactions. It will enable buyers and sellers of carbon
                credits to conduct safe, open transactions. The platform will
                automate the exchange of carbon credits by using smart
                contracts, reducing transaction cost and providing an incentive
                mechanism for companies to reduce their emissions. If carbon
                credits expire before the allotted time, a penalty must be paid
                before another batch can be purchased. The Carbon Trading
                Platform Using Blockchain aims to support sustainable
                development by creating a more effective and transparent carbon
                credit market, motivating businesses to reduce their emissions,
                and reducing climate change's adverse consequences.
              </Text>
            </View>
          </View>
        </ImageBackground>

        <ImageBackground
          style={styles.image3}
          source={require("../assets/BG3.png")}
        >
          <View>
            <View style={styles.section3_title}>
              <Text style={styles.section3_text}>Why Our Platform?</Text>
            </View>

            <View style={styles.centerView}>
              <View style={styles.section3_view1}>
                <Text style={styles.section3_subtitle}>SUSTAINABLILITY</Text>
                <View style={styles.section3_underline}></View>
                <Text style={styles.section3_subtext}>
                  Ensures a balance between economic growth, environmental care
                  and social well-being
                </Text>
              </View>
              <View style={styles.section3_view1}>
                <Text style={styles.section3_subtitle}>TAMPER-PROOF</Text>
                <View style={styles.section3_underline}></View>
                <Text style={styles.section3_subtext}>
                  Protection against unauthorized entry through cryptographic
                  chains
                </Text>
              </View>
              <View style={styles.section3_view1}>
                <Text style={styles.section3_subtitle}>TRANSPARENCY</Text>
                <View style={styles.section3_underline}></View>
                <Text style={styles.section3_subtext}>
                  Provide open and accessible information about the transactions
                  and activities
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>

        <ImageBackground
          style={styles.image4}
          borderTopLeftRadius={75}
          borderTopRightRadius={75}
          source={require("../assets/BG4.png")}
        >
          <View>
            <View style={styles.section4_title}>
              <Text style={styles.section4_text}>FAQs</Text>
            </View>
            <View style={styles.section4_description}>
              <View style={styles.section4_descriptionView}>
                <Text style={styles.section4_descriptionText}>
                  Q: What is CarboEx?
                </Text>
                <Text style={styles.section4_descriptionText}>
                  A: CarboEx is an online marketplace where buyers and sellers
                  can trade carbon credits. Organizations or people can purchase
                  carbon credits to offset their own carbon emissions. Carbon
                  credits are a unit of carbon emissions that have been
                  decreased or offset by a project or activity.
                </Text>
              </View>

              <View style={styles.section4_descriptionView}>
                <Text style={styles.section4_descriptionText}>
                  Q: How does the CarboEx platform work?
                </Text>

                <Text style={styles.section4_descriptionText}>
                  A: Blockchain technology is used by the CarboEx platform to
                  promote transparency and traceability in the trading of carbon
                  credits. It streamlines the transfer of ownership and tracks
                  the source and chain of custody of the credits, allowing
                  sellers to register their projects and purchasers to acquire
                  carbon credits through the site.
                </Text>
              </View>

              <View style={styles.section4_descriptionView}>
                <Text style={styles.section4_descriptionText}>
                  Q: What is the purpose of a CarboEx?
                </Text>
                <Text style={styles.section4_descriptionText}>
                  A: CarboEx's goal is to create a market for trading carbon
                  credits, which can encourage activities that reduce emissions
                  and sequester carbon. Platforms for selling carbon credits can
                  assist in lowering greenhouse gas emissions and reducing the
                  consequences of climate change by giving financial incentives
                  for sustainable actions.{" "}
                </Text>
              </View>

              <View style={styles.section4_descriptionView}>
                <Text style={styles.section4_descriptionText}>
                  Q: Who can use a CarboEx platform?{" "}
                </Text>
                <Text style={styles.section4_descriptionText}>
                  A: A CarboEx platform can be used by anyone, including
                  intermediaries, purchasers, and project developers.
                  Businesses, governments, or people that want to offset their
                  carbon emissions may be buyers, whereas groups implementing
                  sustainable initiatives that produce carbon credits may be
                  project developers.{" "}
                </Text>
              </View>

              <View style={styles.section4_descriptionView}>
                <Text style={styles.section4_descriptionText}>
                  Q: What are the benefits of using CarboEx?{" "}
                </Text>

                <Text style={styles.section4_descriptionText}>
                  A: Using a CarboEx has advantages such as higher
                  accountability, decreased transaction costs, improved
                  efficiency, increased accessibility, and the capacity to
                  incentivize sustainable practices. Platforms that sell carbon
                  credits can aid in the transition to a low-carbon economy and
                  advance sustainable growth.
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
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
    width: 340,
    height: 330,
    // margin: 10,
    marginTop: 10,
    zIndex: 1,
  },
  text: {
    margin: 22,
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
  },
  modal_centered_view: {
    flex: 1,
    alignItems: "center",
  },
  modal_view: {
    height: 180,
    width: 280,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    opacity: 0.7,
    // margin: 20,
    // marginTop: 5,
    borderRadius: 35,
  },
  modal_text: {
    fontSize: 11,
    textAlign: "center",
    marginLeft: 12,
    marginRight: 12,
  },
  modal_body: {
    height: 140,
    justifyContent: "center",
    alignItems: "center",
  },
  modal_button: {
    width: 280,
    height: 40,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    backgroundColor: "#C4DDFF",
  },
  modal_button_text: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 15,
  },

  image2: {
    width: "100%",
    height: 460,
    marginTop: -35,
    // position: "absolute",
    // marginTop: 335,
  },
  section2_title: {
    alignItems: "center",
    marginTop: 50,
  },
  section2_text: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
  },
  section2_description: {
    margin: 20,
  },
  section2_descriptionText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
  },

  image3: {
    width: "100%",
    height: 760,
  },
  section3_title: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  section3_text: {
    fontSize: 25,
    color: "#86EBF8",
    fontWeight: "bold",
  },
  section3_view1: {
    width: 250,
    height: 200,
    borderRadius: 70,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#86EBF8",
    margin: 10,
  },
  section3_subtitle: {
    fontSize: 20,
    color: "#fff",
    marginTop: 25,
    fontWeight: 500,
  },
  section3_underline: {
    height: 2,
    width: 200,
    backgroundColor: "#fff",
    margin: 10,
  },
  section3_subtext: {
    textAlign: "center",
    color: "#fff",
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  image4: {
    width: "100%",
    height: 1050,
    marginBottom: -20,
  },
  section4_title: {
    alignItems: "center",
    marginTop: 50,
  },
  section4_text: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
  },
  section4_description: {
    margin: 20,
  },
  section4_descriptionView: {
    marginBottom: 15,
    justifyContent: "center",
  },
  section4_descriptionText: {
    // textAlign: "center",
    color: "#fff",
    fontSize: 15,
    margin: 2,
  },
});
