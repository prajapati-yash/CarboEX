import * as React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "../style/proposalDashboardStyle";
import { Button } from "@rneui/themed";
import { responsiveWidth } from "react-native-responsive-dimensions";

export default function ProposalDashboard() {
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
              <View style={styles.view_proposal}>
                <View style={styles.view_proposal_name}>
                  <Text style={styles.text_proposal_name}>Name: name</Text>
                </View>
                <View style={styles.view_proposal_description}>
                  <Text style={styles.text_proposal_description}>
                    Description: description
                  </Text>
                </View>
                <View>
                  <Button size="sm">View More</Button>
                </View>
              </View>

              <View style={styles.view_proposal}>
                <View style={styles.view_proposal_name}>
                  <Text style={styles.text_proposal_name}>Name: name</Text>
                </View>
                <View style={styles.view_proposal_description}>
                  <Text style={styles.text_proposal_description}>
                    Description: description
                  </Text>
                </View>
                <View>
                  <Button size="sm">View More</Button>
                </View>
              </View>

              <View style={styles.view_proposal}>
                <View style={styles.view_proposal_name}>
                  <Text style={styles.text_proposal_name}>Name: name</Text>
                </View>
                <View style={styles.view_proposal_description}>
                  <Text style={styles.text_proposal_description}>
                    Description: description
                  </Text>
                </View>
                <View>
                  <Button size="sm">View More</Button>
                </View>
              </View>

              <View style={styles.view_proposal}>
                <View style={styles.view_proposal_name}>
                  <Text style={styles.text_proposal_name}>Name: name</Text>
                </View>
                <View style={styles.view_proposal_description}>
                  <Text style={styles.text_proposal_description}>
                    Description: description
                  </Text>
                </View>
                <View>
                  <Button size="sm">View More</Button>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
