import React from "react"
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Platform, Keyboard } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Link, router } from "expo-router"
import CustomText from "@/components/ui/CustomText"
import PrimaryButton from "@/components/ui/PrimaryButton"
import Colors from "@/constants/Colors"

const RegisterUser = () => {
  const [form, setForm] = React.useState({
    username: "",
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = React.useState(false)

  const handleChange = (name: string, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }))
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleSubmit = () => {
    console.log("Form Submitted", form)
    router.push("/home")
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ flex: 1, backgroundColor: "white", padding: 15 }}>
          <CustomText style={{ fontWeight: "semibold", fontSize: 32 }}>
            Register User
          </CustomText>
          <CustomText style={{ color: "black", marginTop: 10, fontSize: 16 }}>
            Please enter a form to continue the register
          </CustomText>

          <View style={{ marginTop: 40 }}>
            <CustomText style={{ marginBottom: 2 }}>Username</CustomText>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleChange("username", text)}
              value={form.username}
              placeholder="Enter your full name"
            />

            <CustomText style={{ marginBottom: 2 }}>Email</CustomText>
            <TextInput
              style={styles.input}
              onChangeText={(text) => handleChange("email", text)}
              value={form.email}
              placeholder="Enter your email"
            />

            <CustomText style={{ marginBottom: 2 }}>Password</CustomText>
            <View style={styles.passwordContainer}>
              <TextInput
                secureTextEntry={!showPassword}
                value={form.password}
                onChangeText={(text) => handleChange("password", text)}
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
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          text="Sign Up"
          buttonStyle={styles.phoneButton}
          onPress={handleSubmit}
        />
        <CustomText style={{ textAlign: "center", fontSize: 13 }}>
          Don't have an account?{" "}
          <Link href="/(auth)/sign-up" asChild>
            <Text style={{ color: Colors.primary }}>Sign Up</Text>
          </Link>
        </CustomText>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  phoneButton: {
    backgroundColor: Colors.primary,
    marginBottom: 10,
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
    flex: 1,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    padding: 15,
  },
})

export default RegisterUser