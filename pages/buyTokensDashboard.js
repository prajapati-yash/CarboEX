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
  const data = [
    {
      companyName: "Company 1",
      description: "Description 1",
      publicAddress: "Address 1",
      credits: "Credits 1",
      price: "Price 1",
      image: require("../assets/calculatorAssets/HomeBg.jpg"),
    },
    {
      companyName: "Company 2",
      description: "Description 2",
      publicAddress: "Address 2",
      credits: "Credits 2",
      price: "Price 2",
      image: require("../assets/calculatorAssets/HomeBg.jpg"),
    },
    // add more data items here
  ];
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

          {data.map((item, index) => (
            <View style={styles.mainBox} key={index}>
              <View style={styles.boxBody}>
                <View style={styles.header_view}>
                  <ImageBackground
                    style={styles.image1}
                    borderTopRightRadius={36}
                    borderTopLeftRadius={36}
                    source={item.image}
                  >
                    {/* <Text style={styles.header_text}>Traditional Energy</Text> */}
                  </ImageBackground>
                </View>

                <View style={styles.view_body}>
                  <View>
                    <Text style={styles.input_text}>Company Name</Text>
                    <Text style={styles.input_box}>{item.companyName}</Text>
                  </View>

                  <View>
                    <Text style={styles.input_text}>Description</Text>
                    <Text style={styles.input_box}>{item.description}</Text>
                  </View>

                  <View>
                    <Text style={styles.input_text}>Public Address</Text>
                    <Text style={styles.input_box}>{item.publicAddress}</Text>
                  </View>

                  <View>
                    <Text style={styles.input_text}>Credits</Text>
                    <Text style={styles.input_box}>{item.credits}</Text>
                  </View>

                  <View>
                    <Text style={styles.input_text}>Price</Text>
                    <Text style={styles.input_box}>{item.price}</Text>
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
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
