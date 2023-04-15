import * as React from "react";
import { Text, View, ScrollView, TextInput } from "react-native";
import styles from "../style/proposalDetailsStyle";
import { Button, Stack } from "@rneui/themed";
import { responsiveWidth } from "react-native-responsive-dimensions";

export default function ProposalDetails() {
  const userData = [
    {
      name: "John Doe",
      publicAddress: "0x123456789",
      summary: "Lorem ipsum dolor sit amet",
      certificate: "Lorem ipsum",
      type: "Type A",
      value: "1200",
    },
    {
      name: "John Doe",
      publicAddress: "0x123456789",
      summary: "Lorem ipsum dolor sit amet",
      certificate: "Lorem ipsum",
      type: "Type A",
      value: "1200",
    },
    // Add more user data objects as needed
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.centered_view}>
          {userData.map((user, index) => (
            <View style={styles.mainBox} key={index}>
              <View style={styles.boxHeader}>
                <Text style={styles.header_text}>ACTIVE</Text>
              </View>
              <View style={styles.boxBody}>
                <Text style={styles.input_text}>Name</Text>
                <Text style={styles.input_box}>{user.name}</Text>

                <Text style={styles.input_text}>Public Address</Text>
                <Text style={styles.input_box}>{user.publicAddress}</Text>

                <Text style={styles.input_text}>Summary</Text>
                <Text style={styles.input_box}>{user.summary}</Text>

                <Text style={styles.input_text}>Certificate</Text>
                <Text style={styles.input_box}>{user.certificate}</Text>

                <Text style={styles.input_text}>Type</Text>
                <Text style={styles.input_box}>{user.type}</Text>

                <Text style={styles.input_text}>Value</Text>
                <Text style={styles.input_box}>{user.value}</Text>
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
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
