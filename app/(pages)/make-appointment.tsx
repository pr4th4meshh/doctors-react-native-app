import { View, Text, FlatList, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { DoctorsData } from "@/constants/Data"
import CustomText from "@/components/ui/CustomText"
import { CalendarList } from "react-native-calendars"
import Colors from "@/constants/Colors"
import PrimaryButton from "@/components/ui/PrimaryButton"

type RootStackParamList = {
  "make-appointment": {
    doctor: { name: string; id: string }
  }
}

const MakeAppointment = () => {
  const route = useRoute<RouteProp<RootStackParamList, "make-appointment">>()
  const { doctor } = route.params

  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState(null)

  const timeSlots = {
    morning: ["10:00", "11:00", "12:00", "13:30"],
    afternoon: ["18:00", "19:00", "20:00"],
  }

  const navigation = useNavigation()
  const handlePress = () => {
    navigation.navigate("payment", {
      appointmentDate: selectedDate,
      appointmentTime: selectedTime,
      doctorId: doctor.id,
    })
  }

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ padding: 15 }}>
        <CustomText style={{ fontSize: 20 }}>
          Select your visit date & time
        </CustomText>
        <CustomText style={{ fontSize: 14, color: "gray" }}>
          You can choose the date and time from the available {doctor.name}'s
          schedule
        </CustomText>
      </View>

      <View style={{ paddingHorizontal: 15 }}>
        <CalendarList
          horizontal
          minDate={new Date().toISOString().split("T")[0]}
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: Colors.primary },
          }}
          pastScrollRange={0}
          futureScrollRange={2}
          pagingEnabled
          calendarWidth={350}
          theme={{
            selectedDayBackgroundColor: "#2A7FFF",
            todayTextColor: Colors.primary,
            dayTextColor: "#2d4150",
          }}
        />

        {/* Time Slots */}
        {selectedDate ? (
          <>
            <CustomText style={{ marginTop: 20, fontSize: 16 }}>
              Morning Set
            </CustomText>
            <FlatList
              data={timeSlots.morning}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setSelectedTime(item)}
                  style={{
                    margin: 5,
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    borderRadius: 10,
                    backgroundColor:
                      selectedTime === item ? Colors.primary : "#e0e0e0",
                  }}
                >
                  <Text
                    style={{ color: selectedTime === item ? "white" : "black" }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />

            <CustomText style={{ marginTop: 20, fontSize: 16 }}>
              Afternoon Set
            </CustomText>
            <FlatList
              data={timeSlots.afternoon}
              horizontal
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setSelectedTime(item)}
                  style={{
                    margin: 5,
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    borderRadius: 10,
                    backgroundColor:
                      selectedTime === item ? Colors.primary : "#e0e0e0",
                  }}
                >
                  <Text
                    style={{ color: selectedTime === item ? "white" : "black" }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
          </>
        ) : (
          <Text style={{ marginTop: 20 }}>Please select a date first.</Text>
        )}
      </View>

      {selectedDate && selectedTime ? (
        <View
          style={{
            backgroundColor: "white",
            position: "absolute",
            bottom: 0,
            width: "100%",
            padding: 10,
          }}
        >
          <PrimaryButton onPress={handlePress} text="Confirm" />
        </View>
      ) : null}
    </View>
  )
}

export default MakeAppointment
