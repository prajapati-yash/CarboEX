import * as React from "react";
import { Text, View, ScrollView, TextInput, Image } from "react-native";
import styles from "../style/uploadCertificateStyle";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Button, Stack } from "@rneui/themed";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import * as DocumentPicker from "expo-document-picker";

const select_domain = [
  { label: "Carbon offset", value: "Carbon offset" },
  { label: "Carbon Emission", value: "Carbon Emission" },
];

export default function UploadCertificate() {
  const [domainIsFocus, domainSetIsFocus] = useState(false);
  const [domainValue, domainSetValue] = useState(null);

  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});

    alert(result.uri);

    console.log(result);
  };

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
              {/* <TextInput
                // value={teText}
                style={styles.input_box}
                // onChangeText={(teText) => {
                //   teSetText(teText);
                // }}
              /> */}

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
                  //   marginLeft: "12%",
                  width: responsiveWidth(50),
                  marginVertical: "3%",
                }}
                onPress={this._pickDocument}
              />

              {/* <Button
                title="Select Document"
                style={styles.document_upload_button}
                onPress={this._pickDocument}
              /> */}

              <Text style={styles.input_text}>Select your domain</Text>

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
                value={domainValue}
                onFocus={() => domainSetIsFocus(true)}
                onBlur={() => domainSetIsFocus(false)}
                onChange={(item) => {
                  domainSetValue(item.value);
                  domainSetIsFocus(false);
                }}
              />

              {/* <TextInput
                // value={teText}
                style={styles.input_box}
                // onChangeText={(teText) => {
                //   teSetText(teText);
                // }}
              /> */}

              <Text style={styles.input_text}>
                Enter the value of your emission/offset
              </Text>
              <TextInput
                // value={teText}
                style={styles.input_box}
                placeholder="Enter the value in tons"
                // onChangeText={(teText) => {
                //   teSetText(teText);
                // }}
              />

              <Text style={styles.input_text}>
                FOR PROPOSAL (Enter your details)
              </Text>
              {/* <TextInput
                // value={teText}
                style={styles.input_box}
                // onChangeText={(teText) => {
                //   teSetText(teText);
                // }}
              /> */}
              <View style={styles.textAreaContainer}>
                <TextInput
                  style={styles.textArea}
                  underlineColorAndroid="transparent"
                  placeholder="Type something"
                  placeholderTextColor="grey"
                  numberOfLines={6}
                  multiline={true}
                  onChangeText={(text) =>
                    setInputData({ ...inputData, message: text })
                  }
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
                  //   marginLeft: "12%",
                  width: responsiveWidth(30),
                  marginVertical: "3%",
                }}
                onPress={() => console.log("aye")}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
