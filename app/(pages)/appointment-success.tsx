import React, { useEffect } from "react"
import { View, Text, StyleSheet, Image, StatusBar } from "react-native"
import { useRouter } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import Colors from "@/constants/Colors"
import CustomText from "@/components/ui/CustomText"
import { useNavigation, useRoute } from "@react-navigation/native"
import PrimaryButton from "@/components/ui/PrimaryButton"

const AppointmentSuccess = () => {
  const navigation = useNavigation()
  const handlePress = () => {
    navigation.navigate("home", {
      doctorAvatar: doctorAvatar,
      doctorName: doctorName,
      doctorCategory: doctorCategory,
      appointmentDate: appointmentDate,
      appointmentTime: appointmentTime,
    })
  }

  const route = useRoute()
  const {
    doctorAvatar,
    doctorName,
    doctorCategory,
    appointmentDate,
    appointmentTime,
  } = route.params

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <SafeAreaView style={styles.container}>
        {/* bg white view container */}
        <View style={styles.mainContainer}>
          {/* double tick image */}
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={require("@/assets/images/welcome-tick.png")}
            />
          </View>

          {/* info texts */}
          <CustomText style={styles.headingText}>
            You have successfully made an appointment
          </CustomText>
          <CustomText style={styles.descriptionText}>
            The appointment confirmation has been send to your email.
          </CustomText>

          {/* doctor view */}
          <View style={styles.doctorView}>
            <Image
              source={doctorAvatar}
              style={{
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 10,
                height: 54,
                width: 54,
                objectFit: "contain",
              }}
            />
            <CustomText style={{ fontSize: 18 }}>{doctorName}</CustomText>
            <CustomText style={{ color: "gray", fontSize: 16 }}>
              {doctorCategory}
            </CustomText>
          </View>

          {/* appointment view */}
          <View style={{ flexDirection: "row", paddingHorizontal: 15 }}>
            <View style={styles.doctorAvatar}>
              <Image source={require("@/assets/images/menu-board.png")} />
            </View>

            <View style={{ flexDirection: "column", paddingLeft: 10 }}>
              <CustomText style={{ fontSize: 16, color: "gray" }}>
                Appointment
              </CustomText>
              <CustomText style={{ fontSize: 15 }}>
                on {appointmentDate} at {appointmentTime}
              </CustomText>
            </View>
          </View>

          {/* action / home route button */}
          <View style={{ width: "100%", position: "absolute", bottom: 10 }}>
            <PrimaryButton onPress={handlePress} text="Back to home" />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: Colors.primary,
  },
  headingText: {
    fontSize: 20,
    textAlign: "center",
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: "medium",
    textAlign: "center",
    color: "gray",
  },
  imageContainer: {
    borderRadius: 30,
    backgroundColor: "white",
    height: 110,
    width: 110,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -60,
    borderColor: Colors.primary,
    borderWidth: 10,
  },
  imageStyle: {
    height: 64,
    width: 64,
  },
  mainContainer: {
    backgroundColor: "white",
    flexDirection: "column",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 580,
    borderRadius: 16,
    gap: 12,
  },
  doctorAvatar: {
    height: 54,
    width: 54,
    borderRadius: 8,
    backgroundColor: "#f9f5ff",
    borderColor: "#a0b6ea",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  doctorView: {
    alignItems: "center",
    marginTop: 32,
    marginBottom: 24,
    gap: 6,
  },
})

export default AppointmentSuccess
