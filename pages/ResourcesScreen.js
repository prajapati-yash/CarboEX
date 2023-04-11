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
import styles from "../style/resourcescreenStyle";

export default function Resource() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerView}
      >
        <View style={{ alignItems: "center" }}>
          <ImageBackground
            style={styles.section1_image}
            borderRadius={50}
            source={require("../assets/Resources/BG1.jpg")}
          >
            <View>
              <Text style={styles.section1_text}>
                Know what CarboEx is all about.
              </Text>
            </View>
          </ImageBackground>

          <ImageBackground
            style={styles.section2_image}
            borderBottomLeftRadius={110}
            borderBottomRightRadius={110}
            source={require("../assets/Resources/BG2.jpg")}
          >
            <View style={styles.section2_title}>
              <Text style={styles.section2_text}>
                What is carbon trading platform?
              </Text>
            </View>

            <View>
              <View style={styles.section2_modal_center}>
                <View style={styles.section2_modal_view}>
                  <Text style={styles.section2_modal_text}>
                    Carbon trading is a market-based approach to reducing
                    greenhouse gas emissions. Certain institutions set a limit
                    on the number of carbon emissions that companies are allowed
                    to emit. The set limit divides into allowances or credits.
                    Companies emitting less carbon than their allotted amount
                    can sell their excess allowances or credits to other
                    entities that require it. Consequently, Carbon credits can
                    be traded on exchanges at a price determined by supply and
                    demand. Carbon trading can take place at both national and
                    international levels. Carbon trading is popular because it
                    allows for controlled and justified emissions of Carbon on
                    the globe. Eventually, there is a responsibility for the
                    human race to expend our resources sustainably and ensure we
                    our assets and natural reservoirs wisely. Carbon trading
                    allows us to do that on a global scale.
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>

          <ImageBackground
            style={styles.section3_image}
            borderBottomLeftRadius={110}
            borderBottomRightRadius={110}
            source={require("../assets/Resources/BG3.jpg")}
          >
            <View style={styles.section3_title}>
              <Text style={styles.section3_text}>
                How Carbon Trading Platform Works And Who Can Use Carbon Trading
                Platform?
              </Text>
            </View>

            <View>
              <View style={styles.section3_modal_center}>
                <View style={styles.section3_modal_view}>
                  <Text style={styles.section3_modal_text1}>
                    The CarboEx trading platform provides users with certain
                    CarboEx Tokens based on their Renewable Energy Certificate
                    (REC). An individual or organization with an RE certificate
                    obtains the tokens to operate their business. It is with an
                    oath that they shall abide by the carbon emissions limit.
                    Each token represents a digital allowance, i.e. each token
                    allows one to expend a certain amount of GHGs into the
                    atmosphere as you run your business/ organization/ factory.
                    If and when an organization or an individual spends less
                    than their allowance, they can sell it to other companies
                    who require the credits. This further leads to a marketplace
                    where a company buys credits from a sender and uses them to
                    expend energy and release Carbon into the atmosphere.
                  </Text>
                  <Text style={styles.section3_modal_text2}>
                    Carbon trading platform can be used by Individuals,
                    Organizations, Regulatory bodies, and NGOs who maintain,
                    manage and monitor Carbon emissions can use CarboEx. If
                    you're into green, clean energy and a sustainable
                    environment, you can participate too! As an individual or as
                    a member you can use CarboEx to buy, sell and trade CarboEx
                    tokens.
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>

          <ImageBackground
            style={styles.section4_image}
            borderTopLeftRadius={70}
            borderTopRightRadius={70}
            source={require("../assets/Resources/BG4.jpg")}
          >
            <View style={styles.section4_title}>
              <Text style={styles.section4_text}>Calculator</Text>
            </View>

            <View style={styles.section4_description}>
              <Text style={styles.section4_description_text}>
                "Calculate your carbon emissions and make small changes for a
                big impact."
              </Text>
            </View>

            <View style={styles.section4_button_view}>
              <Pressable
                style={styles.section4_description_button}
                onPress={() => navigation.navigate(Calculator)}
                android_ripple={{
                  color: "#3C84AB",
                }}
              >
                <Text style={styles.section4_description_button_text}>
                  Calculate
                </Text>
              </Pressable>
            </View>
          </ImageBackground>

          <ImageBackground
            style={styles.section5_image}
            borderTopLeftRadius={70}
            borderTopRightRadius={70}
            source={require("../assets/Resources/BG5.jpg")}
          >
            <View style={styles.section5_title}>
              <ImageBackground
                style={styles.section5_inner_image}
                borderRadius={5}
                source={require("../assets/Resources/button.png")}
              >
                <View style={styles.section5_title}>
                  <Text style={styles.section5_button_text}>POLICIES</Text>
                </View>
              </ImageBackground>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
}
