import { Stack } from "expo-router"

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
            headerTitle: ""
          }}
        />
                <Stack.Screen
          name="register-user"
          options={{
            headerShown: true,
            headerTitle: ""
          }}
        />
      </Stack>
    </>
  )
}

export default AuthLayout
