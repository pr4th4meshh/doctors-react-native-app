import { View, Text, StyleSheet } from "react-native"
import React from "react"
import CustomText from "@/components/ui/CustomText"
import { useNavigation, useRoute } from "@react-navigation/native"
import Colors from "@/constants/Colors"
import OTPTextView from "react-native-otp-textinput"
import PrimaryButton from "@/components/ui/PrimaryButton"

const EnterOtp = () => {
  const route = useRoute()
  const { phoneNumber } = route.params
  const handleOTPChange = (otp: string) => {
    console.log(otp)
  }
const navigation = useNavigation()
  const handlePress = () => {
    navigation.navigate("register-user")
  }
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 15 }}>
      <CustomText style={{ fontSize: 24 }}>Enter OTP Code</CustomText>
      <CustomText style={{ marginTop: 6 }}>
        Enter the 6-digit that we have sent via the phone number to{" "}
        <Text style={{ color: Colors.primary }}>{phoneNumber}</Text>
      </CustomText>

      <OTPTextView
        handleTextChange={handleOTPChange}
        inputCellLength={1}
        inputCount={6}
        textInputStyle={{
          width: 50,
          height: 50,
          borderWidth: 1,
          borderColor: "#000",
          borderRadius: 10,
        }}
        tintColor={Colors.primary}
        containerStyle={{ marginHorizontal: 5, marginTop: 30 }}
      />

      <View style={styles.bottomContainer}>
        <PrimaryButton onPress={handlePress} text="Continue" />

        <CustomText style={styles.termsText}>
          By signing up or logging in, I accept the app's{" "}
          <Text style={styles.linkText}>Terms of Service</Text> and{" "}
          <Text style={styles.linkText}>Privacy Policy</Text>
        </CustomText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  termsText: {
    textAlign: "center",
    color: "gray",
    fontSize: 13,
    marginTop: 10,
  },
  linkText: {
    color: Colors.primary,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
    padding: 15,
  },
})

export default EnterOtp
