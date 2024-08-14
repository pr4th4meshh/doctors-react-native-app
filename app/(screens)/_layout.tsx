import { TabBarIcon } from "@/components/navigation/TabBarIcon"
import Colors from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { Stack, Tabs } from "expo-router"
import { StatusBar } from "react-native"

const AuthLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          tabBarStyle: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "home" : "home-outline"}
                color={color}
              />
            ),
            tabBarLabelStyle: { fontFamily: "Manrope", fontSize: 12 },
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            title: "Calendar",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "calendar" : "calendar-outline"}
                color={color}
              />
            ),
            tabBarLabelStyle: { fontFamily: "Manrope", fontSize: 12 },
          }}
        />{" "}
        <Tabs.Screen
          name="history"
          options={{
            title: "History",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "receipt" : "receipt-outline"}
                color={color}
              />
            ),
            tabBarLabelStyle: { fontFamily: "Manrope", fontSize: 12 },
          }}
        />{" "}
        <Tabs.Screen
          name="chat"
          options={{
            title: "Chat",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "chatbox-ellipses" : "chatbox-ellipses-outline"}
                color={color}
              />
            ),
            tabBarLabelStyle: { fontFamily: "Manrope", fontSize: 12 },
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "person" : "person-outline"}
                color={color}
              />
            ),
            tabBarLabelStyle: { fontFamily: "Manrope", fontSize: 12 },
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
    </>
  )
}

export default AuthLayout
