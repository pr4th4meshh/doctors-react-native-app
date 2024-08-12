import { useRouter } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"

export default function Index() {
  const router = useRouter()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={() => router.push("/(auth)/sign-up")}>
        <Text>Go to sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(auth)/sign-in")}>
        <Text>Go to sign in</Text>
      </TouchableOpacity>
    </View>
  )
}
