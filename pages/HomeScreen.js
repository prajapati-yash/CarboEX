import * as React from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Calculator from "./Calculator";
import styles from "../style/homescreenStyle";


export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerView}
      >
        <View style={{ alignItems: "center" }}>
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
                      facilitate carbon credit trading by creating an
                      unchangeable and tamper-proof record of transactions,
                      automating the exchange of carbon credits, and supporting
                      sustainable development.
                    </Text>
                  </View>

                  <View
                    style={{
                      borderBottomRightRadius: 35,
                      borderBottomLeftRadius: 35,
                      overflow: "hidden",
                      height: "22%",
                      width: "100%",
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

                  <View style={styles.section2_description_view1}><Text style={styles.section2_descriptionText}>The Carbon Trading Platform Using Blockchain is a
                  decentralised application that aims to facilitate carbon
                  credit trading by creating an unchangeable and tamper-proof
                  record of transactions. It will enable buyers and sellers of
                  carbon credits to conduct safe, open transactions.</Text></View>

                  <View style={styles.section2_description_view1}><Text style={styles.section2_descriptionText}>The
                  platform will automate the exchange of carbon credits by using
                  smart contracts, reducing transaction cost and providing an
                  incentive mechanism for companies to reduce their emissions.
                  If carbon credits expire before the allotted time, a penalty
                  must be paid before another batch can be purchased.</Text></View>

                  <View style={styles.section2_description_view1}><Text style={styles.section2_descriptionText}>The Carbon
                  Trading Platform Using Blockchain aims to support sustainable
                  development by creating a more effective and transparent
                  carbon credit market, motivating businesses to reduce their
                  emissions, and reducing climate change's adverse consequences.</Text></View>
                 
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
                    Ensures a balance between economic growth, environmental
                    care and social well-being
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
                    Provide open and accessible information about the
                    transactions and activities
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
                    can trade carbon credits. Organizations or people can
                    purchase carbon credits to offset their own carbon
                    emissions. Carbon credits are a unit of carbon emissions
                    that have been decreased or offset by a project or activity.
                  </Text>
                </View>

                <View style={styles.section4_descriptionView}>
                  <Text style={styles.section4_descriptionText}>
                    Q: How does the CarboEx platform work?
                  </Text>

                  <Text style={styles.section4_descriptionText}>
                    A: Blockchain technology is used by the CarboEx platform to
                    promote transparency and traceability in the trading of
                    carbon credits. It streamlines the transfer of ownership and
                    tracks the source and chain of custody of the credits,
                    allowing sellers to register their projects and purchasers
                    to acquire carbon credits through the site.
                  </Text>
                </View>

                <View style={styles.section4_descriptionView}>
                  <Text style={styles.section4_descriptionText}>
                    Q: What is the purpose of a CarboEx?
                  </Text>
                  <Text style={styles.section4_descriptionText}>
                    A: CarboEx's goal is to create a market for trading carbon
                    credits, which can encourage activities that reduce
                    emissions and sequester carbon. Platforms for selling carbon
                    credits can assist in lowering greenhouse gas emissions and
                    reducing the consequences of climate change by giving
                    financial incentives for sustainable actions.{" "}
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
                    incentivize sustainable practices. Platforms that sell
                    carbon credits can aid in the transition to a low-carbon
                    economy and advance sustainable growth.
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
}


