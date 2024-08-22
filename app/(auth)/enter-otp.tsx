import { View, Text, StyleSheet } from "react-native"
import React from "react"
import CustomText from "@/components/ui/CustomText"
import { useNavigation, useRoute } from "@react-navigation/native"
import Colors from "@/constants/Colors"
import OTPTextView from "react-native-otp-textinput"
import PrimaryButton from "@/components/ui/PrimaryButton"
import Toast from "react-native-toast-message"

const EnterOtp = () => {
  const [otp, setOtp] = React.useState("")
  const route = useRoute()
  const { phoneNumber } = route.params

  const handleOTPChange = (otp: string) => {
    setOtp(otp)
  }

  const navigation = useNavigation()

  const handlePress = () => {
    Toast.show({
      type: "success",
      text1: "Great ! Now let's register yourself.",
      text2: "You have successfully entered the OTP.",
      position: "top",
      visibilityTime: 5000,
      text1Style: {fontSize: 15},
      text2Style: {fontSize: 13}
    })
    navigation.navigate("register-user")
  }

  const disableButton = otp.length !== 6

  return (
    <>
    <Toast />
      <View style={{ flex: 1, backgroundColor: "white", padding: 15 }}>
        <CustomText style={{ fontSize: 24 }}>Enter OTP Code</CustomText>
        <CustomText style={{ marginTop: 6 }}>
          Enter the 6-digit code that we have sent via SMS to{" "}
          <Text style={{ color: Colors.primary }}>{phoneNumber}</Text>
        </CustomText>

        <OTPTextView
          handleTextChange={handleOTPChange}
          inputCellLength={1}
          inputCount={6}
          textInputStyle={styles.otpInput}
          tintColor={Colors.primary}
          containerStyle={{ marginHorizontal: 5, marginTop: 30 }}
        />

        <View style={styles.bottomContainer}>
          <PrimaryButton buttonStyle={[ { backgroundColor: disableButton ? "#8c92ac" : Colors.primary },]} disabled={disableButton} onPress={handlePress} text="Continue" />

          <CustomText style={styles.termsText}>
            By signing up or logging in, I accept the app's{" "}
            <Text style={styles.linkText}>Terms of Service</Text> and{" "}
            <Text style={styles.linkText}>Privacy Policy</Text>
          </CustomText>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
  },
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