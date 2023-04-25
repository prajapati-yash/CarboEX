import React, {useState, useEffect} from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import styles from "../style/becomeMemberStyle";
import { Button } from "@rneui/themed";
import { responsiveFontSize, responsiveWidth } from "react-native-responsive-dimensions";
import { daoInstance, ercTokenInstance, ERC_TOKEN_ADDRESS,DAO_MEMBER_ADDRESS } from "../components/contract";
import ProposalDashboard from "./proposalDashboard";
import { useNavigation } from "@react-navigation/native";
import { connector } from "../components/WalletConnectExperience";
import Web3 from "web3";

export default function BecomeMember() {
  const navigation = useNavigation();
  const [numOfTokens, setNumOfTokens] = useState("0");
  const [tknAmtResult, setTknAmtResult] = useState("");
  const [tokenPrice, setTokenPrice] = useState("");

  const ercTokenFunc = async () => {
    try {
      if (numOfTokens === null || numOfTokens <= 0) {
       alert("'Oops! Number of Tokens must be greater than 0!'");
      } else {

        if (connector.connected) {
          console.log("Connector---", connector);
          const provider = new Web3("https://pre-rpc.bt.io/");

          const conToken = await ercTokenInstance();
          console.log("ConTokens",conToken);
          const tokenPrice = await conToken.methods.gettokenPrice().call();
          console.log("TokenPrice",tokenPrice);
          setTokenPrice(tokenPrice);
          const conDAO = await daoInstance();
          console.log("conDao",conDAO);
          const tokenPriceValue = numOfTokens * tokenPrice;
          const addMemberFunc = await conDAO.methods.addmember(numOfTokens).encodeABI();

          const gasPrice = await provider.eth.getGasPrice();
          const gasLimit = 3000000;
          const recipientDao = DAO_MEMBER_ADDRESS;
          const nonce = await provider.eth.getTransactionCount(
            connector.accounts[0],
            "pending"
          );
       
          const txOptionsDao = {
            gasPrice,
            gasLimit,
            from: connector.accounts[0],
            to: recipientDao,
            data: addMemberFunc,
            nonce,
            value:numOfTokens*tokenPrice
          };

          console.log("Number Of Tokens",numOfTokens);
          console.log("After txOptions");
          console.log("connector transaction", connector);
          const signTxDao = await connector.sendTransaction(txOptionsDao);
          const finalTx = await signTxDao;

          console.log(finalTx);
          navigation.navigate(ProposalDashboard);
          console.log("Add Member Function",addMemberFunc);
        }
      }
    } catch (error) {
      console.log("ERCTokenFunction",error);
    }
  };

  const getTokenPrice = async () => {
    try {

      if (connector.connected) {
        console.log("Connector---", connector);
       
        const conToken = await ercTokenInstance();
        const tokenPrice = await conToken.methods.gettokenPrice().call();
        console.log("TokenPrice:",tokenPrice);
        // const hexValue = tokenPrice.toString(16);
        // console.log("HexValue",hexValue);
        // const decimalValue = parseInt(hexValue, 16);
        // console.log("Decimal Value",decimalValue);
        setTokenPrice(tokenPrice);
      }
    } catch (err) {
      console.log("Hello---",err);
    }
  };

  useEffect(() => {
    setTknAmtResult(
      numOfTokens ? (tokenPrice * numOfTokens) / Math.pow(10, 18) : "0"
    );

  }, [numOfTokens]);

  useEffect(() => {
    getTokenPrice();
  });

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
                  keyboardType="numeric"
                  style={styles.input_box}
                  placeholder="Enter number of tokens"
                  value={numOfTokens}
                  onChangeText={(text) => setNumOfTokens(text)}
                />
              </View>
            </View>

            <View style={styles.view_data2_row1}>
              <View>
                <Text style={styles.text_data}>Total amount</Text>
              </View>
              <View>
                <Text
                  style={styles.input_box}
                >{tknAmtResult + " ETH"}</Text>
              </View>
            </View>

            <View style={styles.view_button}>
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
                width: responsiveWidth(50),
                marginVertical: "2%",
                marginBottom: "10%",
              }}
              onPress={ercTokenFunc}
            ></Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
