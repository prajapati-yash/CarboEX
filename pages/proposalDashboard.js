import React, { useState, useEffect } from "react";
import { Text, View, ScrollView,ActivityIndicator } from "react-native";
import styles from "../style/proposalDashboardStyle";
import { Button } from "@rneui/themed";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { connector } from "../components/WalletConnectExperience";
import Web3 from "web3";
import { daoInstance } from "../components/contract";
import { useNavigation } from "@react-navigation/native";
import { responsiveFontSize } from "react-native-responsive-dimensions";

export default function ProposalDashboard() {
  const navigation = useNavigation();
  const[loading,setLoading] = useState(true);
  const [allProposalData, setAllProposalData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const localizedDate = currentDate;

  const daoProposal = async () => {
    try {
      // console.log("in try block");
      if (!connector.connected) {
        console.log("WalletConnect not connected");
        return;
      }
      if (connector.connected) {
        const provider = new Web3("https://pre-rpc.bt.io/");

        const con = await daoInstance();
        const daoProposalData = await con.methods.getAllProposal().call();
        // console.log("dao proposal");
        setAllProposalData(daoProposalData);
        setLoading(false);
        // console.log("All Proposal Data", allProposalData);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    daoProposal();
  });

  function hexToTimestamp2(hex) {
    // console.log("hex " + hex)
    // const unixTimestamp = parseInt(hex, 16);
    // console.log("unix " + unixTimestamp)
    const date = new Date(hex * 1000);
    return date;
    // console.log("date " + date)
    // const localDate = date.toLocaleString('en-US');
    // console.log("localdate " + localDate)
    // return localDate;
  }
  const filteredData = allProposalData.filter((item) => {
    return item[10] === "" && hexToTimestamp2(item[9]) > localizedDate;
  });

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
          <Text style={styles.main_view_text}>PROPOSAL DASHBOARD</Text>
          <View
            style={{
              marginHorizontal: "8%",
              marginBottom: "6%",
              backgroundColor: "white",
              borderRadius: 25,
            }}
          >
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                padding: "5%",
                textAlign: "justify",
              }}
            >
              Here you can see all the active proposals made by DAO members.
            </Text>
          </View>

          <View style={styles.view_proposal_data}>
            {filteredData.length > 0 ? (
              filteredData.map((proposal, index) => (
                <View style={styles.view_proposal} key={index}>
                  <View style={styles.view_proposal_name}>
                    <View>
                      <Text style={styles.text_proposal_name}>Type</Text>
                    </View>
                    <View style={styles.view_proposal_name_value}>
                      <Text style={styles.text_proposal_name_value}>
                        {proposal[3] ? "Emission" : "Offset"}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.view_proposal_description}>
                    <View>
                      <Text style={styles.text_proposal_description}>
                        Description
                      </Text>
                    </View>
                    <View style={styles.view_proposal_name_value}>
                      <Text style={styles.text_proposal_name_value}>
                        {proposal[1]}
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Button
                      size="sm"
                      onPress={() =>
                        navigation.navigate("proposalDetails", {
                          state: { data: proposal },
                        })
                      }
                    >
                      View More
                    </Button>
                  </View>
                </View>
              ))
            ) : (
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  elevation: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: responsiveFontSize(3),
                    fontWeight: "bold",
                    marginVertical: "8%",
                    marginHorizontal: "10%",
                  }}
                >
                  No Active proposals
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
