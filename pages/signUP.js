import * as React from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  TextInput,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import styles from "../style/signUPStyle";
import { Button, Stack } from "@rneui/themed";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { companyInstance } from "../components/contract";
import { useNavigation } from "@react-navigation/native";
import ProfileDetails from "./profileDetails";
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import * as ImagePicker from "expo-image-picker";

const select_country = [
  { label: "United States", value: "United States" },
  { label: "Canada", value: "Canada" },
  { label: "United Kingdom", value: "United Kingdom" },
  { label: "Australia", value: "Australia" },
  { label: "Other", value: "Other" },
];

export default function SignUP() {
  const navigation = useNavigation();

  const [countryIsFocus, countrySetIsFocus] = useState(false);
  const [countryValue, countrySetValue] = useState("");
  const [firstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
      uploadImage(result.uri);
    }
  };

  const uploadImage = async (uri) => {
    let formData = new FormData();
    formData.append("file", {
      uri,
      name: "image.jpg",
      type: "image/jpeg",
    });

    let response = await fetch("https://api.web3.storage/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${
          eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
            .eyJzdWIiOiJkaWQ6ZXRocjoweDkxMzhEYjc0ZDliOTIxOWRFMjc0ZEI1ZDRmNTQ0YjYwOUUyNjE0NDYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODE3MjcwOTI1NjYsIm5hbWUiOiJDYXJib0V4In0
            .S8bfLoh - AAzgMW9UXfU21OgdMxNgCwv7Z8ugact3_FY
        }`,
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });

    let data = await response.json();
    console.log("data.cids : ", data.cid);
  };

  const createUserAccount = async () => {
    try {
      // setbtnloading(true);
      const cids = data.cid;
      console.log("cids createUserAcount: ", cids);
      const { connector } = useWalletConnect();

      if (!connector.connected) {
        console.log("WalletConnect not connected");
        return;
      }

      const con = await companyInstance();
      console.log("con cids ", cids);
      const tx = await con.setUser(
        firstName,
        username,
        countryValue,
        email,
        companyName,
        cids
      );

      console.log("tx: ", tx);
      await tx.wait();
      // setbtnloading(false);
      navigation.navigate(ProfileDetails);
      console.log("con: ", con);
    } catch (error) {
      console.log("error: ", error);
      // setbtnloading(false);
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

              {image && (
                <Image
                  source={{ uri: image }}
                  style={{ width: 200, height: 200 }}
                />
              )}
              <Button title="Pick an image" onPress={pickImage} />

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
