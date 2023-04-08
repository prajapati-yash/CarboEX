import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  Pressable,
} from "react-native";
import styles from "../style/buyTokensDashboardStyle";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Button } from "@rneui/themed";

export default function BuyTokensDashboard() {
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerView}
      >
        <View style={styles.container}>
          <View style={styles.view_title}>
            <Text style={styles.text_title}>Buy Tokens</Text>
          </View>

          <View style={styles.mainBox}>
            <View style={styles.boxBody}>
              <View style={styles.calculateHeader}>
                <ImageBackground
                  style={styles.image1}
                  borderTopRightRadius={36}
                  borderTopLeftRadius={36}
                  source={require("../assets/calculatorAssets/HomeBg.jpg")}
                >
                  {/* <Text style={styles.header_text}>Traditional Energy</Text> */}
                </ImageBackground>
              </View>

              <View style={styles.calculateBody}>
                <View>
                  <Text style={styles.input_text}>Company Name</Text>
                  <Text style={styles.input_box} />
                </View>

                <View>
                  <Text style={styles.input_text}>Description</Text>
                  <Text style={styles.input_box} />
                </View>

                <View>
                  <Text style={styles.input_text}>Public Address</Text>
                  <Text style={styles.input_box} />
                </View>

                <View>
                  <Text style={styles.input_text}>Credits</Text>
                  <Text style={styles.input_box} />
                </View>

                <View>
                  <Text style={styles.input_text}>Price</Text>
                  <Text style={styles.input_box} />
                </View>

                <Button
                  title="BUY"
                  loading={false}
                  loadingProps={{ size: "small", color: "white" }}
                  buttonStyle={{
                    backgroundColor: "#AFF6FF",
                    borderRadius: 15,
                  }}
                  titleStyle={{
                    fontWeight: "bold",
                    fontSize: responsiveFontSize(2.7),
                    margin: "4%",
                  }}
                  containerStyle={{
                    marginHorizontal: "15%",
                    // height: 50,
                    width: responsiveWidth(50),
                    marginVertical: "2%",
                    marginBottom: "5%",
                  }}
                  onPress={() => console.log("aye")}
                />
              </View>
            </View>
          </View>

          <View style={styles.mainBox}>
            <View style={styles.boxBody}>
              <View style={styles.calculateHeader}>
                <ImageBackground
                  style={styles.image1}
                  borderTopRightRadius={36}
                  borderTopLeftRadius={36}
                  source={require("../assets/calculatorAssets/HomeBg.jpg")}
                >
                  {/* <Text style={styles.header_text}>Traditional Energy</Text> */}
                </ImageBackground>
              </View>

              <View style={styles.calculateBody}>
                <View>
                  <Text style={styles.input_text}>Company Name</Text>
                  <Text style={styles.input_box} />
                </View>

                <View>
                  <Text style={styles.input_text}>Description</Text>
                  <Text style={styles.input_box} />
                </View>

                <View>
                  <Text style={styles.input_text}>Public Address</Text>
                  <Text style={styles.input_box} />
                </View>

                <View>
                  <Text style={styles.input_text}>Credits</Text>
                  <Text style={styles.input_box} />
                </View>

                <View>
                  <Text style={styles.input_text}>Price</Text>
                  <Text style={styles.input_box} />
                </View>

                <Button
                  title="BUY"
                  loading={false}
                  loadingProps={{ size: "small", color: "white" }}
                  buttonStyle={{
                    backgroundColor: "#AFF6FF",
                    borderRadius: 15,
                  }}
                  titleStyle={{
                    fontWeight: "bold",
                    fontSize: responsiveFontSize(2.7),
                    margin: "4%",
                  }}
                  containerStyle={{
                    marginHorizontal: "15%",
                    // height: 50,
                    width: responsiveWidth(50),
                    marginVertical: "2%",
                    marginBottom: "5%",
                  }}
                  onPress={() => console.log("aye")}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
