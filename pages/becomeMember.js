import React, {useState} from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import styles from "../style/becomeMemberStyle";
import { Button } from "@rneui/themed";
import { responsiveFontSize, responsiveWidth } from "react-native-responsive-dimensions";

export default function BecomeMember() {
  const [numberOfTokens, setNumberOfTokens] = useState(0);
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerView}
      >
        <View style={styles.main_view}>
          <Text style={styles.main_view_text}>BECOME A MEMBER</Text>

          <View style={styles.view_details}>
            <View style={styles.view_data1_row1}>
              <View style={styles.view_data}>
                <Text style={styles.text_data}>No. of Token</Text>
              </View>
              <View>
                <TextInput
                  style={styles.input_box}
                  placeholder="Enter number of tokens"
                  onChangeText={setNumberOfTokens}
                ></TextInput>
              </View>
            </View>

            <View style={styles.view_data2_row1}>
              <View>
                <Text style={styles.text_data}>Total amount</Text>
              </View>
              <View>
                <Text
                  style={styles.input_box}
                  placeholder="Total amount will be displayed here."
                >{numberOfTokens * 100}</Text>
              </View>
            </View>

            <View style={styles.view_button}>
            {/* <Button
              title="Calculate Amount"
              loading={false}
              loadingProps={{ size: "small", color: "white" }}
              buttonStyle={{
                backgroundColor: "#C0E28E",
                borderRadius: 15,
              }}
              titleStyle={{ fontWeight: "bold", fontSize: responsiveFontSize(2) }}
              containerStyle={{
                marginHorizontal: "15%",
                // height: 50,
                width: responsiveWidth(50),
                marginVertical: "2%",
                marginBottom: "5%",
                
              }}
              onPress={() => console.log(numberOfTokens)}
            /> */}
            <Button
              title="Buy Tokens"
              loading={false}
              loadingProps={{ size: "small", color: "white" }}
              buttonStyle={{
                backgroundColor: "#C0E28E",
                borderRadius: 15,
              }}
              titleStyle={{ fontWeight: "bold", fontSize: responsiveFontSize(2), }}
              containerStyle={{
                marginHorizontal: "15%",
                // height: 50,
                width: responsiveWidth(50),
                marginVertical: "2%",
                marginBottom: "10%",
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
