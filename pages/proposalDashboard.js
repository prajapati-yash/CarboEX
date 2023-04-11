import * as React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "../style/proposalDashboardStyle";
import { Button } from "@rneui/themed";
import { responsiveWidth } from "react-native-responsive-dimensions";

export default function ProposalDashboard() {
  const proposalData = [
    { name: "name1", description: "description1" },
    { name: "name2", description: "description2" },
    { name: "name3", description: "description3" },
    { name: "name4", description: "description4" },
    { name: "name5", description: "description5" },
    { name: "name6", description: "description6" },
    { name: "name7", description: "description7" },
    { name: "name8", description: "description8" },
    { name: "name8", description: "description8" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerView}
      >
        <View style={styles.main_view}>
          <Text style={styles.main_view_text}>Proposal Dashboard</Text>

          <View style={styles.view_details}>
            <View style={styles.view_proposal_data}>
              {proposalData.map((proposal, index) => (
                <View style={styles.view_proposal} key={index}>
                  <View style={styles.view_proposal_name}>
                    <Text style={styles.text_proposal_name}>
                      Name: {proposal.name}
                    </Text>
                  </View>
                  <View style={styles.view_proposal_description}>
                    <Text style={styles.text_proposal_description}>
                      Description: {proposal.description}
                    </Text>
                  </View>
                  <View>
                    <Button size="sm">View More</Button>
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
