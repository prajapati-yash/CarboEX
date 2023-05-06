import "react-native-gesture-handler";
import "./global";

import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerContent } from "./pages/DrawerContent";
import Calculator from "./pages/Calculator";
import HomeScreen from "./pages/HomeScreen";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { Image, StyleSheet, View, StatusBar } from "react-native";
import Resources from "./pages/ResourcesScreen";
import { TotalSum } from "./components/emissionCalculate";
import ProposalDetails from "./pages/proposalDetails";
import SignUP from "./pages/signUP";
import UploadCertificate from "./pages/uploadCertificate";
import SellCredits from "./pages/sellCredits";
import BecomeMember from "./pages/becomeMember";
import ProposalDashboard from "./pages/proposalDashboard";
import BuyTokensDashboard from "./pages/buyTokensDashboard";
import ProfileDetails from "./pages/profileDetails";
import { LogBox } from "react-native";

const Drawer = createDrawerNavigator();
LogBox.ignoreAllLogs();

export default function App() {
  console.warn = () => {};
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#000000" />
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  width: 130,
                  height: 70,
                  marginLeft: -19,
                  marginTop: -6,
                }}
                source={require("./assets/carboex.png")}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Resources"
          component={Resources}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  width: 130,
                  height: 70,
                  marginLeft: -19,
                  marginTop: -6,
                }}
                source={require("./assets/carboex.png")}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Calculator"
          component={Calculator}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  width: 130,
                  height: 70,
                  marginLeft: -19,
                  marginTop: -6,
                }}
                source={require("./assets/carboex.png")}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="ContactUs"
          component={ContactUs}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  width: 130,
                  height: 70,
                  marginLeft: -19,
                  marginTop: -6,
                }}
                source={require("./assets/carboex.png")}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="AboutUs"
          component={AboutUs}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  width: 130,
                  height: 70,
                  marginLeft: -19,
                  marginTop: -6,
                }}
                source={require("./assets/carboex.png")}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="uploadCertificate"
          component={UploadCertificate}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  width: 130,
                  height: 70,
                  marginLeft: -19,
                  marginTop: -6,
                }}
                source={require("./assets/carboex.png")}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="SignUP"
          component={SignUP}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  width: 130,
                  height: 70,
                  marginLeft: -19,
                  marginTop: -6,
                }}
                source={require("./assets/carboex.png")}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="SellCredits"
          component={SellCredits}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  width: 130,
                  height: 70,
                  marginLeft: -19,
                  marginTop: -6,
                }}
                source={require("./assets/carboex.png")}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="BecomeMember"
          component={BecomeMember}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  width: 130,
                  height: 70,
                  marginLeft: -19,
                  marginTop: -6,
                }}
                source={require("./assets/carboex.png")}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="ProposalDashboard"
          component={ProposalDashboard}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  width: 130,
                  height: 70,
                  marginLeft: -19,
                  marginTop: -6,
                }}
                source={require("./assets/carboex.png")}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="proposalDetails"
          component={ProposalDetails}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  width: 130,
                  height: 70,
                  marginLeft: -19,
                  marginTop: -6,
                }}
                source={require("./assets/carboex.png")}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="BuyTokensDashboard"
          component={BuyTokensDashboard}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  width: 130,
                  height: 70,
                  marginLeft: -19,
                  marginTop: -6,
                }}
                source={require("./assets/carboex.png")}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="ProfileDetails"
          component={ProfileDetails}
          options={{
            headerTitle: () => (
              <Image
                style={{
                  width: 130,
                  height: 70,
                  marginLeft: -19,
                  marginTop: -6,
                }}
                source={require("./assets/carboex.png")}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
