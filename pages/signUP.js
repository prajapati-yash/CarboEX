import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  ImageBackground,
} from "react-native";
import styles from "../style/signUPStyle";
import { Button, Stack } from "@rneui/themed";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default function SignUP() {
  return (
    <View style={styles.container}>
      {/* <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerView}
      > */}
      <ImageBackground
        style={styles.image1}
        // borderRadius={50}
        source={require("../assets/signUpAssets/BG1.png")}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            style={styles.image2}
            borderRadius={50}
            source={require("../assets/signUpAssets/BG2.png")}
          >
            <View style={styles.headerView}>
              <Text style={styles.headerViewText}>CARBOEX</Text>
            </View>

            <View style={styles.bodyView}>
              <TextInput
                // value={teText}
                style={styles.input_box}
                placeholder="First Name"
                placeholderTextColor="#fff"
                // onChangeText={(teText) => {
                //   teSetText(teText);
                // }}
              />
              <TextInput
                // value={teText}
                style={styles.input_box}
                placeholder="Username"
                placeholderTextColor="#fff"
                // onChangeText={(teText) => {
                //   teSetText(teText);
                // }}
              />
              <TextInput
                // value={teText}
                style={styles.input_box}
                placeholder="Username"
                placeholderTextColor="#fff"
                // onChangeText={(teText) => {
                //   teSetText(teText);
                // }}
              />
              <TextInput
                // value={teText}
                style={styles.input_box}
                placeholder="Company Name"
                placeholderTextColor="#fff"
                // onChangeText={(teText) => {
                //   teSetText(teText);
                // }}
              />
              <TextInput
                // value={teText}
                style={styles.input_box}
                placeholder="Email"
                placeholderTextColor="#fff"
                // onChangeText={(teText) => {
                //   teSetText(teText);
                // }}
              />
              <TextInput
                // value={teText}
                style={styles.input_box}
                placeholder="Country"
                placeholderTextColor="#fff"
                // onChangeText={(teText) => {
                //   teSetText(teText);
                // }}
              />
              <Button
                title="Create"
                loading={false}
                loadingProps={{ size: "small", color: "white" }}
                buttonStyle={{
                  backgroundColor: "#fff",
                  borderRadius: 20,
                }}
                titleStyle={{
                  // fontWeight: "bold",
                  fontSize: 23,
                  color: "#000",
                }}
                containerStyle={{
                  width: responsiveWidth(50),
                  marginHorizontal: "12%",
                  marginTop: "4%",
                }}
                onPress={() => console.log("aye")}
              />
            </View>
          </ImageBackground>
        </ScrollView>
      </ImageBackground>

      {/* </ScrollView> */}
    </View>
  );
}
