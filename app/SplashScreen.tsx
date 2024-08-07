import { View, Text, StyleSheet, Image } from "react-native"
import React from "react"
import Colors from "@/constants/Colors"
import Splash_Logo from "../assets/images/splash-logo.png"

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={Splash_Logo} style={styles.splashLogo} />
      </View>
      <Text style={styles.splashHeading}>Si Sehat Mobile App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.splashBg,
  },
  splashLogo: {
    height: 28,
    width: 28,
    resizeMode: "cover"
  },
  logoContainer: {
    height: 56,
    width: 56,
    borderRadius: 8,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  splashHeading: {
    position: "absolute",
    bottom: 50,
    fontSize: 18,
    color: "#13286D",
    fontWeight: "bold"
  }
})

export default SplashScreen
