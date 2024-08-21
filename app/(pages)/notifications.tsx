import { View } from "react-native"
import React from "react"
import CustomText from "@/components/ui/CustomText"
import Colors from "@/constants/Colors"

const Notifications = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
      <CustomText style={{ fontSize: 28, color: Colors.primary }}>
        Coming Soon!
      </CustomText>
    </View>
  )
}

export default Notifications
