import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "../style/profileDetailsStyle";
import { Button, Dialog } from "@rneui/themed";
import {
  responsiveFontSize,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Avatar } from "react-native-elements";

function EditProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerView}
      >
        <View style={styles.mainBox}>
          <View style={styles.boxBody}>
            <View style={styles.profileHeader}>
              <ImageBackground
                style={styles.image1}
                borderTopRightRadius={36}
                borderTopLeftRadius={36}
                source={require("../assets/calculatorAssets/HomeBg.jpg")}
              >
                {/* <Text style={styles.header_text}>Traditional Energy</Text> */}
              </ImageBackground>
            </View>

            <View style={styles.profileBody}>
              <View>
                <Text style={styles.input_text}>Company Name</Text>
                <Text style={styles.input_box} />
              </View>

              <View>
                <Text style={styles.input_text}>Email</Text>
                <Text style={styles.input_box} />
              </View>

              <View>
                <Text style={styles.input_text}>Wallet Address</Text>
                <Text style={styles.input_box} />
              </View>

              <Button
                title="EDIT"
                loading={false}
                loadingProps={{ size: "small", color: "white" }}
                buttonStyle={{
                  backgroundColor: "#5B9C7A",
                  borderRadius: 20,
                }}
                titleStyle={{
                  fontWeight: "bold",
                  fontSize: responsiveFontSize(2.7),
                }}
                containerStyle={{
                  marginHorizontal: "15%",
                  // height: 50,
                  width: responsiveWidth(40),
                  marginVertical: "2%",
                  marginBottom: "5%",
                }}
                onPress={() => console.log("aye")}
              />

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: "12%",
                  marginRight: "12%",
                  //   justifyContent: "center",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text style={styles.input_text}>Credits Available</Text>
                  <Text style={styles.credit_input_box} />
                </View>

                <Button
                  title="SELL"
                  loading={false}
                  type="outline"
                  loadingProps={{ size: "small", color: "white" }}
                  buttonStyle={{
                    //   backgroundColor: "#5B9C7A",
                    borderRadius: 20,
                    borderColor: "#5B9C7A",
                    borderWidth: 2,
                  }}
                  titleStyle={{
                    fontWeight: "bold",
                    fontSize: responsiveFontSize(1.7),
                    color: "#5B9C7A",
                  }}
                  containerStyle={{
                    // marginHorizontal: "5%",
                    // height: 50,
                    width: responsiveWidth(20),
                    //   marginVertical: "2%",
                    marginTop: "4%",
                  }}
                  onPress={() => console.log("aye")}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function MyProposalScreen() {
  const [visible1, setVisible1] = useState(null);
  const toggleDialog = (index) => {
    // setSelectedImage(null);
    setVisible1(index);
  };
  const myProposalData = [
    {
      sr_no: "name1",
      title: "title1",
      image: require("../assets/calculatorAssets/HomeBg.jpg"),
      result: "result1",
      stake: "stake1",
      return_stake: "return stake1",
      credit_issue: "credit issue1",
    },
    {
      sr_no: "name2",
      title: "title2",
      image: require("../assets/calculatorAssets/FuelBg.jpg"),
      result: "result2",
      stake: "stake2",
      return_stake: "return stake2",
      credit_issue: "credit issue2",
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerView}
      >
        <View style={styles.main_view}>
          <Text style={styles.main_view_text}>My Proposal</Text>

          <View style={styles.view_details}>
            <View style={styles.view_proposal_data}>
              {myProposalData.map((proposal, index) => (
                <View style={styles.view_proposal} key={index}>
                  <View style={styles.view_proposal_name}>
                    <Text style={styles.text_proposal_name}>
                      Sr. No: {proposal.sr_no}
                    </Text>
                  </View>
                  <View style={styles.view_proposal_description}>
                    <Text style={styles.text_proposal_description}>
                      Title: {proposal.title}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.view_proposal_description,
                      { flexDirection: "row", alignItems: "center" },
                    ]}
                  >
                    <Text style={styles.text_proposal_description}>Image:</Text>
                    <TouchableOpacity
                      onPress={() => toggleDialog(index)}
                      key={index}
                    >
                      <Image
                        source={proposal.image}
                        // source={require("../assets/calculatorAssets/HomeBg.jpg")}
                        style={{
                          width: 80,
                          height: 80,
                          marginVertical: 10,
                          marginLeft: "6%",
                        }}
                      ></Image>
                    </TouchableOpacity>
                    <Dialog
                      isVisible={visible1 === index}
                      onBackdropPress={() => setVisible1(null)}
                    >
                      <Dialog.Title title="Your proposal image" />
                      <Image
                        // source={require("../assets/calculatorAssets/HomeBg.jpg")}
                        source={proposal.image}
                        style={{
                          width: "100%",
                          // height: 100,
                          // marginVertical: 10,
                          // margin: "3%",
                        }}
                      ></Image>
                    </Dialog>
                  </View>

                  <View style={styles.view_proposal_description}>
                    <Text style={styles.text_proposal_description}>
                      Result: {proposal.result}
                    </Text>
                  </View>

                  <View style={styles.view_proposal_description}>
                    <Text style={styles.text_proposal_description}>
                      Stake: {proposal.stake}
                    </Text>
                  </View>

                  <View style={styles.view_proposal_description}>
                    <Text style={styles.text_proposal_description}>
                      Return Stake: {proposal.return_stake}
                    </Text>
                  </View>

                  <View style={styles.view_proposal_description}>
                    <Text style={styles.text_proposal_description}>
                      Credit issue: {proposal.credit_issue}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function MyOrdersScreen() {
  const myOrdersData = [
    {
      sr_no: "name1",
      total_credits: "total credits",
      price_per_credit: "price per credit",
      total_price: "total price",
      order_date: "order_date",
      create: "create",
      complete_date: "complete date",
      status: "status",
    },
    {
      sr_no: "name1",
      total_credits: "total credits",
      price_per_credit: "price per credit",
      total_price: "total price",
      order_date: "order_date",
      create: "create",
      complete_date: "complete date",
      status: "status",
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerView}
      >
        <View style={styles.main_view}>
          <Text style={styles.main_view_text}>My orders</Text>

          <View style={styles.view_details}>
            <View style={styles.view_proposal_data}>
              {myOrdersData.map((orders, index) => (
                <View style={styles.view_proposal} key={index}>
                  <View style={styles.view_proposal_name}>
                    <Text style={styles.text_proposal_name}>
                      Sr. No: {orders.sr_no}
                    </Text>
                  </View>
                  <View style={styles.view_proposal_description}>
                    <Text style={styles.text_proposal_description}>
                      Total credits: {orders.total_credits}
                    </Text>
                  </View>

                  <View style={styles.view_proposal_description}>
                    <Text style={styles.text_proposal_description}>
                      Price per credit: {orders.price_per_credit}
                    </Text>
                  </View>

                  <View style={styles.view_proposal_description}>
                    <Text style={styles.text_proposal_description}>
                      Total price: {orders.total_price}
                    </Text>
                  </View>

                  <View style={styles.view_proposal_description}>
                    <Text style={styles.text_proposal_description}>
                      Order Date: {orders.order_date}
                    </Text>
                  </View>

                  <View style={styles.view_proposal_description}>
                    <Text style={styles.text_proposal_description}>
                      Create: {orders.create}
                    </Text>
                  </View>

                  <View style={styles.view_proposal_description}>
                    <Text style={styles.text_proposal_description}>
                      Complete date: {orders.complete_date}
                    </Text>
                  </View>

                  <View style={styles.view_proposal_description}>
                    <Text style={styles.text_proposal_description}>
                      Status: {orders.status}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function ProfileDetails() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Profile"
        component={EditProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user" size={20} color={"#5B9C7A"} />
          ),
          tabBarLabel: "Profile",
          tabBarActiveTintColor: "#5B9C7A",
        }}
      />
      <Tab.Screen
        name="My proposal"
        component={MyProposalScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="list" size={20} color={"#5B9C7A"} />
          ),
          tabBarLabel: "My Proposals",
          tabBarActiveTintColor: "#5B9C7A",
        }}
      />
      <Tab.Screen
        name="My orders"
        component={MyOrdersScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="shopping-cart" size={20} color={"#5B9C7A"} />
          ),
          tabBarLabel: "My Orders",
          tabBarActiveTintColor: "#5B9C7A",
        }}
      />
    </Tab.Navigator>
  );
}
