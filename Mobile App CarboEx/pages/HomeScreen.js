import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Calculator from "./Calculator";
import Accordion from "react-native-collapsible/Accordion";
import styles from "../style/homescreenStyle";
import { Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import WalletConnectProvider from "@walletconnect/react-native-dapp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WalletConnectExperience from "../WalletConnectExperience";

const SCHEME_FROM_APP_JSON = "walletconnect-example";

const faqItems = [
  {
    title: "What is CarboEx?",
    content:
      "CarboEx is an online marketplace where buyers and sellers can trade carbon credits. Organizations or people can purchase carbon credits to offset their own carbon emissions. Carbon credits are a unit of carbon emissions that have been decreased or offset by a project or activity.",
  },
  {
    title: "How does the CarboEx platform work?",
    content:
      "Blockchain technology is used by the CarboEx platform to promote transparency and traceability in the trading of carbon credits. It streamlines the transfer of ownership and tracks the source and chain of custody of the credits, allowing sellers to register their projects and purchasers to acquire carbon credits through the site.",
  },
  {
    title: "What is the purpose of a CarboEx?",
    content:
      "CarboEx's goal is to create a market for trading carbon credits, which can encourage activities that reduce emissions and sequester carbon. Platforms for selling carbon credits can assist in lowering greenhouse gas emissions and reducing the consequences of climate change by giving financial incentives for sustainable actions.",
  },
  {
    title: "Who can use a CarboEx platform?",
    content:
      "A CarboEx platform can be used by anyone, including intermediaries, purchasers, and project developers. Businesses, governments, or people that want to offset their carbon emissions may be buyers, whereas groups implementing sustainable initiatives that produce carbon credits may be project developers.",
  },
  {
    title: "What are the benefits of using CarboEx?",
    content:
      "Using a CarboEx has advantages such as higher accountability, decreased transaction costs, improved efficiency, increased accessibility, and the capacity to incentivize sustainable practices. Platforms that sell carbon credits can aid in the transition to a low-carbon economy and advance sustainable growth.",
  },
];

const renderFaqHeader = (item, index, isActive) => {
  return (
    // <View style={styles.faqItem}>
    //   <Text style={styles.faqItemTitle}>{item.title}</Text>
    //   <View style={{ position: 'absolute', right: 20,marginTop:"5%" }}>
    //     <Icon
    //       name={isActive ? 'chevron-up' : 'chevron-down'}
    //       type="font-awesome"
    //       color="#555"
    //       size={16}
    //     />
    //   </View>
    <View style={styles.faqItem}>
      <Animatable.View duration={300} transition="backgroundColor">
        <Text style={styles.faqItemTitle}>{item.title}</Text>
      </Animatable.View>
      <View style={{ position: "absolute", right: 20, marginTop: "5%" }}>
        <Icon
          name={isActive ? "chevron-up" : "chevron-down"}
          type="font-awesome"
          color="#555"
          size={16}
        />
      </View>
    </View>
  );
};

const customTouchableComponent = (props) => (
  <TouchableOpacity
    {...props}
    style={{ backgroundColor: "#fff", marginTop: 20 }}
  />
);

const renderFaqContent = (item, index, isActive) => {
  return (
    <View style={styles.faqItemContent}>
      <Animatable.View
        duration={300}
        transition="backgroundColor"
        style={{
          backgroundColor: isActive
            ? "rgba(255,255,255,1)"
            : "rgba(245,252,255,1)",
        }}
      >
        <Animatable.Text
          style={{ textAlign: "justify" }}
          duration={10}
          easing="ease-out"
          animation={"zoomIn"}
          // isActive ? "zoomIn" : false
        >
          {item.content}
        </Animatable.Text>
      </Animatable.View>
    </View>
  );
};

export default function HomeScreen() {
  const navigation = useNavigation();

  const [activeSections, setActiveSections] = useState([]);

  const handleAccordionSectionToggle = (sections) => {
    setActiveSections(sections);
  };

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
            source={require("../assets/homeScreenAssets/BG1.png")}
          >
            <View>
              <Text style={styles.text}>
                Transforming carbon credits trading through blockchain
                technology
              </Text>
            </View>

            <View transparent animationType="fade" hardwareAccelerated>
              <View style={styles.modal_centered_view}>
                <View style={styles.modal_view}>
                  <View style={styles.modal_body}>
                    <Text style={[styles.modal_text, {fontSize: responsiveFontSize(2.2),fontWeight: "bold"}]}>Welcome to CarboEx. </Text>
                    <Text style={[styles.modal_text, {marginTop: "2%", marginBottom: "2%"}]}>
                      The Carbon Trading Platform that facilitates carbon credit
                      trading for a sustainable future.
                    </Text>
                    <Text style={[styles.modal_text, {fontWeight: 600}]}>
                      Powered by blockchain technology.
                    </Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      borderBottomRightRadius: 35,
                      borderBottomLeftRadius: 35,
                      overflow: "hidden",
                      // height: "22%",
                      width: "100%",
                      // paddingTop:"5%"
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
            source={require("../assets/homeScreenAssets/BG2.png")}
          >
            <View>
              <View style={styles.section2_title}>
                <Text style={styles.section2_text}>ABOUT PROJECT</Text>
              </View>

              <View style={styles.section2_description}>
                <View style={styles.section2_description_view1}>
                  <Text style={styles.section2_descriptionText}>
                    The Carbon Trading Platform Using Blockchain is a
                    decentralised application that aims to facilitate carbon
                    credit trading by creating an unchangeable and tamper-proof
                    record of transactions. It will enable buyers and sellers of
                    carbon credits to conduct safe, open transactions.
                  </Text>
                </View>

                <View style={styles.section2_description_view1}>
                  <Text style={styles.section2_descriptionText}>
                    The platform will automate the exchange of carbon credits by
                    using smart contracts, reducing transaction cost and
                    providing an incentive mechanism for companies to reduce
                    their emissions. If carbon credits expire before the
                    allotted time, a penalty must be paid before another batch
                    can be purchased.
                  </Text>
                </View>

                <View style={styles.section2_description_view1}>
                  <Text style={styles.section2_descriptionText}>
                    The Carbon Trading Platform Using Blockchain aims to support
                    sustainable development by creating a more effective and
                    transparent carbon credit market, motivating businesses to
                    reduce their emissions, and reducing climate change's
                    adverse consequences.
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>

          <ImageBackground
            style={styles.image3}
            source={require("../assets/homeScreenAssets/BG3.png")}
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
            source={require("../assets/homeScreenAssets/BG4.png")}
          >
            <View>
              <View style={styles.section4_title}>
                <Text style={styles.section4_text}>FAQs</Text>
              </View>
              <View style={styles.section4_description}>
                <View style={{ flex: 1 }}>
                  <Accordion
                    sections={faqItems}
                    activeSections={activeSections}
                    renderHeader={renderFaqHeader}
                    renderContent={renderFaqContent}
                    onChange={handleAccordionSectionToggle}
                    touchableComponent={customTouchableComponent}
                  />
                </View>
              </View>
            </View>
          </ImageBackground>

          {/* <WalletConnectProvider
            redirectUrl={
              Platform.OS === "web"
                ? window.location.origin
                : `${SCHEME_FROM_APP_JSON}://`
            }
            storageOptions={{
              asyncStorage: AsyncStorage,
            }}
          >
            <View style={styles.container}>
              <WalletConnectExperience />
             <StatusBar style="auto" /> 
            </View>
          </WalletConnectProvider> */}
        </View>
      </ScrollView>
    </View>
  );
}
