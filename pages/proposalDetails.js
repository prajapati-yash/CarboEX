import * as React from "react";
import { Text, View, ScrollView, TextInput } from "react-native";
import styles from "../style/proposalDetailsStyle";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Button, Stack } from "@rneui/themed";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default function ProposalDetails() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.centered_view}>
          <View style={styles.mainBox}>
            <View style={styles.boxHeader}>
              <Text style={styles.header_text}>ACTIVE</Text>
            </View>
            <View style={styles.boxBody}>
              <Text style={styles.input_text}>Name</Text>
              <Text
                // value={teText}
                style={styles.input_box}
                // onChangeText={(teText) => {
                //   teSetText(teText);
                // }}
              />

              <Text style={styles.input_text}>Public Address</Text>
              <Text
                // value={teText}
                style={styles.input_box}
                // onChangeText={(teText) => {
                //   teSetText(teText);
                // }}
              />

              <Text style={styles.input_text}>Summary</Text>
              <Text
                // value={teText}
                style={styles.input_box}
                // onChangeText={(teText) => {
                //   teSetText(teText);
                // }}
              />

              <Text style={styles.input_text}>Certificate</Text>
              <Text
                // value={teText}
                style={styles.input_box}
                // onChangeText={(teText) => {
                //   teSetText(teText);
                // }}
              />

              <Text style={styles.input_text}>Type</Text>
              <Text
                // value={teText}
                style={styles.input_box}
                // onChangeText={(teText) => {
                //   teSetText(teText);
                // }}
              />

              <Text style={styles.input_text}>Value</Text>
              <Text
                // value={teText}
                style={styles.input_box}
                // onChangeText={(teText) => {
                //   teSetText(teText);
                // }}
              >
                1200
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Button
                title="Accept"
                loading={false}
                loadingProps={{ size: "small", color: "white" }}
                buttonStyle={{
                  backgroundColor: "#7ff57f",
                  borderRadius: 5,
                }}
                titleStyle={{ fontWeight: "bold", fontSize: 23 }}
                containerStyle={{
                  marginLeft: "12%",
                  width: responsiveWidth(30),
                  marginVertical: "3%",
                }}
                onPress={() => console.log("aye")}
              />

              <Button
                title="Reject"
                loading={false}
                loadingProps={{ size: "small", color: "white" }}
                buttonStyle={{
                  backgroundColor: "#db5656",
                  borderRadius: 5,
                }}
                titleStyle={{ fontWeight: "bold", fontSize: 23 }}
                containerStyle={{
                  marginLeft: "10%",
                  width: responsiveWidth(30),
                  marginVertical: "3%",
                }}
                onPress={() => console.log("aye")}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
