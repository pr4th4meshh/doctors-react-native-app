import { View, Text } from "react-native"
import React from "react"
import Colors from "@/constants/Colors"
import CustomText from "./CustomText"
import { Ionicons } from "@expo/vector-icons"

interface IAppointmentCard {
  doctorAvatar: string
  doctorName: string
  doctorCategory: string
  appointmentDate: string
  appointmentTime: string
}

const AppointmentCard = ({
  doctorAvatar,
  doctorName,
  doctorCategory,
  appointmentDate,
  appointmentTime,
}: IAppointmentCard) => {
  return (
    <View
      style={{
        height: 140,
        backgroundColor: Colors.primary,
        margin: 15,
        flexDirection: "column",
        padding: 10,
        borderRadius: 16,
        justifyContent: "space-around",
      }}
    >
      {/* Doctor info */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 48, paddingRight: 10 }}>{doctorAvatar}</Text>
        <View style={{ flexDirection: "column" }}>
          <CustomText style={{ fontSize: 18, color: "white" }}>
            {doctorName}
          </CustomText>
          <CustomText style={{ fontSize: 14, color: "white" }}>
            {doctorCategory}
          </CustomText>
        </View>
      </View>

      {/* Appointment info */}
      <View
        style={{
          backgroundColor: "#183188",
          flexDirection: "row",
          padding: 10,
          borderRadius: 8,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="calendar-outline"
            size={20}
            style={{ marginRight: 5, color: "white" }}
          />
          <CustomText style={{ color: "white" }}>
            Appointment on: {appointmentDate}
          </CustomText>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Ionicons
            name="time-outline"
            size={20}
            style={{ marginRight: 5, color: "white" }}
          />
          <CustomText style={{ color: "white" }}>
            at {appointmentTime}
          </CustomText>
        </View>
      </View>
    </View>
  )
}

export default AppointmentCard
