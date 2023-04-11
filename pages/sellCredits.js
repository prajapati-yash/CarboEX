import * as React from "react";
import { Text, View, ScrollView, TextInput } from "react-native";
import styles from "../style/sellCreditsStyles";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Button, Stack } from "@rneui/themed";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default function SellCredits() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.centered_view}>
          <View style={styles.header}>
            <Text style={styles.header_view_text}>Sell Credits</Text>
          </View>
          <View style={styles.mainBox}>
            <View style={styles.boxBody}>
              <Text style={styles.input_text}>
                Enter number of credits to sell
              </Text>
              <TextInput
                // value={teText}
                style={styles.input_box}
                // onChangeText={(teText) => {
                //   teSetText(teText);
                // }}
              />

              <Text style={styles.input_text}>Price per credits</Text>
              <TextInput
                // value={teText}
                style={styles.input_box}
                // onChangeText={(teText) => {
                //   teSetText(teText);
                // }}
              />

              <Text style={styles.input_text}>Total</Text>
              <TextInput
                // value={teText}
                style={styles.input_box}
                // onChangeText={(teText) => {
                //   teSetText(teText);
                // }}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <Button
                title="Submit"
                loading={false}
                loadingProps={{ size: "small", color: "white" }}
                buttonStyle={{
                  backgroundColor: "#16172E",
                  borderRadius: 5,
                }}
                titleStyle={{ fontWeight: "bold", fontSize: 23 }}
                containerStyle={{
                  //   marginLeft: "12%",
                  width: responsiveWidth(40),
                  marginVertical: "3%",
                }}
                onPress={() => console.log("aye")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
