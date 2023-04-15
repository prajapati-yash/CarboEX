import * as React from "react";
import {
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
import * as DocumentPicker from "expo-document-picker";

const select_country = [
  { label: "United States", value: "Carbon offset" },
  { label: "Canada", value: "Carbon Emission" },
  { label: "United Kingdom", value: "United Kingdom" },
  { label: "Australia", value: "Australia" },
  { label: "Other", value: "Other" },
];

export default function SignUP() {
  const [countryIsFocus, countrySetIsFocus] = useState(false);
  const [countryValue, countrySetValue] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [username, setUsername] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [logo, setLogo] = useState("");

  const handleCreate = () => {
    console.log("First Name", firstName);
    console.log("User Name:", username);
    console.log("Company Name:", companyName);
    console.log("Email:", email);
    console.log("Logo:", logo);
  };

  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    setLogo(result.uri);
    alert(result.uri);
    console.log(result);
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
                    // placeholderTextColor: "white",
                  },
                ]}
                data={select_country}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!countryIsFocus ? <Text style={{color: "white"}}>Select country</Text> : "..."}
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
              <Button
                title="Upload Logo"
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
                  marginHorizontal: "12%",
                }}
                onPress={this._pickDocument}
              />
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
                onPress={handleCreate}
              />
            </View>
          </ImageBackground>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
