import * as React from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Calculator from "./Calculator";
import styles from "../style/resourcescreenStyle";
  
export default function Resource() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.centerView}>

                <View style={{ alignItems: "center" }}>
                    <ImageBackground
                        style={styles.section1_image}
                        borderRadius={50}
                        source={require("../assets/Resources/BG1.jpg")}>
                        <View>
                            <Text style={styles.section1_text}>Lorem Ipsum Dolar</Text>
                        </View>
                    </ImageBackground>

                    <ImageBackground
                        style={styles.section2_image}
                        borderBottomLeftRadius={110}
                        borderBottomRightRadius={110}
                        source={require("../assets/Resources/BG2.jpg")} >

                        <View style={styles.section2_title}>
                            <Text style={styles.section2_text}>What is carbon trading platform?</Text>
                        </View>

                        <View>
                        <View style={styles.section2_modal_center}>
                        <View style={styles.section2_modal_view}>
                            
                        </View>
                        </View>
                        </View>
                    </ImageBackground>

                    <ImageBackground
                        style={styles.section3_image}
                        borderBottomLeftRadius={110}
                        borderBottomRightRadius={110}
                        source={require("../assets/Resources/BG3.jpg")} >

                        <View style={styles.section3_title}>
                            <Text style={styles.section3_text}>How Carbon Trading Platform Works And Who Can Use Carbon Trading Platform?</Text>
                        </View>

                        <View>
                        <View style={styles.section3_modal_center}>
                        <View style={styles.section3_modal_view}>
                            
                        </View>
                        </View>
                        </View>
                    </ImageBackground>

                    <ImageBackground
                        style={styles.section4_image}
                        borderTopLeftRadius={70}
                        borderTopRightRadius={70}
                        source={require("../assets/Resources/BG4.jpg")} >

                        <View style={styles.section4_title}>
                            <Text style={styles.section4_text}>Calculator</Text>
                        </View>

                        
                            <View style={styles.section4_description}>
                                <Text style={styles.section4_description_text}>"Calculate your carbon emissions and make small changes for a big impact."</Text>
                            </View>

                            
                            <View style={styles.section4_button_view}>

                            <Pressable
                                style={styles.section4_description_button}
                                onPress={() => navigation.navigate(Calculator)}
                                android_ripple={{
                                    color: "#3C84AB",
                                }}
                            >
                                <Text style={styles.section4_description_button_text}>Calculate</Text>
                            </Pressable>

                        </View>
                    </ImageBackground>

                    <ImageBackground
                        style={styles.section5_image}
                        borderTopLeftRadius={70}
                        borderTopRightRadius={70}
                        source={require("../assets/Resources/BG5.jpg")} >

                        <View style={styles.section5_title}>
                            <ImageBackground 
                                style={styles.section5_inner_image}
                                borderRadius={5}
                                source={require("../assets/Resources/button.png")}>
                                <View style={styles.section5_title}>
                                    <Text style={styles.section5_button_text}>POLICIES</Text>
                                </View>
                            </ImageBackground>
                        </View>

                    </ImageBackground>
                    
                </View>
            </ScrollView>
        </View>
    );
}