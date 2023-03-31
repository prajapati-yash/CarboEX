import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerContent } from "./pages/DrawerContent";
import Calculator from "./pages/Calculator";
import HomeScreen from "./pages/HomeScreen";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import { Image } from "react-native";
import Resource from "./pages/ResourcesScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <DrawerContent {...props} />}
      >
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
          name="Resource"
          component={Resource}
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
          name="BuyCredit"
          component={BuyCredit}
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
