import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";
import { View } from "react-native";
import {
  Alert,
  Text,
  Button,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import BuyCredit from "../pages/BuyCredit";
import SellCredit from "../pages/SellCredit";
import styles from "../style/emissionCalculateStyle";
import { useNavigation } from "@react-navigation/native";
import NavigationContainer from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

var numbers = 0;
var data = [];

// const Stack = createStackNavigator();
// const handleBuyButton = () => {
//   <NavigationContainer>
//   <Stack.Navigator>
//      <Stack.Screen name="BuyCredit" component={BuyCredit} />
//    </Stack.Navigator>
//  </NavigationContainer>
// }

// const handleSellButton = () => {
//   <NavigationContainer>
//   <Stack.Navigator>
//      <Stack.Screen name="SellCredit" component={SellCredit} />
//    </Stack.Navigator>
//  </NavigationContainer>
// }

const Sector = (props) => {
  var data = JSON.stringify(
    `{\n      ${props.key1}: ${props.value1},\n      ${props.key2}: ${props.value2}\n      }: ''`
  );
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://app.trycarbonapi.com/api/${props.sector}?${props.key1}=${props.value1}&${props.key2}=${props.value2}`,
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiMjI2YTQ2NmM1OTViMjBmZDZjY2FlMmIyZGZhMmYwYTRhZjNlNTFkOGI2MTMyYTczZWI2YTQ2M2M1Y2ZlNzRlYTBkNmIwYjEyMDg1NWQyNzMiLCJpYXQiOjE2ODAwODQzNDAsIm5iZiI6MTY4MDA4NDM0MCwiZXhwIjoxNzExNzA2NzM4LCJzdWIiOiI0MDg0Iiwic2NvcGVzIjpbXX0.KsiHYaN3t-UcLO8QAvMAfNEGiiNg4-hm2B3lGp7pvxmHkaZqe9c1gj1eHje3a5wHozO6ZYL-5wVBFP2W_elOWw",
      "Content-Type": "application/x-www-form-urlencoded",
      Cookie:
        "XSRF-TOKEN=eyJpdiI6InFBcjQ0U3laL1EvczNWa01icnVhdkE9PSIsInZhbHVlIjoiVGZFM3pLMi8vbmVIcGVYd1pIQTZaenExek1nVmVXRHZHUkpITnhaSGdvc0lwWHc3LzNuOCszSTBDcGJjbGJWYkRyYkJJcGEyeWdtZlRvWVkzMGYzaktFd0M1Zk4wNXRKWkpIbWpQbnIvZXVUWFB5Q1R3c1hUY1U4STVJTTRLdXYiLCJtYWMiOiI3YjUwYTY4YWNkYjg3MjcxMzg3YTc4OTJkZmM1ZDNmN2ZkMzlhNzAxNDI4NTcyYmE0ZDA3YzgyOWE3MzdhZDE4In0%3D; trycarbonapi_session=eyJpdiI6InBpQnhMS2hyZnJuTEl3aEc2OHpuY2c9PSIsInZhbHVlIjoiZk5mZ291WG5Rc01WdFhKVUJPbjg1Y1pIbHowY1Zpa1V3dEluSXp6VzdQNjNDYzhFejVVWXlaS0gwNGlwQkxYSW52MlZKT1pGSlRtMVZLT1lsUTBXMlhJeXJiOE5DWE40OHgwQmxnd0xWV0ZxZmNzVy9lQ0JRY05lUC9jUER3cG0iLCJtYWMiOiIwY2NjNDljMzMyYmNlNTViMTUyYzhhNDY5ZDEyYTc5ZTFiMjA1NjY4MWRkMmIxY2UyYmU1ZGM1N2NmNTdiN2Q3In0%3D",
    },
    data: data,
  };

  axios(config).then(function (response) {
    const result = JSON.stringify(response.data.carbon);
    numbers = parseFloat(result.match(/\d+(\.\d+)?/g)[0]);
    Alert.alert(
      "Carbon Emission Calculated",
      `${result}`,
      [
        { text: "Ok", onPress: () => console.log("Yes button clicked") },
        {
          text: "Cancel",
          onPress: () => console.log("No button clicked"),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
      }
    );
    console.log(result);
    console.log(numbers);
    props.status(false);
    addValues();
  });
};

function addValues() {
  console.log("value of numbers is:" + numbers);
  data.push(numbers);
  console.log(data);
}

export const TotalSum = (props) => {
  const navigation = useNavigation();
  const [buyButton, setBuyButton] = useState(false);
  const [sellButton, setSellButton] = useState(false);
  const [modalVisible, setModalVisible] = useState(true);

  let sum = 0;
  for (let i = 0; i < data.length; i += 1) {
    sum += data[i];
  }

  useEffect(() => {
    props.resultStatus(true);
  }, []);

  return (
    <View style={styles.body}>
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        hardwareAccelerated
        style={styles.modal}>
          <View style={styles.centered_view}>
            <View style={styles.result_modal}>
              <View style={styles.result_header}>
                <View style={styles.result_header_title}>
                  <Text style={styles.result_header_title_text}>RESULT</Text>
                </View>
                <View style={{left: 125}}>
                  <FontAwesome5 
                    name={'times'}
                    size = {30}
                    onPress={() => setModalVisible(false)}
                  />
                </View>
              </View>

              
              <View style={styles.result_body}>
                <Text style={styles.result_body_text}>Total Carbon Emitted : {sum}</Text>
              </View>

              <View style={styles.resultFooter}>
                <Pressable
                  style={styles.buy_button}
                  android_ripple={{color:'#fff'}}
                  disabled={sum < 7000}
                  // onPress={handleBuyButton}
                >
                  <Text style={styles.result_button_text}>Buy</Text>
                </Pressable>

                {buyButton && (<BuyCredit />)}

                <Pressable
                  style={styles.sell_button}
                  android_ripple={{color:'#fff'}}
                  disabled={sum > 4000}
                  // onPress={handleSellButton}
                >
                  <Text style={styles.result_button_text}>Sell</Text>
                </Pressable>

              {/* {sellButton && <BuyCredit></BuyCredit>} */}
            </View>
          </View>
       </View>
      </Modal>
    </View>
  );
};

export default Sector;
