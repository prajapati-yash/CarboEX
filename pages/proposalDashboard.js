import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "../style/proposalDashboardStyle";
import { Button } from "@rneui/themed";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { connector } from "../components/WalletConnectExperience";
import Web3 from "web3";
import { daoInstance } from "../components/contract";
import { useNavigation } from "@react-navigation/native";


export default function ProposalDashboard() {
  const navigation = useNavigation();
  const [allProposalData, setAllProposalData] = useState([]);

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
        // console.log("All Proposal Data", allProposalData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    daoProposal();
  });

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerView}
      >
        <View style={styles.main_view}>
          <Text style={styles.main_view_text}>ACTIVE PROPOSAL</Text>

          <View style={styles.view_details}>
            <View style={styles.view_proposal_data}>
              {allProposalData.map((proposal, index) => (
                <View style={styles.view_proposal} key={index}>
                  <View style={styles.view_proposal_name}>
                    <Text style={styles.text_proposal_name}>
                      Type: {proposal[3] ? "Emission" : "Offset"}
                    </Text>
                  </View>
                  <View style={styles.view_proposal_description}>
                    <Text style={styles.text_proposal_description}>
                      Description: {proposal[1]}
                    </Text>
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
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
