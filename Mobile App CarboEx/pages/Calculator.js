import {
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
import { TotalSum } from "../Api/emissionCalculate";
import styles from "../style/calculatorStyle";

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

const ce_source = [
  { label: "Solar", value: "Solar" },
  { label: "Wind", value: "Wind" },
  { label: "HydroElectric", value: "HydroElectric" },
  { label: "Biomass", value: "Biomass" },
  { label: "Geothermal", value: "Geothermal" },
  { label: "Tidal", value: "Tidal" },
  { label: "OtherCleanEnergy", value: "OtherCleanEnergy" },
];

const fuel_type = [
  { label: "Petrol", value: "Petrol" },
  { label: "Diesel", value: "Diesel" },
  { label: "LPG", value: "LPG" },
];

const car_travel_type = [
  { label: "SmallDieselCar", value: "SmallDieselCar" },
  { label: "LargeDieselCar", value: "LargeDieselCar" },
  { label: "MediumHybridCar", value: "MediumHybridCar" },
  { label: "LargeHybridCar", value: "LargeHybridCar" },
  { label: "MediumLPGCar", value: "MediumLPGCar" },
  { label: "LargeLPGCar", value: "LargeLPGCar" },
  { label: "MediumCNGCar", value: "MediumCNGCar" },
  { label: "LargeCNGCar", value: "LargeCNGCar" },
  { label: "SmallPetrolVan", value: "SmallPetrolVan" },
  { label: "LargePetrolVan", value: "LargePetrolVan" },
  { label: "SmallDielselVan", value: "SmallDielselVan" },
  { label: "MediumDielselVan", value: "MediumDielselVan" },
  { label: "LargeDielselVan", value: "LargeDielselVan" },
  { label: "LPGVan", value: "LPGVan" },
  { label: "CNGVan", value: "CNGVan" },
  { label: "SmallPetrolCar", value: "SmallPetrolCar" },
  { label: "MediumPetrolCar", value: "MediumPetrolCar" },
  { label: "LargePetrolCar", value: "LargePetrolCar" },
  { label: "SmallMotorBike", value: "SmallMotorBike" },
  { label: "MediumMotorBike", value: "MediumMotorBike" },
  { label: "LargeMotorBike", value: "LargeMotorBike" },
];

const flight_type = [
  { label: "DomesticFlight", value: "DomesticFlight" },
  { label: "ShortEconomyClassFlight", value: "ShortEconomyClassFlight" },
  { label: "ShortBusinessClassFlight", value: "ShortBusinessClassFlight" },
  { label: "LongEconomyClassFlight", value: "LongEconomyClassFlight" },
  { label: "LongPremiumClassFlight", value: "LongPremiumClassFlight" },
  { label: "LongBusinessClassFlight", value: "LongBusinessClassFlight" },
  { label: "LongFirstClassFlight", value: "LongFirstClassFlight" },
];

const motorbike_type = [
  { label: "SmallMotorBike", value: "SmallMotorBike" },
  { label: "MediumMotorBike", value: "MediumMotorBike" },
  { label: "LargeMotorBike", value: "LargeMotorBike" },
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
  const [ceConsumption, setCeConsumption] = useState(null);
  const [ceSource, setCeSource] = useState(null);
  const [ceIsFocus, setCeIsFocus] = useState(false);
  const [ceCalculate, setCeCalculate] = useState(false);
  const [carDistance, setCarDistance] = useState(null);
  const [carType, setCarType] = useState(null);
  const [carIsFocus, setCarIsFocus] = useState(false);
  const [carCalculate, setCarCalculate] = useState(false);
  const [flightDistance, setFlightDistance] = useState(null);
  const [flightType, setFlightType] = useState(null);
  const [flightIsFocus, setFlightIsFocus] = useState(false);
  const [flightCalculate, setFlightCalculate] = useState(false);
  const [motorbikeDistance, setMotorbikeDistance] = useState(null);
  const [motorbikeType, setMotorbikeType] = useState(null);
  const [motorbikeIsFocus, setMotorbikeIsFocus] = useState(false);
  const [motorbikeCalculate, setMotorbikeCalculate] = useState(false);
  const [fuelType, setFuelType] = useState(null);
  const [fuelLiters, setFuelLiters] = useState(null);
  const [flIsFocus, setFlIsFocus] = useState(false);
  const [flCalculate, setFlCalculate] = useState(false);
  const [result, setResult] = useState(false);

  return (
    <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.centered_view}
      >
    <View style={styles.container}>
      
        <View style={styles.title_text_view}>
        <Text style={styles.title_text}>CARBON FOOTPRINT CALCULATOR</Text></View>

        <View style={styles.centered_view}>
          <View style={styles.calculateBox}>
            <View style={styles.calculateHeader}>
              <ImageBackground
                style={styles.image1}
                borderTopRightRadius={36}
                borderTopLeftRadius={36}
                source={require("../assets/calculatorAssets/HomeBg.jpg")}
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
                Select Country Providing Hydro
              </Text>
              <Dropdown
                style={[
                  styles.dropdownStyle,
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
                source={require("../assets/calculatorAssets/ptBg.jpg")}
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

              <Text style={styles.input_text}>Select Type</Text>
              <Dropdown
                style={[
                  styles.dropdownStyle,
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
                source={require("../assets/calculatorAssets/CleanEnergyBg.jpg")}
              >
                <Text style={styles.header_text}>Clean Energy</Text>
              </ImageBackground>
            </View>
            <View style={styles.calculateBody}>
              <Text style={styles.input_text}>Enter Consumption</Text>
              <TextInput
                value={ceConsumption}
                style={styles.input_box}
                placeholder="The amount of energy consumed in kwh"
                onChangeText={(ceConsumption) => {
                  setCeConsumption(ceConsumption);
                }}
              />

              <Text style={styles.input_text}>Select Source Of Clean Energy</Text>
              <Dropdown
                style={[
                  styles.dropdownStyle,
                  ceIsFocus && { borderColor: "blue" },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={ce_source}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={
                  !ceIsFocus ? "Select source of clean energy" : "..."
                }
                searchPlaceholder="Search..."
                value={ceSource}
                onFocus={() => setCeIsFocus(true)}
                onBlur={() => setCeIsFocus(false)}
                onChange={(item) => {
                  setCeSource(item.value);
                  setCeIsFocus(false);
                }}
              />

              <Pressable
                style={styles.calculate_button}
                onPress={() => setCeCalculate(true)}
                android_ripple={{ color: "#ff0000" }}
              >
                <Text style={styles.calculate_button_text}>Calculate</Text>
              </Pressable>
              {ceCalculate && (
                <Sector
                  value1={ceSource}
                  value2={ceConsumption}
                  sector="cleanHydro"
                  key1="energy"
                  key2="consumption"
                  status={setCeCalculate}
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
                source={require("../assets/calculatorAssets/FuelBg.jpg")}
              >
                <Text style={styles.header_text}>Fuel</Text>
              </ImageBackground>
            </View>
            <View style={styles.calculateBody}>

            <Text style={styles.input_text}>Enter Liters</Text>
              <TextInput
                value={fuelLiters}
                style={styles.input_box}
                placeholder="The number of liters to calculate from"
                onChangeText={(fuelLiters) => {
                  setFuelLiters(fuelLiters);
                }}
              />

              <Text style={styles.input_text}>Select Fuel Type</Text>
              <Dropdown
                style={[
                  styles.dropdownStyle,
                  flIsFocus && { borderColor: "blue" },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={fuel_type}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!flIsFocus ? "Select Fuel Type" : "..."}
                searchPlaceholder="Search..."
                value={fuelType}
                onFocus={() => setFlIsFocus(true)}
                onBlur={() => setFlIsFocus(false)}
                onChange={(item) => {
                  setFuelType(item.value);
                  setFlIsFocus(false);
                }}
              />

              <Pressable
                style={styles.calculate_button}
                onPress={() => setFlCalculate(true)}
                android_ripple={{ color: "#ff0000" }}
              >
                <Text style={styles.calculate_button_text}>Calculate</Text>
              </Pressable>
              {flCalculate && (
                <Sector
                  value1={fuelType}
                  value2={fuelLiters}
                  sector="fuelToCO2e"
                  key1="type"
                  key2="litres"
                  status={setFlCalculate}
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
                source={require("../assets/calculatorAssets/VehicleBg.jpg")}
              >
                <Text style={styles.header_text}>Car Travel</Text>
              </ImageBackground>
            </View>
            <View style={styles.calculateBody}>
              
            <Text style={styles.input_text}>Enter Distance</Text>
              <TextInput
                value={carDistance}
                style={styles.input_box}
                placeholder="Enter distance in KM"
                onChangeText={(carDistance) => {
                  setCarDistance(carDistance);
                }}
              />
              
              <Text style={styles.input_text}>Select Vehicle Type</Text>
              <Dropdown
                style={[
                  styles.dropdownStyle,
                  carIsFocus && { borderColor: "blue" },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={car_travel_type}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!carIsFocus ? "Select Vehicle Type" : "..."}
                searchPlaceholder="Search..."
                value={carType}
                onFocus={() => setCarIsFocus(true)}
                onBlur={() => setCarIsFocus(false)}
                onChange={(item) => {
                  setCarType(item.value);
                  setCarIsFocus(false);
                }}
              />

              <Pressable
                style={styles.calculate_button}
                onPress={() => setCarCalculate(true)}
                android_ripple={{ color: "#ff0000" }}
              >
                <Text style={styles.calculate_button_text}>Calculate</Text>
              </Pressable>
              {carCalculate && (
                <Sector
                  value1={carDistance}
                  value2={carType}
                  sector="carTravel"
                  key1="distance"
                  key2="vehicle"
                  status={setCarCalculate}
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
                source={require("../assets/calculatorAssets/FlightBg.jpg")}
              >
                <Text style={styles.header_text}>Flight</Text>
              </ImageBackground>
            </View>
            <View style={styles.calculateBody}>
              
            <Text style={styles.input_text}>Enter Distance</Text>
              <TextInput
                value={flightDistance}
                style={styles.input_box}
                placeholder="The flight distance in KM"
                onChangeText={(flightDistance) => {
                  setFlightDistance(flightDistance);
                }}
              />
              
              <Text style={styles.input_text}>Select Flight Type</Text>
              <Dropdown
                style={[
                  styles.dropdownStyle,
                  flightIsFocus && { borderColor: "blue" },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={flight_type}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!flightIsFocus ? "Select Flight Type" : "..."}
                searchPlaceholder="Search..."
                value={flightType}
                onFocus={() => setFlightIsFocus(true)}
                onBlur={() => setFlightIsFocus(false)}
                onChange={(item) => {
                  setFlightType(item.value);
                  setFlightIsFocus(false);
                }}
              />

              <Pressable
                style={styles.calculate_button}
                onPress={() => setFlightCalculate(true)}
                android_ripple={{ color: "#ff0000" }}
              >
                <Text style={styles.calculate_button_text}>Calculate</Text>
              </Pressable>
              {flightCalculate && (
                <Sector
                  value1={flightDistance}
                  value2={flightType}
                  sector="flight"
                  key1="distance"
                  key2="type"
                  status={setFlightCalculate}
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
                source={require("../assets/calculatorAssets/MotorBikeBg.jpg")}
              >
                <Text style={styles.header_text}>MotorBike</Text>
              </ImageBackground>
            </View>
            <View style={styles.calculateBody}>
              
            <Text style={styles.input_text}>Enter Distance</Text>
              <TextInput
                value={motorbikeDistance}
                style={styles.input_box}
                placeholder="The distance in KM"
                onChangeText={(motorbikeDistance) => {
                  setMotorbikeDistance(motorbikeDistance);
                }}
              />
              
              <Text style={styles.input_text}>Select Motorbike Type</Text>
              <Dropdown
                style={[
                  styles.dropdownStyle,
                  motorbikeIsFocus && { borderColor: "blue" },
                ]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={motorbike_type}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={
                  !motorbikeIsFocus ? "Select MotorBike Type" : "..."
                }
                searchPlaceholder="Search..."
                value={motorbikeType}
                onFocus={() => setMotorbikeIsFocus(true)}
                onBlur={() => setMotorbikeIsFocus(false)}
                onChange={(item) => {
                  setMotorbikeType(item.value);
                  setMotorbikeIsFocus(false);
                }}
              />

              <Pressable
                style={styles.calculate_button}
                onPress={() => setMotorbikeCalculate(true)}
                android_ripple={{ color: "#ff0000" }}
              >
                <Text style={styles.calculate_button_text}>Calculate</Text>
              </Pressable>
              {motorbikeCalculate && (
                <Sector
                  value1={motorbikeDistance}
                  value2={motorbikeType}
                  sector="motorBike"
                  key1="distance"
                  key2="type"
                  status={setMotorbikeCalculate}
                />
              )}
            </View>
          </View>

          <View style={styles.resultCalculateBox}>
            <View style={styles.calculateHeader}>
              <ImageBackground
                style={styles.image1}
                borderTopRightRadius={36}
                borderTopLeftRadius={36}
                source={require("../assets/calculatorAssets/resultBg.jpg")}
              >
                <Text style={styles.header_text}>Result</Text>
              </ImageBackground>
            </View>
            <View style={styles.calculateBody}>
              <Pressable
                style={styles.calculate_button}
                onPress={() => setResult(true)}
                android_ripple={{ color: "#ff0000" }}
              >
                <Text style={styles.calculate_button_text}>Result</Text>
              </Pressable>
              {result && (
                <TotalSum
                  resultStatus={setResult}
                />
              )}
            </View>
          </View>
				</View>
        </View>
        </ScrollView>
  );
}
