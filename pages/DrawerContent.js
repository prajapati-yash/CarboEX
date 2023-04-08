import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={[styles.userInfoSection, { flexDirection: "row" }]}>
            <View
              style={{
                marginTop: 15,
              }}
            >
              <Avatar.Image source={require("../assets/profile.jpg")} />
            </View>
            <View style={{ marginLeft: 9, marginTop: 15 }}>
              <Title style={styles.title}>UserName</Title>
              <Caption style={styles.caption}>@UserId</Caption>
            </View>
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
              label="Resource"
              onPress={() => {
                props.navigation.navigate("Resource");
              }}
            />
            {/* <DrawerItem
              label="Calculator"
              onPress={() => {
                props.navigation.navigate("Calculator");
              }}
            /> */}
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
            <DrawerItem label="Become a member" />
            <DrawerItem label="Proposal Dashboard" />
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
            <DrawerItem label="" />
          </Drawer.Section>

          <Drawer.Section
            style={{ flex: 1, marginTop: 8, flexDirection: "row" }}
          >
            <FontAwesome5 name={"facebook"} size={30} marginLeft={20} />
            <FontAwesome5 name={"twitter"} size={30} marginLeft={20} />
            <FontAwesome5 name={"globe"} size={30} marginLeft={20} />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  userInfoSection: {
    backgroundColor: "#BAD7E9",
    height: 100,
  },
});
