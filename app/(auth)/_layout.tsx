import { Stack } from "expo-router"
import { StatusBar } from "react-native"
import Toast from "react-native-toast-message"

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: true,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="sign-up"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="register"
          options={{
            headerShown: true,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="welcome"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="enter-otp"
          options={{
            headerShown: true,
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="register-user"
          options={{
            headerShown: true,
            headerTitle: "",
          }}
        />
      </Stack>
      <Toast />
    </>
  )
}

export default AuthLayout
