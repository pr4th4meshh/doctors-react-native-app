import React, { useEffect } from "react"
import { View, Text, StyleSheet, Image, StatusBar } from "react-native"
import { useRouter } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import Colors from "@/constants/Colors"
import CustomText from "@/components/ui/CustomText"

const WelcomeScreen = () => {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home")
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  const username = "Prathamesh"
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyle}
            source={require("@/assets/images/welcome-tick.png")}
          />
        </View>
        <CustomText style={styles.welcomeText}>
          Welcome {username} 👋
        </CustomText>
        <CustomText style={styles.descriptionText}>
          Welcome to Si - Sehat Mobile App
        </CustomText>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
  },
  welcomeText: {
    fontSize: 28,
    // fontWeight: "",
    color: "white",
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: "medium",
    color: "white",
  },
  imageContainer: {
    borderRadius: 20,
    backgroundColor: "white",
    height: 90,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 14,
  },
  imageStyle: {
    height: 64,
    width: 64,
  },
})

export default WelcomeScreen
