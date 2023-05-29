import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import styles from "../style/profileDetailsStyle";
import { Button, Dialog } from "@rneui/themed";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SellCredits from "./sellCredits";
import { connector } from "../components/WalletConnectExperience";
import Web3 from "web3";
import {
  companyInstance,
  COMPANY_ADDRESS,
  DAO_MEMBER_ADDRESS,
  daoInstance,
} from "../components/contract";

function EditProfileScreen() {
  const navigation = useNavigation();

  const [logoImg, setLogoImg] = useState();
  const [companyName, setCompanyName] = useState();
  const [email, setEmail] = useState();
  const [userName, setUserName] = useState();
  const [credits, setCredits] = useState();

  const MainPropPageData = {
    logo: logoImg,
    name: companyName,
    userName: userName,
    email: email,
    availableCredits: credits ? credits : 0,
};

  const getUserAccountDetails = async () => {
    try {
      console.log("get user accounts....");
      if (!connector.connected) {
        console.log("WalletConnect not connected");
        return;
      }
      if (connector.connected) {
        const provider = new Web3("https://pre-rpc.bt.io/");

        const con = await companyInstance();
        const userData = await con.methods
          .getUser(connector.accounts[0])
          .call();

        console.log(userData);
        console.log(userData[5]);
        setLogoImg(userData[5]);
        setCompanyName(userData[2]);
        setUserName(userData[1]);
        setEmail(userData[3]);
        return userData;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserAccountDetails();
  });

  const getUserCreditDetails = async () => {
    try {
      if (!connector.connected) {
        console.log("WalletConnect not connected");
        return;
      }
      if (connector.connected) {
        const provider = new Web3("https://pre-rpc.bt.io/");

            const con = await companyInstance();
            const totalCredits = await con.methods.totalCreditMapping(connector.accounts[0]).call();
            const creditsInDecimal = parseInt(totalCredits)
            setCredits(creditsInDecimal);
            // console.log(totalCredits)
            return credits
        }
    } catch (error) {
        console.log(error);
    }
}
useEffect(() => {
    getUserCreditDetails()
}, [])

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerView}
      >
        <View>
          <Text style={styles.main_view_text}>MY DASHBOARD</Text>
        </View>
        <View style={styles.mainBox}>
          <View style={styles.boxBody}>
            <View style={styles.profileHeader}>
              <ImageBackground
                style={styles.image1}
                borderTopRightRadius={36}
                borderTopLeftRadius={36}
                backgroundColor="#5B9C7A"
                source={{ uri: "https://ipfs.io/ipfs/" + logoImg }}
              ></ImageBackground>
            </View>

            <View style={styles.profileBody}>
              <View>
                <Text style={styles.input_text}>Company Name:</Text>
                <View style={styles.input_box}>
                  <Text style={{}}>{companyName}</Text>
                </View>
              </View>

              <View>
                <Text style={styles.input_text}>Email:</Text>
                <View style={styles.input_box}>
                  <Text style={{}}>{email}</Text>
                </View>
              </View>

              <View>
                <Text style={styles.input_text}>Username:</Text>
                <View style={styles.input_box}>
                  <Text style={{}}>{userName}</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: "12%",
                  marginRight: "12%",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text style={styles.input_text}>Credits Available:</Text>
                  <View style={styles.credit_input_box}>
                    <Text style={{}}>{MainPropPageData.availableCredits}</Text>
                  </View>
                </View>

                <Button
                  title={"SELL"}
                  loading={false}
                  loadingProps={{ size: "small", color: "white" }}
                  buttonStyle={{
                    backgroundColor: "#5B9C7A",
                    borderRadius: 20,
                  }}
                  titleStyle={{
                    fontWeight: "bold",
                    fontSize: responsiveFontSize(1.7),
                  }}
                  containerStyle={{
                    width: responsiveWidth(20),
                    marginTop: "4%",
                  }}
                  onPress={() => navigation.navigate("SellCredits")}
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
  const [isLoading, setIsLoading] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(null);
  const [allData, setAllData] = useState();
  const [userProp, setUserProp] = useState([]);
  const [visible1, setVisible1] = useState(null);
  const [loading, setLoading] = useState(true);
  const address = connector.accounts[0];


  const toggleDialog = (index) => {
    setVisible1(index);
  };

  const getUserIDs = async () => {
    try {
      if (!connector.connected) {
        console.log("WalletConnect not connected");
        return;
      }
      if (connector.connected) {
        const provider = new Web3("https://pre-rpc.bt.io/");

        const con = await daoInstance();
        // console.log(address)
        const getUserID = await con.methods.getUserProposals(address).call();
        console.log("Get User Id", getUserID);
        let userIdLength = getUserID.length;
        console.log("Get User ID Length", userIdLength);
        let arr = [];
        for (let i = 0; i < userIdLength; i++) {
          console.log("Temp");
          // console.log(getUserID[i]);
          const getUserData = await con.methods
            .getProposal(getUserID[i])
            .call();
          arr.push(getUserData);
          console.log("Get user Data:", getUserData);
        }
        // console.log(arr)
        setUserProp(arr);
        setAllData(getUserID);
        setLoading(false);
        return getUserID;
      }
    } catch (error) {
      console.log("GetUser Ids Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserIDs();
  }, []);

  const getUserDataById = async (e, key) => {
    try {
      setLoadingIndex(key);
      if (connector.connected) {
        setIsLoading(true);
        console.log("Connector---", connector);
        const provider = new Web3("https://pre-rpc.bt.io/");

        const con = await daoInstance();
        const getResult = await con.methods.getProposalResult(e).encodeABI();
        console.log("Get Result:", getResult);
        // await getResult.wait();

        const gasPrice = await provider.eth.getGasPrice();
        const gasLimit = 3000000;
        const recipient = DAO_MEMBER_ADDRESS; // replace with recipient address
        const nonce = await provider.eth.getTransactionCount(
          connector.accounts[0],
          "pending"
        );
        const txOptions = {
          gasPrice,
          gasLimit,
          from: connector.accounts[0],
          to: recipient,
          data: getResult,
          nonce,
        };

        console.log("After txOptions");
        console.log("connector transaction", connector);
        const signTx = await connector.sendTransaction(txOptions);
        const finalTx = await signTx;
        console.log("After transaction");
        console.log(signTx);
        setIsLoading(false);
        let receipt = null;
        while (receipt === null) {
          receipt = await provider.eth.getTransactionReceipt(signTx);
          await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second before checking again
        }
        // console.log("Receipt Status", receipt.status);
        if (receipt && receipt.status) {
          ToastAndroid.show("Transaction Successful", ToastAndroid.LONG);
        } else {
          ToastAndroid.show("Transaction Failed", ToastAndroid.LONG);
        }
        return getResult;
      }
    } catch (error) {
      console.log("Get Result Error :", error.message);
      ToastAndroid.show("Transaction Failed", ToastAndroid.LONG);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
    {loading ? (<View style={{marginTop:"10%"}}>
    <ActivityIndicator size="large" color="#000000"/>
  </View>):(
   
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerView}
      >
        <View style={styles.main_view}>
          <Text style={styles.main_view_text}>PROPOSAL MADE BY YOU</Text>

          <View style={styles.view_proposal_data}>
            {userProp.map((details, key) => (
              <View style={styles.view_proposal} key={key}>
                <View>
                  <Text style={styles.input_text_orders}>Type:</Text>
                  <View style={styles.input_box_orders}>
                    <Text>{details[3] ? "Emission" : "Offset"}</Text>
                  </View>
                </View>

                <View>
                  <Text style={styles.input_text_orders}>Description:</Text>
                  <View style={styles.input_box_description}>
                    <Text>{details[1]}</Text>
                  </View>
                </View>

                <View>
                  <View>
                    <Text style={styles.input_text_orders}>Certificate:</Text>
                  </View>
                  <View style={[styles.view_proposal_description]}>
                    <TouchableOpacity
                      onPress={() => toggleDialog(key)}
                      key={key}
                    >
                      <Image
                        source={{ uri: "https://ipfs.io/ipfs/" + details[2] }}
                        style={{
                          width: responsiveWidth(40),
                          height: responsiveHeight(20),
                          marginVertical: 10,
                        }}
                      ></Image>
                    </TouchableOpacity>
                    <Dialog
                      isVisible={visible1 === key}
                      onBackdropPress={() => setVisible1(null)}
                      height="auto"
                    >
                      <Dialog.Title title="Your proposal image" />
                      <View
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          height: 300,
                        }}
                      >
                        <Image
                          source={{ uri: "https://ipfs.io/ipfs/" + details[2] }}
                          style={{
                            width: "100%",
                            height: "80%",
                            resizeMode: "contain",
                          }}
                        ></Image>
                      </View>
                    </Dialog>
                  </View>
                </View>

                <View>
                  <Text style={styles.input_text_orders}>Status:</Text>
                  <View style={styles.input_box_orders}>
                    <Text>{details[10] ? details[10] : "pending"}</Text>
                  </View>
                </View>

                <View>
                  <Text style={styles.input_text_orders}>Proposed at:</Text>
                  <View style={styles.input_box_orders}>
                    <Text>{new Date(details[8] * 1000).toLocaleString()}</Text>
                  </View>
                </View>

                <View>
                  <Text style={styles.input_text_orders}>
                    Proposal Expire Time:
                  </Text>
                  <View style={styles.input_box_orders}>
                    <Text>{new Date(details[9] * 1000).toLocaleString()}</Text>
                  </View>
                </View>

                <View style={{ alignItems: "center" }}>
                  <Button
                    title={isLoading ? "Loading..." : "GET RESULT"}
                    loading={isLoading}
                    loadingProps={{ size: "small", color: "white" }}
                    buttonStyle={{
                      borderRadius: 15,
                    }}
                    titleStyle={{
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: responsiveFontSize(2.7),
                      margin: "4%",
                    }}
                    containerStyle={{
                      width: responsiveWidth(40),
                      alignItems: "center",
                      marginTop: "5%",
                    }}
                    onPress={() => {
                      const value1 =
                        new Date(details[9] * 1000).toLocaleString() >
                        new Date();
                      console.log("Value 1:", value1);
                      if (value1) {
                        console.log(Date());
                        alert(
                          "You will be able to see the result after the proposal expires!"
                        );
                      } else {
                        getUserDataById(details[0], key);
                      }
                    }}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    )}
    </View>
  );
}

function MyOrdersScreen() {
  const [userOrders, setUserOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const address = connector.accounts[0];
  console.log(address);

  const ordersData = async () => {
    try {
      if (!connector.connected) {
        console.log("WalletConnect not connected");
        return;
      }
      if (connector.connected) {
        const provider = new Web3("https://pre-rpc.bt.io/");

        const con = await companyInstance();
        console.log(address);
        const getUserOrId = await con.methods.getUserOrders(address).call();
        console.log(getUserOrId);

        let arr = [];
        for (let i = 0; i < getUserOrId.length; i++) {
          const getUserData = await con.methods
            .orderStructMapping(getUserOrId[i])
            .call();
          arr.push(getUserData);
        }

        setUserOrders(arr);
        setLoading(false);
        // console.log(userOrders)
      }
    } catch (error) {
      console.log("OrdersData Error:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    ordersData();
  }, []);

  return (
    <View style={styles.container}>
      {loading ?(
       <View style={{marginTop:"10%"}}>
       <ActivityIndicator size="large" color="#000000"/>
     </View>):(
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerView}
      >
        <View style={styles.main_view}>
          <Text style={styles.main_view_text}>MY ORDERS</Text>

          <View style={styles.view_proposal_data}>
            {userOrders.length > 0 ? (
              userOrders.map((details, key) => (
                <View style={styles.view_proposal} key={key}>
                  <View>
                    <Text style={styles.input_text_orders}>Credits:</Text>
                    <View style={styles.input_box_orders}>
                      <Text>{parseInt(details[1])}</Text>
                    </View>
                  </View>

                  <View>
                    <Text style={styles.input_text_orders}>
                      Price Per Credit (in ETH):
                    </Text>
                    <View style={styles.input_box_orders}>
                      <Text>{parseInt(details[2]) / Math.pow(10, 18)}</Text>
                    </View>
                  </View>

                  <View>
                    <Text style={styles.input_text_orders}>
                      Total Price (in ETH):
                    </Text>
                    <View style={styles.input_box_orders}>
                      <Text>
                        {(parseInt(details[2]) / Math.pow(10, 18)) *
                          parseInt(details[1])}
                      </Text>
                    </View>
                  </View>

                  <View>
                    <Text style={styles.input_text_orders}>Address:</Text>
                    <View style={styles.input_box_orders}>
                      <Text>{details[4]}</Text>
                    </View>
                  </View>

                  <View>
                    <Text style={styles.input_text_orders}>Status:</Text>
                    <View style={styles.input_box_orders}>
                      <Text>{details[3] ? "true" : "false"}</Text>
                    </View>
                  </View>
                </View>
              ))
            ) : (
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  elevation: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: responsiveFontSize(2.5),
                    fontWeight: "bold",
                    marginVertical: "8%",
                    marginHorizontal: "10%",
                  }}
                >
                  No Orders Made
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
     )}
    </View>
  );
}

const Tab = createBottomTabNavigator();
export default function ProfileDetails() {
  return (
    <Tab.Navigator
      // screenOptions={{ headerShown: false }}
      screenOptions={({ route }) => ({
        ...{ headerShown: false },
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Profile") {
            iconName = "user";
            size = focused ? 25 : 20;
            color = focused ? "#5B9C7A" : "#555";
          } else if (route.name === "MyProposal") {
            iconName = "list";
            size = focused ? 25 : 20;
            color = focused ? "#5B9C7A" : "#555";
          } else if (route.name === "MyOrders") {
            iconName = "shopping-cart";
            size = focused ? 25 : 20;
            color = focused ? "#5B9C7A" : "#555";
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: "#5B9C7A",
      })}
    >
      <Tab.Screen
        name="Profile"
        component={EditProfileScreen}
        options={{ tabBarLabel: "Profile" }}
      />
      <Tab.Screen
        name="MyProposal"
        component={MyProposalScreen}
        options={{ tabBarLabel: "My Proposals" }}
      />
      <Tab.Screen
        name="MyOrders"
        component={MyOrdersScreen}
        options={{ tabBarLabel: "My Orders" }}
      />
    </Tab.Navigator>
  );
}
