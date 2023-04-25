import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "../style/proposalDetailsStyle";
import { Button, Dialog } from "@rneui/themed";
import { responsiveWidth } from "react-native-responsive-dimensions";
// import { useRoute } from "@react-navigation/native";
import { DAO_MEMBER_ADDRESS, daoInstance } from "../components/contract";
import { connector } from "../components/WalletConnectExperience";
import Web3 from "web3";

export default function ProposalDetails({ route }) {
  const [visible1, setVisible1] = useState(null);
  const [downvoteProposal, setDownvoteProposal] = useState();
  const toggleDialog = () => {
    // setSelectedImage(null);
    setVisible1();
  };
  // const route = useRoute();
  console.log("route data", route.params.state.data);
  const proposal = route.params.state ? route.params.state.data : "";

  const proposalData = {
    id: proposal[0],
    name: proposal[3] ? "Emission" : "Offset",
    publicAddress: proposal[5],
    summary: proposal[1],
    certificateImage: "https://ipfs.io/ipfs/" + proposal[2],
    // type: "Type Name",
    value: proposal[4],
  };

  const daoProposalApprove = async () => {
    try {
      if (connector.connected) {
        console.log("Connector---", connector);
        const provider = new Web3("https://pre-rpc.bt.io/");

        const con = await daoInstance();
        const value = await con.methods.getConfigs().call();
        console.log(proposal[0]);
        console.log(value[1]);
        // console.log(connector.accounts[0]);
        const upvoteProposal = await con.methods
          .upvote(proposal[0])
          .encodeABI();
        // console.log(upvoteProposal)
        const gasPrice = await provider.eth.getGasPrice();
        const gasLimit = 3000000;
        const recipient = DAO_MEMBER_ADDRESS; // replace with recipient address
        const nonce = await provider.eth.getTransactionCount(
          connector.accounts[0],
          "pending"
        );
        let value1 = value[1].toString();
        let value2 = connector.accounts[0];
        const txOptions = {
          gasPrice,
          gasLimit,
          from: connector.accounts[0],
          to: recipient,
          data: upvoteProposal,
          nonce,
          value: [value1, value2],
          // value: connector.accounts[0],
        };

        console.log("After txOptions");
        console.log("connector transaction", connector);
        const signTx = await connector.sendTransaction(txOptions);
        console.log("signTx: ", signTx);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const daoProposalReject = async () => {
    try {
      if (connector.connected) {
        console.log("Connector---", connector);
        const provider = new Web3("https://pre-rpc.bt.io/");

        const con = await daoInstance();
        const value = await con.methods.getConfigs().call();
        console.log(proposal[0]);
        console.log(value[1]);
        // console.log(connector.accounts[0]);
        const downvoteProposal = await con.methods
          .downvote(proposal[0])
          .encodeABI();
        // console.log(upvoteProposal)
        const gasPrice = await provider.eth.getGasPrice();
        const gasLimit = 3000000;
        const recipient = DAO_MEMBER_ADDRESS; // replace with recipient address
        const nonce = await provider.eth.getTransactionCount(
          connector.accounts[0],
          "pending"
        );
        const txOptions = {
          gasPrice,
          gasLimit,
          from: connector.accounts[0],
          to: recipient,
          data: downvoteProposal,
          nonce,
          value: [value[1], connector.accounts[0]].toString(),
          // value: connector.accounts[0],
        };

        console.log("After txOptions");
        console.log("connector transaction", connector);
        const signTx = await connector.sendTransaction(txOptions);
        console.log("signTx: ", signTx);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.centered_view}>
          <View style={styles.mainBox}>
            <View style={styles.boxHeader}>
              <Text style={styles.header_text}>ACTIVE</Text>
            </View>
            <View style={styles.boxBody}>
              <Text style={styles.input_text}>Type</Text>
              <Text style={styles.input_box}>{proposalData.name}</Text>

              <Text style={styles.input_text}>Public Address</Text>
              <Text style={styles.input_box}>{proposalData.publicAddress}</Text>

              <Text style={styles.input_text}>Summary</Text>
              <Text style={styles.input_box}>{proposalData.summary}</Text>

              <Text style={styles.input_text}>Certificate</Text>
              <TouchableOpacity onPress={() => toggleDialog()}>
                <Image
                  source={{ uri: proposalData.certificateImage }}
                  // source={require("../assets/calculatorAssets/HomeBg.jpg")}
                  style={{
                    width: 80,
                    height: 80,
                    marginVertical: 10,
                    marginLeft: "6%",
                  }}
                ></Image>
              </TouchableOpacity>
              <Dialog
                isVisible={visible1}
                onBackdropPress={() => setVisible1(null)}
              >
                <Dialog.Title title="Your Certificate" />
                <View style={{height: 300, alignItems: "center", justifyContent: "center"}}>
                <Image
                  // source={require("../assets/calculatorAssets/HomeBg.jpg")}
                  source={{ uri: proposalData.certificateImage }}
                  style={{
                    width: "100%",
                    height: "80%",
                    resizeMode: "contain",
                  }}
                ></Image></View>
              </Dialog>

              <Text style={styles.input_text}>Value of offset</Text>
              <Text style={styles.input_box}>{proposalData.value}</Text>
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
                onPress={daoProposalApprove}
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
                onPress={daoProposalReject}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
