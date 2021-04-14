import React from "react";
import { View, Text, StyleSheet, StatusBar }from "react-native";
import PropTypes from "prop-types";
import {LinearGradient} from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
      },
      Thunderstorm: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
      },
      Drizzle: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
      },
      Rain: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
      },
      Snow: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
      },
      Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
      },
      Clear: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Clear Day",
        subtitle: "It's very fine day."
      },
      Clouds: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
      },
      Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
      },
      Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
      },
      Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
      }
    };


export default function Weather({temp, condition}){
    return (
        <LinearGradient 
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.halfContainer}>
        <MaterialCommunityIcons
            size={86}
            name={weatherOptions[condition].iconName}
            color="white"
        />
            <Text style={styles.temp}>{temp}°</Text>
            <Text>{condition}</Text>
        </View>
        <View style={{ ...styles.halfContainer, ...styles.textContainer}}>
            <Text style={styles.title}>{weatherOptions[condition].title}</Text>
            <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
        </View>
        </LinearGradient>

    );
}

Weather.protoType = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Mist",
        "Haze",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp:{
        fontSize: 50,
        color: "white"
    },
    halfContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title:{
        color: "white",
        fontWeight:"300",
        fontSize:44,
        marginBottom:10
    },
    subtitle:{
        color: "white",
        fontWeight:"600",
        fontSize:24
    },
    textContainer:{
        alignItems: "flex-start" 
    }
}
);