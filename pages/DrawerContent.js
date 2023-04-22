import "../global";

import React, { useState, useEffect } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import WalletConnectProvider from "@walletconnect/react-native-dapp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WalletConnectExperience from "../components/WalletConnectExperience";
import { companyInstance } from "../components/contract";
import { connector } from "../components/WalletConnectExperience";

const SCHEME_FROM_APP_JSON = "walletconnect-example";

const verifyUserAccount = async () => {
  try {
    if (!connector.connected) {
      console.log("WalletConnect not connected");
      return;
    }

    let con = await companyInstance();
    console.log("Wallet Address", connector.accounts[0]);
    // console.log("Is Companies Added:",con.iscompaniesAdd());
    // con.options.from = connector.accounts[0]
    let verifyTx = await con.methods
      .iscompaniesAdd(connector.accounts[0])
      .call();

    console.log("VerifyTx: ", verifyTx);
    return verifyTx;
  } catch (error) {
    console.log("Error:", error);
  }
};

export function DrawerContent(props) {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const verifyNavbar = async () => {
    try {
      if (connector.accounts[0]) {
        const tx = await verifyUserAccount();
        if (tx) {
          setIsSignedIn(true);
        } else {
          setIsSignedIn(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyNavbar();
  }, [isSignedIn]);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          {!isSignedIn ? (
            <>
              <View style={[styles.userInfoSection, { flexDirection: "row" }]}>
                <WalletConnectProvider
                  redirectUrl={
                    Platform.OS === "web"
                      ? window.location.origin
                      : `${SCHEME_FROM_APP_JSON}://`
                  }
                  storageOptions={{
                    asyncStorage: AsyncStorage,
                  }}
                >
                  <View style={styles.container}>
                    <WalletConnectExperience />
                    {/* <StatusBar style="auto" />  */}
                  </View>
                </WalletConnectProvider>
              </View>
              <Drawer.Section style={{ flex: 1, marginTop: 8 }}>
                <DrawerItem
                  label="Home"
                  onPress={() => {
                    props.navigation.navigate("Home");
                  }}
                />
                {/* <DrawerItem label="Market" /> */}
                <DrawerItem
                  label="Resources"
                  onPress={() => {
                    props.navigation.navigate("Resources");
                  }}
                />
                <DrawerItem
                  label="Contact Us"
                  onPress={() => {
                    props.navigation.navigate("ContactUs");
                  }}
                />

                <DrawerItem
                  label="About Us"
                  onPress={() => {
                    props.navigation.navigate("AboutUs");
                  }}
                />
              </Drawer.Section>
              <Drawer.Section
                style={{ flex: 1, marginTop: 8, flexDirection: "row" }}
              >
                <FontAwesome5 name={"facebook"} size={30} marginLeft={20} />
                <FontAwesome5 name={"twitter"} size={30} marginLeft={20} />
                <FontAwesome5 name={"globe"} size={30} marginLeft={20} />
              </Drawer.Section>
            </>
          ) : (
            <>
              <View style={[styles.userInfoSection, { flexDirection: "row" }]}>
                <WalletConnectProvider
                  redirectUrl={
                    Platform.OS === "web"
                      ? window.location.origin
                      : `${SCHEME_FROM_APP_JSON}://`
                  }
                  storageOptions={{
                    asyncStorage: AsyncStorage,
                  }}
                >
                  <View style={styles.container}>
                    <WalletConnectExperience />
                    <StatusBar style="auto" />
                  </View>
                </WalletConnectProvider>
              </View>
              <Drawer.Section style={{ flex: 1, marginTop: 8 }}>
                <DrawerItem
                  label="Home"
                  onPress={() => {
                    props.navigation.navigate("Home");
                  }}
                />
                {/* <DrawerItem label="Market" /> */}
                <DrawerItem
                  label="Resources"
                  onPress={() => {
                    props.navigation.navigate("Resources");
                  }}
                />

                <DrawerItem
                  label="Contact Us"
                  onPress={() => {
                    props.navigation.navigate("ContactUs");
                  }}
                />

                <DrawerItem
                  label="About Us"
                  onPress={() => {
                    props.navigation.navigate("AboutUs");
                  }}
                />
              </Drawer.Section>
              <Drawer.Section style={{ flex: 1, marginTop: 8 }}>
                <DrawerItem
                  label="SignUp"
                  onPress={() => {
                    props.navigation.navigate("signUP");
                  }}
                />
                <DrawerItem
                  label="Upload Certificate"
                  onPress={() => {
                    props.navigation.navigate("uploadCertificate");
                  }}
                />

                <DrawerItem
                  label="Proposal Details"
                  onPress={() => {
                    props.navigation.navigate("proposalDetails");
                  }}
                />
                <DrawerItem
                  label="Sell Credits"
                  onPress={() => {
                    props.navigation.navigate("sellCredits");
                  }}
                />

                <DrawerItem
                  label="Become a member"
                  onPress={() => {
                    props.navigation.navigate("BecomeMember");
                  }}
                />
                <DrawerItem
                  label="Proposal Dashboard"
                  onPress={() => {
                    props.navigation.navigate("ProposalDashboard");
                  }}
                />

                <DrawerItem
                  label="Buy Tokens Dashboard"
                  onPress={() => {
                    props.navigation.navigate("BuyTokensDashboard");
                  }}
                />
                <DrawerItem
                  label="Profile Details"
                  onPress={() => {
                    props.navigation.navigate("ProfileDetails");
                  }}
                />
              </Drawer.Section>
              <Drawer.Section
                style={{ flex: 1, marginTop: 8, flexDirection: "row" }}
              >
                <FontAwesome5 name={"facebook"} size={30} marginLeft={20} />
                <FontAwesome5 name={"twitter"} size={30} marginLeft={20} />
                <FontAwesome5 name={"globe"} size={30} marginLeft={20} />
              </Drawer.Section>
            </>
          )}
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  userInfoSection: {
    backgroundColor: "#BAD7E9",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
