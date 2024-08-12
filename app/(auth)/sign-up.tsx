import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native"
import React from "react"
import CustomText from "@/components/ui/CustomText"
import PrimaryButton from "@/components/ui/PrimaryButton"
import Colors from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { Link, router } from "expo-router"

const SignupTab = () => {
  const { width } = useWindowDimensions()
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ width: width, flex: 0.4 }}
        resizeMode="cover"
        source={require("../../assets/images/onboarding-1.jpg")}
      />
      <View style={{ flex: 0.6, padding: 15 }}>
        <CustomText style={{ fontWeight: "semibold", fontSize: 32 }}>
          Si - Sehat
        </CustomText>
        <CustomText style={{ color: "gray", marginTop: 10, fontSize: 16 }}>
          Begin your journey to better health!
        </CustomText>

        <View style={{ justifyContent: "space-between", marginTop: 70 }}>
          <PrimaryButton
            onPress={() => router.push("/register")}
            text="Continue With Phone Number"
            buttonStyle={styles.phoneButton}
          />
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

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <CustomText>
              Already have an account?{" "}
              <Link href="/sign-in" asChild>
                <Text style={{ color: Colors.primary }}>Sign In</Text>
              </Link>
            </CustomText>
          </View>
        </View>
        <View style={{
              position: "absolute",
              bottom: 20,
              left: 0,
              right: 0,
              alignItems: "center",
              padding: 15
        }}>
          <CustomText
            style={{
              textAlign: "center",
              color: "gray",
              fontSize: 13
            }}
          >
            By signing up or logging in, i accept the apps{" "}
            <Text style={{ color: Colors.primary }}>Terms of Service</Text> and{" "}
            <Text style={{ color: Colors.primary }}>Privacy Policy</Text>
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
})

export default SignupTab
