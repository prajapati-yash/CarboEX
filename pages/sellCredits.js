import * as React from "react";
import { useState } from "react";
import { Text, View, ScrollView, TextInput } from "react-native";
import styles from "../style/sellCreditsStyles";
import { Button, Stack } from "@rneui/themed";
import { responsiveWidth } from "react-native-responsive-dimensions";

export default function SellCredits() {
  const [credits, setCredits] = useState("");
  const price = 100;
  const [total, setTotal] = useState("");

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
                value={credits}
                style={styles.input_box}
                onChangeText={(value) => setCredits(value)}
              />

              <Text style={styles.input_text}>Price per credits</Text>
              <Text
                value={price}
                style={styles.input_box}
                // onChangeText={(value) => setPrice(value)}
              >
                {price}
              </Text>

              <Text style={styles.input_text}>Total</Text>
              <Text style={styles.input_box}>{credits * price}</Text>
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
                  width: responsiveWidth(40),
                  marginVertical: "3%",
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
