import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Alert,
  Modal,
  Pressable,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import axios from "axios";
import Sector from "../Api/emissionCalculate";
const te_data = [
  { label: "USA", value: "USA" },
  { label: "Canada", value: "Canada" },
  { label: "UK", value: "UK" },
  { label: "Europe", value: "Europe" },
  { label: "Africa", value: "Africa" },
  { label: "Latin America", value: "Latin America" },
  { label: "MiddleEast", value: "MiddleEast" },
  { label: "Other Country", value: "Other Country" },
];

const pt_data = [
  { label: "Taxi", value: "Taxi" },
  { label: "Classic Bus", value: "Classic Bus" },
  { label: "EcoBus", value: "EcoBus" },
  { label: "Coach", value: "Coach" },
  { label: "NationalTrain", value: "NationalTrain" },
  { label: "LightRail", value: "LightRail" },
  { label: "Subway", value: "Subway" },
  { label: "FerryOnFoot", value: "FerryOnFoot" },
  { label: "FerryInCar", value: "FerryInCar" },
];

export default function Calculator() {
  const [teText, teSetText] = useState("");
  const [teCountryValue, teCountrySetValue] = useState(null);
  const [teCountryIsFocus, teCountrySetIsFocus] = useState(false);
  const [teCalculate, setTeCalculate] = useState(false);
  const [ptText, ptSetText] = useState(null);
  const [ptType, ptSetType] = useState(null);
  const [ptIsFocus, ptSetIsFocus] = useState(false);
  const [ptCalculate, setPtCalculate] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centerView}
      >
        <Text style={styles.title_text}>CARBON FOOTPRINT CALCULATOR</Text>

        <View style={styles.centered_view}>
          <View style={styles.calculateBox}>
            <View style={styles.calculateHeader}>
              <ImageBackground
                style={styles.image1}
                borderTopRightRadius={36}
                borderTopLeftRadius={36}
                source={require("../assets/HomeBg.jpg")}
              >
                <Text style={styles.header_text}>Traditional Energy</Text>
              </ImageBackground>
            </View>
            <View style={styles.calculateBody}>
              <Text style={styles.input_text}>Enter Consumption</Text>
              <TextInput
                value={teText}
                style={styles.input_box}
                placeholder="Enter Consumption In kwh"
                onChangeText={(teText) => {
                  teSetText(teText);
                }}
              />

              <Text style={styles.input_text}>
                Country and Continent providing Hydro
              </Text>
              <Dropdown
                style={[
                  styles.dropdown_country,
                  teCountryIsFocus && { borderColor: "blue" },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={te_data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!teCountryIsFocus ? "Select Country" : "..."}
                searchPlaceholder="Search..."
                value={teCountryValue}
                onFocus={() => teCountrySetIsFocus(true)}
                onBlur={() => teCountrySetIsFocus(false)}
                onChange={(item) => {
                  teCountrySetValue(item.value);
                  teCountrySetIsFocus(false);
                }}
              />

              <Pressable
                style={styles.calculate_button}
                onPress={() => setTeCalculate(true)}
                android_ripple={{ color: "#ff0000" }}
              >
                <Text style={styles.calculate_button_text}>Calculate</Text>  
              </Pressable>
            
              {teCalculate && (
                <Sector
                  value1={teText}
                  value2={teCountryValue}
                  sector="traditionalHydro"
                  key1="consumption"
                  key2="location"
                  status={setTeCalculate} 
                  // url = {"https://app.trycarbonapi.com/api/traditionalHydro?consumption='${teText}'&location='${teCountryValue}'"}
                />
              )}
              
            </View>
          </View>


          <View style={styles.calculateBox}>
            <View style={styles.calculateHeader}>
              <ImageBackground
                style={styles.image1}
                borderTopRightRadius={36}
                borderTopLeftRadius={36}
                source={require("../assets/ptBg.jpg")}
              >
                <Text style={styles.header_text}>Public Transit</Text>
              </ImageBackground>
            </View>
            <View style={styles.calculateBody}>
              <Text style={styles.input_text}>Enter Distance</Text>
              <TextInput
                value={ptText}
                style={styles.input_box}
                placeholder="Enter distance in km"
                onChangeText={(ptText) => {
                  ptSetText(ptText);
                }}
              />

              <Text style={styles.input_text}>Enter Type</Text>
              <Dropdown
                style={[
                  styles.dropdown_country,
                  ptIsFocus && { borderColor: "blue" },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={pt_data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!ptIsFocus ? "Select Type" : "..."}
                searchPlaceholder="Search..."
                value={ptType}
                onFocus={() => ptSetIsFocus(true)}
                onBlur={() => ptSetIsFocus(false)}
                onChange={(item) => {
                  ptSetType(item.value);
                  ptSetIsFocus(false);
                }}
              />

              <Pressable
                style={styles.calculate_button}
                
                onPress={() => setPtCalculate(true)}
                android_ripple={{ color: "#ff0000" }}
              >
                <Text style={styles.calculate_button_text}>Calculate</Text>
              </Pressable>
              {ptCalculate && (
                <Sector
                  value1={ptText}
                  value2={ptType}
                  sector="publicTransit"
                  key1="distance"
                  key2="type"
                  status={setPtCalculate}
                  //   url= "https://app.trycarbonapi.com/api/publicTransit?distance="{teText}"&${props.key2}=${props.teCountryValue}"
                />
              )}
            </View>
          </View>

          {/* <View style={styles.calculateBox}>
				<View style={styles.calculateHeader}>
				<ImageBackground
          			style={styles.image1}
					  borderTopRightRadius={36}
					  borderTopLeftRadius={36}
          			source={require("../assets/VehicleBg.jpg")}>
					<Text style={styles.header_text}>Vehicles</Text>
					</ImageBackground>
                </View>
				<View style={styles.calculateBody}>
					<Text style={styles.input_text}>Enter Distance</Text>
					<TextInput style={styles.input_box} placeholder="Enter distance In kilometer"/>

              <Text style={styles.input_text}>Vehicle Type</Text>
              <Dropdown
                style={[
                  styles.dropdown_country,
                  isFocus && { borderColor: "blue" },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={country}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select Vehicle" : "..."}
                searchPlaceholder="Search..."
                value={countryValue}
                onFocus={() => countrySetIsFocus(true)}
                onBlur={() => countrySetIsFocus(false)}
                onChange={(item) => {
                  countrySetValue(item.value);
                  countrySetIsFocus(false);
                }}
              />

              <View
                style={{
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >

                <Pressable
                  style={styles.calculate_button}
                  android_ripple={{ color: "#ff0000" }}
                >
                  <Text style={styles.calculate_button_text}>Calculate</Text>
                </Pressable>
				</View>
              </View>
            </View>
          </View>

          <View style={styles.calculateBox}>
            <View style={styles.calculateHeader}>
              <ImageBackground
                style={styles.image1}
                borderTopRightRadius={36}
                borderTopLeftRadius={36}
                source={require("../assets/FlightBg.jpg")}
              >
                <Text style={styles.header_text}>Flights</Text>
              </ImageBackground>
            </View>
            <View style={styles.calculateBody}>
              <Text style={styles.input_text}>Origin Airport</Text>
              <Dropdown
                style={[
                  styles.dropdown_country,
                  isFocus && { borderColor: "blue" },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={country}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select City" : "..."}
                searchPlaceholder="Search..."
                value={countryValue}
                onFocus={() => countrySetIsFocus(true)}
                onBlur={() => countrySetIsFocus(false)}
                onChange={(item) => {
                  countrySetValue(item.value);
                  countrySetIsFocus(false);
                }}
              />

              <Text style={styles.input_text}>Destination Airport</Text>
              <Dropdown
                style={[
                  styles.dropdown_country,
                  isFocus && { borderColor: "blue" },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={country}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select City" : "..."}
                searchPlaceholder="Search..."
                value={countryValue}
                onFocus={() => countrySetIsFocus(true)}
                onBlur={() => countrySetIsFocus(false)}
                onChange={(item) => {
                  countrySetValue(item.value);
                  countrySetIsFocus(false);
                }}
              />

              <View
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                }}
              >
                <Pressable
                  style={styles.calculate_button}
                  android_ripple={{ color: "#ff0000" }}
                >
                  <Text style={styles.calculate_button_text}>Calculate</Text>
                </Pressable>
              </View>
            </View>
          </View>

          <View style={styles.calculateBox}>
            <View style={styles.calculateHeader}>
              <ImageBackground
                style={styles.image1}
                borderTopRightRadius={36}
                borderTopLeftRadius={36}
                source={require("../assets/FuelBg.jpg")}
              >
                <Text style={styles.header_text}>Fuels</Text>
              </ImageBackground>
            </View>
            <View style={styles.calculateBody}>
              <Text style={styles.input_text}>Fuel Type</Text>
              <Dropdown
                style={[
                  styles.dropdown_country,
                  isFocus && { borderColor: "blue" },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={country}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select Fuel type" : "..."}
                searchPlaceholder="Search..."
                value={countryValue}
                onFocus={() => countrySetIsFocus(true)}
                onBlur={() => countrySetIsFocus(false)}
                onChange={(item) => {
                  countrySetValue(item.value);
                  countrySetIsFocus(false);
                }}
              />

						<Text style={styles.input_text}>Fuel Used</Text>
						<TextInput style={styles.input_box} placeholder="Enter usage in liters"/>

						<Pressable
                  			style={styles.calculate_button}
                  			android_ripple={{ color: "#ff0000" }}>
                  			<Text style={styles.calculate_button_text}>Calculate</Text>
                		</Pressable>
                </View> 
				</View> */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "lightgrey",
  },
  centered_view: {
    alignItems: "center",
    justifyContent: "center",
  },
  title_text: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  calculateBox: {
    width: 340,
    height: 400,
    backgroundColor: "#ffffff",
    marginTop: 50,
    borderRadius: 36,
  },
  calculateHeader: {
    width: 340,
    height: 120,
    textAlign: "center",
  },
  image1: {
    width: 340,
    height: 120,
    opacity: 1,
  },
  header_text: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 35,
    color: "#ffffff",
  },
  calculateBody: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  input_text: {
    fontSize: 17,
  },
  input_box: {
    height: 40,
    width: 300,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 16,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  dropdown_country: {
    height: 40,
    width: 300,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 10,
    marginBottom: 16,
  },
  calculate_button: {
    height: 40,
    width: 300,
    backgroundColor: "#4681f4",
    // borderRadius: 8,
    marginTop: 15,
  },
  calculate_button_text: {
    textAlign: "center",
    marginTop: 6,
    fontSize: 18,
  },
});

export var teText;
export var teCountryValue;
