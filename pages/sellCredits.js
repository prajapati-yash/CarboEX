import * as React from "react";
import { useState } from "react";
import { Text, View, ScrollView, TextInput, Alert } from "react-native";
import styles from "../style/sellCreditsStyles";
import { Button, Stack } from "@rneui/themed";
import {
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { connector } from "../components/WalletConnectExperience";
import Web3 from "web3";
import { COMPANY_ADDRESS, companyInstance } from "../components/contract";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";
import ProfileDetails from "./profileDetails";

TextInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default function SellCredits() {
  const navigation = useNavigation();

  const [credits, setCredits] = useState(0);
  const [price, setPrice] = useState(0);
  // const [total, setTotal] = useState(0);

  const sellingCredits = async () => {
    try {
      if (credits === null || credits <= 0 || price <= 0 || price === null) {
        alert("Enter the required details!");
      } else {
        if (connector.connected) {
          console.log("Connector---", connector);
          const provider = new Web3("https://pre-rpc.bt.io/");

          console.log("Company Instance");
          const con = await companyInstance();
          // let priceInWei = price / Math.pow(10, 18);
          console.log(
            credits,
            provider.utils.toWei(price.toString(), "ether"),
            connector.accounts[0]
          );
          const sellCreditsUser = await con.methods
            .createOrder(
              credits,
              provider.utils.toWei(price.toString(), "ether"),
              connector.accounts[0]
            )
            .encodeABI();

          const gasPrice = await provider.eth.getGasPrice();
          const gasLimit = 3000000;
          const recipient = COMPANY_ADDRESS; // replace with recipient address
          const nonce = await provider.eth.getTransactionCount(
            connector.accounts[0],
            "pending"
          );
          const txOptions = {
            gasPrice,
            gasLimit,
            from: connector.accounts[0],
            to: recipient,
            data: sellCreditsUser,
            nonce,
          };

          console.log("After txOptions");
          console.log("connector transaction", connector);
          const signTx = await connector.sendTransaction(txOptions);
          // const finalTx = await signTx;

          console.log(signTx);
          // await sellCreditsUser.wait();
          return sellCreditsUser;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.centered_view}>
          <View style={styles.header}>
            <Text style={styles.header_view_text}>Sell Credits</Text>
          </View>
          <View
            style={{
              marginHorizontal: "10%",
              marginBottom: "6%",
              backgroundColor: "black",
              borderRadius: 25,
            }}
          >
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                padding: "5%",
                textAlign: "justify",
                color: "white"
              }}
            >
              Here you can Sell carbon credits from wallet by setting amount and
              price.
            </Text>
          </View>

          <View style={styles.mainBox}>
            <View style={styles.boxBody}>
              <View>
                <Text style={styles.input_text}>
                  Enter number of credits to sell
                </Text>
                <TextInput
                  value={credits}
                  style={styles.input_box}
                  keyboardType="numeric"
                  onChangeText={(value) => setCredits(value)}
                  placeholder="Enter the number of credits"
                />
              </View>

              <View>
                <Text style={styles.input_text}>
                  Price per credits (in ETH)
                </Text>
                <TextInput
                  value={price}
                  style={styles.input_box}
                  keyboardType="numeric"
                  onChangeText={(value) => setPrice(value)}
                  placeholder="Enter price per credits"
                ></TextInput>
              </View>

              <View>
                <Text style={styles.input_text}>Total (in ETH)</Text>
                <View style={styles.input_box}>
                  <Text>{credits * price}</Text>
                </View>
              </View>
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
                onPress={sellingCredits}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
