import * as React from "react";
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  ToastAndroid,
} from "react-native";
import styles from "../style/uploadCertificateStyle";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Button, Stack, Dialog } from "@rneui/themed";
import { responsiveWidth } from "react-native-responsive-dimensions";
import * as DocumentPicker from "expo-document-picker";
import ProposalDashboard from "./proposalDashboard";
import { daoInstance, DAO_MEMBER_ADDRESS } from "../components/contract";
import Web3 from "web3";
import { useNavigation } from "@react-navigation/native";
import { connector } from "../components/WalletConnectExperience";

const select_domain = [
  { label: "Carbon Offset", value: "Carbon offset" },
  { label: "Carbon Emission", value: "Carbon Emission" },
];

let documentUri = "";

export default function UploadCertificate() {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [certificate, setCertificate] = useState(null);
  const [emission, setEmission] = useState(null);
  const [proposal, setProposal] = useState(null);
  const [domainIsFocus, domainSetIsFocus] = useState(false);
  const [domain, setDomain] = useState(false);
  const [fileName, setFileName] = useState("");
  const [btndisable, setbtndisable] = useState(false);

  const [visible1, setVisible1] = useState(null);
  const toggleDialog = () => {
    setVisible1();
  };

  // const handleSubmit = () => {
  //   console.log("Certificate", certificate);
  //   console.log("Domain:", domain);
  //   console.log("Emission Value:", emission);
  //   console.log("Proposal Value:", proposal);
  // };

  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    let uriParts = result.uri.split("/");
    let filename = uriParts[uriParts.length - 1];
    setCertificate(result.uri);
    setFileName(filename);
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
      console.log("Domain:", domain);
      if (
        certificate === "" ||
        domain === "" ||
        emission === "" ||
        proposal === ""
      ) {
        alert("Enter The Required Details");
      } else {
        setIsLoading(true);
        const c = await uploadImage();
        const cids = c;
        console.log("Cids :", cids);
        if (connector.connected) {
          console.log("Connector---", connector);
          const provider = new Web3("https://pre-rpc.bt.io/");

          const conDAO = await daoInstance();
          console.log("conDAO : ", conDAO);
          const value = await conDAO.methods.getConfigs().call();
          console.log("Value : ", value);
          console.log(proposal, cids, domain, emission);
          console.log(value[0]);
          const isDAOMember = await conDAO.methods
            .isMemberMapping(connector.accounts[0])
            .call();
          console.log("isDaoMember: ", isDAOMember);
          const CPTx = await conDAO.methods
            .createProposal(proposal, cids, domain, emission)
            .encodeABI();
          console.log("CPTx : ", CPTx);

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
            value: value[0].toString(),
          };

          console.log("After txOptions");
          console.log("connector transaction", connector);
          const signTx = await connector.sendTransaction(txOptions);
          const finalTx = await signTx;
          console.log("signTx: ", signTx);
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
          setIsLoading(false);
          navigation.navigate("ProposalDashboard");
        }
      }
    } catch (error) {
      console.log("Create Proposal Main : ", error);
      ToastAndroid.show("Transaction Failed", ToastAndroid.LONG);
      setIsLoading(false);
    }
  };

  const checkDAOMember = async () => {
    if (connector.connected) {
      const conDAO = await daoInstance();
      const isDAOMember = await conDAO.methods
        .isMemberMapping(connector.accounts[0])
        .call();
      console.log(isDAOMember);
      return isDAOMember;
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.centered_view}>
          <View style={styles.header}>
            <Text style={styles.header_text}>CERTIFICATE VALIDATION</Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Button
              containerStyle={{
                width: responsiveWidth(50),
                marginBottom: "8%",
              }}
              onPress={() => toggleDialog()}
            >
              View Information
            </Button>
          </View>
          <Dialog
            isVisible={visible1}
            onBackdropPress={() => setVisible1(null)}
            height="auto"
          >
            {/* <Dialog.Title title="What is the use of Carbon Emission Calculator?" /> */}
            <View>
              {/* <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text>{"\u2022"}</Text> */}
              <Text style={{ marginTop: "2%" }}>
                {"\u2022"} Please provide all the details to verify the
                certificate.
              </Text>
              {/* </View> */}
              <Text style={{ marginTop: "4%" }}>
                {"\u2022"} Once the user submits the certificate details, the
                DAO members on the platform will review and validate the
                certificate.
              </Text>
              <Text style={{ marginTop: "4%" }}>
                {"\u2022"} If the certificate is found to be authentic and
                compliant with relevant standards and regulations, it will be
                approved.
              </Text>
            </View>
          </Dialog>

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
              <Text style={styles.input_box_image}>
                {"Uploaded File: " + fileName}
              </Text>

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
                  if (item.value === "Carbon Emission") {
                    setDomain(true);
                  } else if (item.value == "Carbon Offset") {
                    setDomain(false);
                  }
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
                disabled={btndisable}
                title={isLoading ? "Loading..." : "SUBMIT"}
                loading={isLoading}
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
                onPress={async () => {
                  console.log("Button CLicked");
                  const isAllowed = await checkDAOMember();
                  console.log(isAllowed);
                  if (!isAllowed) {
                    setbtndisable(false);
                    ToastAndroid.show(
                      "You are not DAO member",
                      ToastAndroid.LONG
                    );
                  } else {
                    createProposalMain();
                  }
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
