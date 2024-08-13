import React, { useState } from "react"
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import CustomText from "@/components/ui/CustomText"
import { CountryPicker } from "react-native-country-codes-picker"
import PrimaryButton from "@/components/ui/PrimaryButton"
import Colors from "@/constants/Colors"
import { useRouter } from "expo-router"

const Register = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [show, setShow] = useState(false)
  const [countryCode, setCountryCode] = useState("+91")
  const router = useRouter()

  const handleCountryPicker = () => setShow(true)
  const handlePickerClose = () => setShow(false)
  const handleCountrySelection = (item: any) => {
    setCountryCode(item.dial_code)
    handlePickerClose()
  }
  const disabled = phoneNumber.length !== 10
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Register</CustomText>
      <CustomText style={styles.subtitle}>
        Please enter your number to continue your registration
      </CustomText>

      <View style={styles.inputContainer}>
        <CustomText style={styles.inputLabel}>Phone Number</CustomText>
        <View style={styles.phoneInputContainer}>
          <TouchableOpacity
            onPress={handleCountryPicker}
            style={styles.countryPicker}
            accessibilityLabel="Select country code"
          >
            <Text style={styles.countryCodeText}>{countryCode}</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            placeholder="eg: 923-2342-234"
            keyboardType="numeric"
            accessibilityLabel="Enter your phone number"
            maxLength={10}
          />
        </View>
        <CountryPicker
          lang="en"
          show={show}
          popularCountries={["in", "us"]}
          pickerButtonOnPress={handleCountrySelection}
          onBackdropPress={handlePickerClose}
          style={{ modal: { height: 500 } }}
        />
      </View>

      <View style={styles.bottomContainer}>
        <PrimaryButton
          disabled={disabled}
          onPress={() => router.push("/(screens)/welcome")}
          text="Continue"
          buttonStyle={[
            styles.button,
            { backgroundColor: disabled ? "#8c92ac" : Colors.primary },
          ]}
        />
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
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
  },
  title: {
    fontWeight: "semibold",
    fontSize: 32,
  },
  subtitle: {
    color: "black",
    marginTop: 10,
    fontSize: 16,
  },
  inputContainer: {
    marginTop: 40,
  },
  inputLabel: {
    marginBottom: 12,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  countryPicker: {
    height: 60,
    backgroundColor: "white",
    paddingHorizontal: 10,
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderRightWidth: 0,
  },
  countryCodeText: {
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 60,
    borderWidth: 1,
    padding: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderRadius: 8,
    borderColor: "gray",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
    padding: 15,
  },
  button: {
    backgroundColor: Colors.primary,
    marginBottom: 10,
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
})

export default Register
