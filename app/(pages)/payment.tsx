import { View, Image, TouchableOpacity, StyleSheet } from "react-native"
import React, { useState } from "react"
import { RouteProp, useRoute } from "@react-navigation/native"
import { DoctorsData } from "@/constants/Data"
import DoctorInformationCard from "@/components/ui/DoctorInformationCard"
import CustomText from "@/components/ui/CustomText"
import { Ionicons } from "@expo/vector-icons"
import Colors from "@/constants/Colors"
import CircleCheckbox from "@/components/ui/CircleCheckbox"
import { router, useNavigation } from "expo-router"

type RootStackParamList = {
  payment: {
    appointmentDate: string
    appointmentTime: string
    doctorId: string
  }
}

const Payment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    string | null
  >(null)

  const navigation = useNavigation()
  const route = useRoute<RouteProp<RootStackParamList>>()
  const { appointmentDate, appointmentTime, doctorId } = route.params
  const doctor = DoctorsData.find((doctor) => doctor.id === doctorId)

  const handlePaymentMethodChange = (method: string) => {
    setSelectedPaymentMethod(method)
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <DoctorInformationCard
        id={doctor?.id}
        icon={doctor?.avatar}
        title={doctor?.name}
        ratings={doctor?.ratings}
        price={doctor?.price}
        category={doctor?.category}
      />

      <View style={styles.scheduleContainer}>
        <CustomText style={{ fontSize: 16, marginBottom: 12 }}>
          Schedule Date
        </CustomText>
        <CustomText
          onPress={() => navigation.goBack()}
          style={{ color: Colors.primary, fontSize: 16 }}
        >
          <Ionicons name="create-outline" style={{ fontSize: 16 }} />
          Edit
        </CustomText>
      </View>

      <View style={{ flexDirection: "row", paddingHorizontal: 15 }}>
        <View style={styles.appointmentContainer}>
          <Image source={require("@/assets/images/menu-board.png")} />
        </View>

        <View style={{ flexDirection: "column", paddingLeft: 10 }}>
          <CustomText style={{ fontSize: 14, color: "gray" }}>
            Appointment
          </CustomText>
          <CustomText style={{ fontSize: 15 }}>
            on {appointmentDate} at {appointmentTime}
          </CustomText>
        </View>
      </View>

      {/* Select payment methods */}
      <View
        style={{
          paddingHorizontal: 15,
          marginTop: 40,
          flexDirection: "column",
          gap: 16,
        }}
      >
        <CustomText style={{ fontSize: 16, marginBottom: 8 }}>
          Select Payment Method
        </CustomText>

        {/* Payment Options */}
        {["Credit Card", "UPI", "Cash at clinic"].map((method) => (
          <View
            key={method}
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomText style={{ fontSize: 14 }}>{method}</CustomText>
            <CircleCheckbox
              size={20}
              isChecked={selectedPaymentMethod === method}
              onPress={() => handlePaymentMethodChange(method)}
            />
          </View>
        ))}
      </View>

      {/* Total payment bill */}
      <View style={styles.selectPaymentContainer}>
        <CustomText style={{ fontSize: 16, marginBottom: 8 }}>
          Select Payment Method
        </CustomText>

        {/* Payment Options */}
        <View style={{ flexDirection: "column", gap: 12 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomText style={{ fontSize: 16, color: "gray" }}>
              Consultation Fee
            </CustomText>
            <CustomText style={{ fontSize: 16 }}>{doctor?.price}</CustomText>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomText style={{ fontSize: 16, color: "gray" }}>
              Admin Fee
            </CustomText>
            <CustomText style={{ fontSize: 16 }}>Free</CustomText>
          </View>
        </View>
      </View>

      {selectedPaymentMethod && (
        <View style={styles.bottomBar}>
          <CustomText style={{ fontSize: 18 }}>
            Total: INR {doctor?.price}
          </CustomText>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.primary,
              height: 48,
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              width: 150,
            }}
          >
            <CustomText style={{ color: "white" }}>
              {selectedPaymentMethod === "Cash at clinic" ? "Confirm" : "Pay"}
            </CustomText>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  appointmentContainer: {
    height: 46,
    width: 46,
    borderRadius: 8,
    backgroundColor: "#f9f5ff",
    borderColor: "#a0b6ea",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  scheduleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 20,
  },
  selectPaymentContainer: {
    paddingHorizontal: 15,
    marginTop: 40,
    flexDirection: "column",
    gap: 16,
  },
  bottomBar: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
})

export default Payment
