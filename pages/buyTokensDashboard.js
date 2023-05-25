import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, ScrollView, ToastAndroid } from "react-native";
import styles from "../style/buyTokensDashboardStyle";
import {
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Button } from "@rneui/themed";
import { companyInstance, COMPANY_ADDRESS } from "../components/contract";
import { connector } from "../components/WalletConnectExperience";
import { useNavigation } from "@react-navigation/native";
import Web3 from "web3";
import ProfileDetails from "./profileDetails";

export default function BuyTokensDashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const [userDetailsById, setUserDetailsById] = useState([]);
  const [count, setCount] = useState(1);

  const address = connector.accounts[0];

  const sellingCredits = async () => {
    try {
      if (!connector.connected) {
        console.log("WalletConnect not connected");
        return;
      }
      if (connector.connected) {
        const provider = new Web3("https://pre-rpc.bt.io/");

        const con = await companyInstance();
        const getUserOrCount = await con.methods.orderCount().call();
        // console.log("getUserOrCount :",getUserOrCount);
        const countOfUserOrder = parseInt(getUserOrCount, 16);
        console.log("countOfUserOrder :", countOfUserOrder);

        let arr = [];
        for (let i = 1; i <= countOfUserOrder; i++) {
          const getUserOrDetail = await con.methods.Orderstruct(i).call();
          if (!getUserOrDetail[3]) {
            arr.push(getUserOrDetail);
          } else {
            // console.log(getUserOrDetail);
          }
          // console.log(getUserOrDetail)
        }
        setUserDetailsById(arr);
        // setbtnloading(false);
      }
    } catch (error) {
      console.log("Selling Credits Error:", error);
    }
  };

  useEffect(() => {
    sellingCredits();
  }, [count]);

  const buyCreditsFunc = async (id, crd, prc) => {
    try {
      if (connector.connected) {
        // setIsLoading(true);
        console.log("Connector---", connector);
        const provider = new Web3("https://pre-rpc.bt.io/");

        const con = await companyInstance();
        // console.log(id)
        console.log("Id :  crd :  prc :");
        console.log(id, crd, prc);
        const valueMul = crd * prc;
        const valuePara = valueMul.toString();
        const buyCredits = await con.methods.buycredit(id).encodeABI();
        // await buyCredits.wait();

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
          data: buyCredits,
          nonce,
          value: valuePara,
        };

        console.log("After txOptions");
        console.log("connector transaction", connector);
        const signTx = await connector.sendTransaction(txOptions);
        const finalTx = await signTx;
        console.log("After transaction");
        console.log(signTx);
        let receipt = null;
        while (receipt === null) {
          receipt = await provider.eth.getTransactionReceipt(signTx);
          await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second before checking again
        }
        // console.log("Receipt Status", receipt.status);
        if (receipt && receipt.status) {
          ToastAndroid.show("Transaction Successful", ToastAndroid.LONG);
        } else {
          ToastAndroid.show("Transaction Failed", ToastAndroid.LONG);
        }
        setCount((prev) => prev + 1);
        setIsLoading(false);
        // sellingCredits()
        // return buyCredits;
        navigation.navigate("ProfileDetails");
      }
    } catch (error) {
      console.log("Buy Credits Function Error :", error);
      ToastAndroid.show("Transaction Failed", ToastAndroid.LONG);
      setIsLoading(false);
    }
  };

  return (
    <View style={{ backgroundColor: "#AFF6FF", flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerView}
      >
        <View style={styles.container}>
          <View style={styles.view_title}>
            <Text style={styles.text_title}>BUY CARBON CREDITS</Text>
          </View>
          <View
            style={{
              marginHorizontal: "10%",
              marginBottom: "2%",
              backgroundColor: "white",
              borderRadius: 25,
            }}
          >
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                padding: "5%",
                textAlign: "justify",
              }}
            >
              Here you can see the list of all the proposals made by sellers
              offering carbon credits for sale.
            </Text>
          </View>

          {count &&
            userDetailsById.map((company, key) => (
              <View style={styles.mainBox} key={key}>
                <View style={styles.boxBody}>
                  <View style={styles.view_body}>
                    <View>
                      <Text style={styles.input_text}>Seller Address :</Text>
                      <View style={styles.input_box}>
                        <Text>{company[4]}</Text>
                      </View>
                    </View>

                    <View>
                      <Text style={styles.input_text}>Credits:</Text>
                      <View style={styles.input_box}>
                        <Text>{parseInt(company[1])}</Text>
                      </View>
                    </View>

                    <View>
                      <Text style={styles.input_text}>
                        Price per credits (in ETH):
                      </Text>
                      <View style={styles.input_box}>
                        <Text>
                          {parseInt(company[2]) / Math.pow(10, 18)}
                        </Text>
                      </View>
                    </View>

                    <View>
                      <Text style={styles.input_text}>Total (in ETH):</Text>
                      <View style={styles.input_box}>
                        <Text>
                          {(parseInt(company[2]) / Math.pow(10, 18)) *
                            parseInt(company[1])}
                        </Text>
                      </View>
                    </View>

                    <Button
                      title={isLoading ? "Loading..." : "BUY"}
                      loading={isLoading}
                      loadingProps={{ size: "small", color: "white" }}
                      buttonStyle={{
                        backgroundColor: "#000",
                        borderRadius: 15,
                      }}
                      titleStyle={{
                        fontWeight: "bold",
                        color: "#fff",
                        fontSize: responsiveFontSize(2.7),
                        margin: "4%",
                      }}
                      containerStyle={{
                        marginHorizontal: "15%",
                        // height: 50,
                        width: responsiveWidth(30),
                        marginVertical: "2%",
                        marginBottom: "5%",
                      }}
                      onPress={() =>
                        buyCreditsFunc(
                          company[0],
                          parseInt(company[1]),
                          parseInt(company[2])
                        )
                      }
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
