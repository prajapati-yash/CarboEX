import * as React from "react";
import { Text, View, ScrollView, TextInput, Image } from "react-native";
import styles from "../style/uploadCertificateStyle";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Button, Stack } from "@rneui/themed";
import { responsiveWidth } from "react-native-responsive-dimensions";
import * as DocumentPicker from "expo-document-picker";
import ProposalDashboard from "./proposalDashboard";
import { daoInstance,DAO_MEMBER_ADDRESS } from "../components/contract";
import Web3 from "web3";
import { useNavigation } from "@react-navigation/native";
import { connector } from "../components/WalletConnectExperience";

const select_domain = [
  { label: "Carbon offset", value: "Carbon offset" },
  { label: "Carbon Emission", value: "Carbon Emission" },
];

let documentUri ="";

export default function UploadCertificate() {
  const navigation = useNavigation();

  const [certificate, setCertificate] = useState(null);
  const [emission, setEmission] = useState(null);
  const [proposal, setProposal] = useState(null);
  const [domainIsFocus, domainSetIsFocus] = useState(false);
  const [domain, setDomain] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleSubmit = () => {
    console.log("Certificate", certificate);
    console.log("Domain:", domain);
    console.log("Emission Value:", emission);
    console.log("Proposal Value:", proposal);
  };

  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    let uriParts = result.uri.split('/');
    let filename = uriParts[uriParts.length - 1];
    setCertificate(result.uri);
    setFileName(filename)
    console.log(result);
    documentUri = result.uri;
  };

  const uploadImage = async () => {
    console.log("Uploading Image");
    let formData = new FormData();
    formData.append("file", {
      uri: documentUri,
      name: "image.jpg",
      type: "image/jpeg",
    });

    let response = await fetch("https://api.web3.storage/upload", {
      method: "POST",
      // responseType: "json",
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkxMzhEYjc0ZDliOTIxOWRFMjc0ZEI1ZDRmNTQ0YjYwOUUyNjE0NDYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODE4MjI3NTk5MTgsIm5hbWUiOiJDYXJib0V4In0.yq_pJuHSPlUB6fsecby-JnZwy9RDtjoT1sfPwJBikEA"}`,
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });

    let data = await response.json();
    console.log("data.cids : ", data.cid);
    return data.cid;
  };

  const createProposalMain = async () => {
    try {
      console.log("Domain:",domain)
      if (certificate === '' || domain === '' || emission === '' || proposal === '') {
      alert("Enter The Required Details")
      } else {
        const c = await uploadImage();
        const cids = c;
        console.log("Cids :",cids);
        if (connector.connected) {
          console.log("Connector---", connector);
          const provider = new Web3("https://pre-rpc.bt.io/");
         
          const conDAO = await daoInstance();
          console.log("conDAO : ",conDAO);
          const value = await conDAO.methods.getConfigs().call();
          console.log("Value : ",value);
          console.log(proposal, cids, domain, emission);
          const CPTx = await conDAO.methods.createProposal(proposal, cids, domain, emission).encodeABI();
          console.log("CPTx : ",CPTx);
  
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
            data: CPTx,
            nonce,
          };
  
          console.log("After txOptions");
          console.log("connector transaction", connector);
          const signTx = await connector.sendTransaction(txOptions);
          const finalTx = await signTx;
          console.log(finalTx);
          navigation.navigate(ProposalDashboard);
        }
      }
    } catch (error) {
      console.log("Create Proposal Main : ",error);
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.centered_view}>
          <View style={styles.header}>
            <Text style={styles.header_text}>Upload Certificate</Text>
          </View>
          <View style={styles.mainBox}>
            <View style={styles.boxBody}>
              <Text style={styles.input_text}>Upload your certificate</Text>
              <Button
                title="Upload Certificate"
                loading={false}
                loadingProps={{ size: "small", color: "white" }}
                buttonStyle={{
                  backgroundColor: "#1ba1b3",
                  borderRadius: 10,
                }}
                titleStyle={{ fontWeight: "bold", fontSize: 17 }}
                containerStyle={{
                  width: responsiveWidth(50),
                  marginVertical: "3%",
                }}
                onPress={this._pickDocument}
              />

              {/* <Text style={styles.text_data}>Uploaded Certificate</Text> */}
              <Text
                  style={styles.input_box_image}
                >{"Uploaded File: "+fileName}</Text>

              <Dropdown
                style={[
                  styles.dropdownStyle,
                  domainIsFocus && { borderColor: "black" },
                ]}
                data={select_domain}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!domainIsFocus ? "Select Your Domain" : "..."}
                searchPlaceholder="Search..."
                value={domain}
                onFocus={() => domainSetIsFocus(true)}
                onBlur={() => domainSetIsFocus(false)}
                onChange={(item) => {
                  setDomain(item.value);
                  domainSetIsFocus(false);
                }}
              />

              <Text style={styles.input_text}>
                Enter the value of your emission/offset
              </Text>
              <TextInput
              keyboardType="numeric"
                style={styles.input_box}
                placeholder="Enter the value in tons"
                onChangeText={(text) => setEmission(text)}
              />

              <Text style={styles.input_text}>
                FOR PROPOSAL (Enter your details)
              </Text>
              <View style={styles.textAreaContainer}>
                <TextInput
                  style={styles.textArea}
                  underlineColorAndroid="transparent"
                  placeholder="Type something"
                  placeholderTextColor="grey"
                  numberOfLines={6}
                  multiline={true}
                  onChangeText={(text) => setProposal(text)}
                />
              </View>
            </View>

            <View style={{ alignItems: "center" }}>
              <Button
                title="Submit"
                loading={false}
                loadingProps={{ size: "small", color: "white" }}
                buttonStyle={{
                  backgroundColor: "#1ba1b3",
                  borderRadius: 5,
                }}
                titleStyle={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 23,
                }}
                containerStyle={{
                  width: responsiveWidth(30),
                  marginVertical: "3%",
                }}
                onPress={createProposalMain}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
