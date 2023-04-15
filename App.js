import "./global";

import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerContent } from "./pages/DrawerContent";
import Calculator from "./pages/Calculator";
import HomeScreen from "./pages/HomeScreen";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { Image, StyleSheet } from "react-native";
import Resources from "./pages/ResourcesScreen";
import { TotalSum } from "./Api/emissionCalculate";
import BuyCredit from "./pages/BuyCredit";
import SellCredit from "./pages/SellCredit";
import ProposalDetails from "./pages/proposalDetails";
import SignUP from "./pages/signUP";
import UploadCertificate from "./pages/uploadCertificate";
import SellCredits from "./pages/sellCredits";
import BecomeMember from "./pages/becomeMember";
import ProposalDashboard from "./pages/proposalDashboard";
import BuyTokensDashboard from "./pages/buyTokensDashboard";
import ProfileDetails from "./pages/profileDetails";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
          name="signUP"
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
          name="sellCredits"
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
        <Drawer.Screen name="BuyCredit" component={BuyCredit} />
        <Drawer.Screen name="SellCredit" component={SellCredit} />
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
