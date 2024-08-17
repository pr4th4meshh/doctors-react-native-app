import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import CustomText from "./CustomText"
import { Ionicons } from "@expo/vector-icons"
import { NavigationProp, useNavigation } from "@react-navigation/native"

interface ICard {
  id: string
  icon: string
  title: string
  ratings: number
  price: number
  category: string
}

type RootStackParamList = {
  Doctors: undefined
  "about-doctor": { doctorId: string }
}

const DoctorInformationCard = ({
  id,
  icon,
  title,
  ratings,
  price,
  category,
}: ICard) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const handlePress = () => {
    navigation.navigate("about-doctor", {
      doctorId: id,
    })
  }
  return (
    <TouchableOpacity onPress={handlePress} key={id} style={styles.cardContainer}>
      <View style={styles.iconContainer}>
        <Text style={styles.iconStyle}>{icon}</Text>

        <View style={{ flexDirection: "column", gap: 2 }}>
          <CustomText style={{ fontSize: 16 }}>{title}</CustomText>
          <CustomText style={{ fontSize: 14, color: "#939396" }}>
            {category}
          </CustomText>
          <CustomText style={{ fontSize: 16, color: "#000" }}>
            INR: {price}
          </CustomText>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Ionicons name="star-sharp" style={{ fontSize: 24, color: "orange" }} />
        <CustomText style={{ marginLeft: 6, fontSize: 16 }}>
          {ratings}
        </CustomText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    height: 100,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    marginBottom: 4,
  },
  iconStyle: {
    fontSize: 36,
    backgroundColor: "white",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "gray",
    padding: 4,
  },
  iconContainer: {
    paddingBottom: 0,
    gap: 12,
    flexDirection: "row",
    alignItems: "center",
  },
})

export default DoctorInformationCard
