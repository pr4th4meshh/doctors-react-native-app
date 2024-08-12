import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  TextInput,
} from "react-native"
import React from "react"
import CustomText from "@/components/ui/CustomText"
import PrimaryButton from "@/components/ui/PrimaryButton"
import Colors from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { Link } from "expo-router"

const SignupTab = () => {
  const { width } = useWindowDimensions()
  const [password, setPassword] = React.useState("")
  const [text, onChangeText] = React.useState("")
  const [showPassword, setShowPassword] = React.useState(false)

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const [number, onChangeNumber] = React.useState("")
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 0.6, padding: 15 }}>
        <CustomText style={{ fontWeight: "semibold", fontSize: 32 }}>
          Welcome Back
        </CustomText>
        <CustomText style={{ color: "black", marginTop: 10, fontSize: 16 }}>
          Please enter a form to login this app
        </CustomText>

        <View style={{ marginTop: 40 }}>
          <CustomText style={{ marginBottom: 2 }}>Email or Username</CustomText>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Enter your full name"
          />

          <CustomText style={{ marginBottom: 2 }}>Password</CustomText>
          <View style={styles.passwordContainer}>
            <TextInput
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              style={styles.passwordInput}
              placeholder="Enter your Password"
            />
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#aaa"
              style={{ marginLeft: 20 }}
              onPress={toggleShowPassword}
            />
          </View>

          <CustomText
            style={{
              marginBottom: 28,
              textAlign: "right",
              textDecorationLine: "underline",
            }}
          >
            Forgot Password
          </CustomText>

          <PrimaryButton text="Sign In" buttonStyle={styles.phoneButton} />
        </View>

        <View style={{ justifyContent: "space-between", marginTop: 70 }}>
          <PrimaryButton
            icon={
              <Ionicons name="logo-google" size={18} color={Colors.primary} />
            }
            text="Sign in with Google"
            buttonStyle={styles.googleButton}
            textStyle={styles.textStyle}
          />
          <PrimaryButton
            icon={<Ionicons name="logo-apple" size={18} color="white" />}
            text="Sign in with Apple"
            buttonStyle={styles.appleButton}
          />

          <CustomText style={{ textAlign: "center", fontSize: 13, top: 40 }}>
            Don't have an account?{" "}
            <Link href="/(auth)/sign-up" asChild>
              <Text style={{ color: Colors.primary }}>Sign Up</Text>
            </Link>
          </CustomText>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  phoneButton: {
    backgroundColor: Colors.primary,
    marginBottom: 10,
  },
  googleButton: {
    backgroundColor: Colors.white,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  appleButton: {
    backgroundColor: Colors.primary,
    marginBottom: 10,
  },
  textStyle: {
    color: Colors.primary,
  },
  input: {
    height: 48,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    borderColor: "gray",
  },
  passwordContainer: {
    flexDirection: "row",
    height: 48,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    borderColor: "gray",
  },
  passwordInput: {
    flex: 1
  },
})

export default SignupTab
