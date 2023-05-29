import "../global";
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import WalletConnectProvider from "@walletconnect/react-native-dapp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WalletConnectExperience from "../components/WalletConnectExperience";
import { companyInstance } from "../components/contract";
import { connector } from "../components/WalletConnectExperience";
import Icon from "react-native-vector-icons/FontAwesome";

const SCHEME_FROM_APP_JSON = "walletconnect-example";

const verifyUserAccount = async () => {
  try {
    if (!connector.connected) {
      console.log("WalletConnect not connected");
      return;
    }

    let con = await companyInstance();
    console.log("Wallet Address", connector.accounts[0]);
    let verifyTx = await con.methods
      .isCompaniesAddMapping(connector.accounts[0])
      .call();

    console.log("VerifyTx: ", verifyTx);
    return verifyTx;
  } catch (error) {
    console.log("Error:", error);
  }
  return verifyTx;
};

export function DrawerContent(props) {
  const [showSubMenusKnowMore, setShowSubMenusKnowMore] = useState(false);

  const toggleSubMenusKnowMore = () => {
    setShowSubMenusKnowMore(!showSubMenusKnowMore);
  };

  const [showSubMenusMember, setShowSubMenusMember] = useState(false);

  const toggleSubMenusMember = () => {
    setShowSubMenusMember(!showSubMenusMember);
  };

  const [showSubMenusOurApproach, setShowSubMenusOurApproach] = useState(false);

  const toggleSubMenusOurApproach = () => {
    setShowSubMenusOurApproach(!showSubMenusOurApproach);
  };

  const [isSignedIn, setIsSignedIn] = useState(false);

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
      console.log("Hello----", error);
    }
  };

  useEffect(() => {
    verifyNavbar();
  });

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
                  </View>
                </WalletConnectProvider>
              </View>
              <Drawer.Section style={{ flex: 1, marginTop: 8 }}>
                <DrawerItem
                  label="Home"
                  onPress={() => {
                    props.navigation.navigate("Home");
                  }}
                  labelStyle={{ color: "black" }}
                />

                <DrawerItem
                  label="Contact Us"
                  onPress={() => {
                    props.navigation.navigate("ContactUs");
                  }}
                  labelStyle={{ color: "black" }}
                />

                <DrawerItem
                  label={() => (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ flex: 1 }}>Know More</Text>
                      <Icon
                        name={showSubMenusKnowMore ? "angle-up" : "angle-down"}
                      />
                    </View>
                  )}
                  onPress={toggleSubMenusKnowMore}
                />

                {showSubMenusKnowMore && (
                  <DrawerItem
                    label="Resources"
                    onPress={() => {
                      props.navigation.navigate("Resources");
                    }}
                  />
                )}

                {showSubMenusKnowMore && (
                  <DrawerItem
                    label="About Us"
                    onPress={() => {
                      props.navigation.navigate("AboutUs");
                    }}
                  />
                )}
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
                  labelStyle={{ color: "black" }}
                />

                <DrawerItem
                  label="Contact Us"
                  onPress={() => {
                    props.navigation.navigate("ContactUs");
                  }}
                  labelStyle={{ color: "black" }}
                />

                <DrawerItem
                  label={() => (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ flex: 1 }}>Know More</Text>
                      <Icon
                        name={showSubMenusKnowMore ? "angle-up" : "angle-down"}
                      />
                    </View>
                  )}
                  onPress={toggleSubMenusKnowMore}
                />

                {showSubMenusKnowMore && (
                  <DrawerItem
                    label="Resources"
                    onPress={() => {
                      props.navigation.navigate("Resources");
                    }}
                  />
                )}

                {showSubMenusKnowMore && (
                  <DrawerItem
                    label="About Us"
                    onPress={() => {
                      props.navigation.navigate("AboutUs");
                    }}
                  />
                )}
              </Drawer.Section>
              <Drawer.Section style={{ flex: 1, marginTop: 8 }}>
                <DrawerItem
                  label="Dashboard"
                  onPress={() => {
                    props.navigation.navigate("ProfileDetails");
                  }}
                  labelStyle={{ color: "black" }}
                />

                <DrawerItem
                  label="Explore"
                  onPress={() => {
                    props.navigation.navigate("BuyTokensDashboard");
                  }}
                  labelStyle={{ color: "black" }}
                />

                <DrawerItem
                  label={() => (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ flex: 1 }}>Member</Text>
                      <Icon
                        name={showSubMenusMember ? "angle-up" : "angle-down"}
                      />
                    </View>
                  )}
                  onPress={toggleSubMenusMember}
                />

                {showSubMenusMember && (
                  <DrawerItem
                    label="Become a Dao member"
                    onPress={() => {
                      props.navigation.navigate("BecomeMember");
                    }}
                  />
                )}

                {showSubMenusMember && (
                  <DrawerItem
                    label="All Proposals"
                    onPress={() => {
                      props.navigation.navigate("ProposalDashboard");
                    }}
                  />
                )}

                <DrawerItem
                  label={() => (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={{ flex: 1 }}>Our Approach</Text>
                      <Icon
                        name={
                          showSubMenusOurApproach ? "angle-up" : "angle-down"
                        }
                      />
                    </View>
                  )}
                  onPress={toggleSubMenusOurApproach}
                />

                {showSubMenusOurApproach && (
                  <DrawerItem
                    label="Add Your Proposal"
                    onPress={() => {
                      props.navigation.navigate("uploadCertificate");
                    }}
                  />
                )}

                {showSubMenusOurApproach && (
                  <DrawerItem
                    label="Calculate Carbon Footprints"
                    onPress={() => {
                      props.navigation.navigate("Calculator");
                    }}
                  />
                )}
              </Drawer.Section>
              <Drawer.Section
                style={{ flex: 1, marginTop: 8, flexDirection: "row" }}
              >
                <TouchableOpacity
                  onPress={() => Linking.openURL("https://www.facebook.com/")}
                >
                  <FontAwesome5 name={"facebook"} size={30} marginLeft={20} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => Linking.openURL("https://twitter.com/")}
                >
                  <FontAwesome5 name={"twitter"} size={30} marginLeft={20} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => Linking.openURL("https://carboex.vercel.app/")}
                >
                  <FontAwesome5 name={"globe"} size={30} marginLeft={20} />
                </TouchableOpacity>
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
    marginTop: "-5%",
  },
});
