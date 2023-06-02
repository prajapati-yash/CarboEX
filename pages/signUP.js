import * as React from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
  ToastAndroid,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import styles from "../style/signUPStyle";
import { Button, Stack } from "@rneui/themed";
import { responsiveWidth } from "react-native-responsive-dimensions";
import * as ImagePicker from "expo-image-picker";
import { COMPANY_ADDRESS, companyInstance } from "../components/contract";
import { useNavigation } from "@react-navigation/native";
import ProfileDetails from "./profileDetails";
import { connector } from "../components/WalletConnectExperience";
import Web3 from "web3";

const select_country = [
  { label: "United States", value: "United States" },
  { label: "Canada", value: "Canada" },
  { label: "United Kingdom", value: "United Kingdom" },
  { label: "Australia", value: "Australia" },
  { label: "Other", value: "Other" },
];

let imageUri = "";

export default function SignUP() {
  const navigation = useNavigation();

  const [countryIsFocus, countrySetIsFocus] = useState(false);
  const [countryValue, countrySetValue] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    imageUri = result.assets[0].uri;
    console.log("pickImage uri: ", imageUri);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    console.log("Uploading Image");
    let formData = new FormData();
    formData.append("file", {
      uri: imageUri,
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

  const createUserAccount = async () => {
    try {
      console.log(connector.accounts[0]);
      const cids = await uploadImage();
      console.log("cids createUserAccount: ", cids);
      // console.log(connector.connected);

      if (connector.connected) {
        console.log("Connector---", connector);
        const provider = new Web3("https://pre-rpc.bt.io/");

        console.log("Company Instance");
        const con = await companyInstance();
        console.log("con cids ", cids);
        const txObject = await con.methods
          .setUser(firstName, username, companyName, email, countryValue, cids)
          .encodeABI();

        const gasPrice = await provider.eth.getGasPrice();
        const recipient = COMPANY_ADDRESS; // replace with recipient address
        const nonce = await provider.eth.getTransactionCount(
          connector.accounts[0],
          "pending"
        );
        const txOptions = {
          gasPrice, 
          from: connector.accounts[0],
          to: recipient,
          data: txObject,
          nonce,
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
        navigation.navigate("ProfileDetails");
      }
    } catch (error) {
      console.log("error: ", error);
      ToastAndroid.show("Transaction Failed", ToastAndroid.LONG);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={styles.image1}
          source={require("../assets/signUpAssets/BG1.png")}
        >
          <ImageBackground
            style={styles.image2}
            borderRadius={50}
            source={require("../assets/signUpAssets/BG2.png")}
          >
            <View style={styles.headerView}>
              <Text style={styles.headerViewText}>CARBOEX</Text>
            </View>

            <View style={styles.bodyView}>
              <TextInput
                style={styles.input_box}
                selectionColor="white"
                placeholder="First Name"
                placeholderTextColor="#fff"
                value={firstName}
                onChangeText={(text) => setFirstName(text)}
              />
              <TextInput
                style={styles.input_box}
                selectionColor="white"
                placeholder="Username"
                placeholderTextColor="#fff"
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
              <TextInput
                style={styles.input_box}
                selectionColor="white"
                placeholder="Company Name"
                placeholderTextColor="#fff"
                value={companyName}
                onChangeText={(text) => setCompanyName(text)}
              />
              <TextInput
                style={styles.input_box}
                selectionColor="white"
                placeholder="Email"
                placeholderTextColor="#fff"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <Dropdown
                style={[
                  styles.dropdownStyle,
                  countryIsFocus && {
                    borderColor: "white",
                  },
                ]}
                data={select_country}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={
                  !countryIsFocus ? (
                    <Text style={{ color: "white" }}>Select country</Text>
                  ) : (
                    "..."
                  )
                }
                searchPlaceholder="Search..."
                selectionColor="white"
                value={countryValue}
                onFocus={() => countrySetIsFocus(true)}
                onBlur={() => countrySetIsFocus(false)}
                onChange={(item) => {
                  countrySetValue(item.value);
                  countrySetIsFocus(false);
                }}
              />
              <View
                style={{
                  alignItems: "center",
                }}
              >
                {image && (
                  <Image
                    source={{ uri: image }}
                    style={{ width: 100, height: 70 }}
                  />
                )}
                <Button
                  title="Pick an image"
                  onPress={pickImage}
                  containerStyle={{
                    width: responsiveWidth(50),
                    marginHorizontal: "12%",
                    marginTop: "4%",
                  }}
                />
              </View>

              <Button
                title="Create"
                loading={false}
                loadingProps={{ size: "small", color: "white" }}
                buttonStyle={{
                  backgroundColor: "#fff",
                  borderRadius: 20,
                }}
                titleStyle={{
                  fontSize: 23,
                  color: "#000",
                }}
                containerStyle={{
                  width: responsiveWidth(50),
                  marginHorizontal: "12%",
                  marginTop: "4%",
                  // marginBottom: "10%",
                }}
                onPress={createUserAccount}
              />
            </View>
          </ImageBackground>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
