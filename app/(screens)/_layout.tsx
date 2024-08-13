import { Stack } from "expo-router"

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="home"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="welcome"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  )
}

export default AuthLayout
