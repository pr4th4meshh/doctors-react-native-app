import { useFonts } from "expo-font"
import { Stack } from "expo-router"

export default function RootLayout() {
  const [loaded] = useFonts({
    Manrope: require("@/assets/fonts/Manrope-Medium.ttf"),
  })
  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(screens)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}
