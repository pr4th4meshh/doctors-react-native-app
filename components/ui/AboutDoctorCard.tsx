import { View, Text, StyleSheet, ImageProps } from "react-native"
import React from "react"
import DoctorInformationCard from "./DoctorInformationCard"
import CustomText from "./CustomText"

interface IDoctorCard {
  id: string
  avatar: ImageProps
  title: string
  price: number
  ratings: number
  category: string
}

const AboutDoctorCard = ({
  id,
  avatar,
  title,
  ratings,
  price,
  category,
}: IDoctorCard) => {
  return (
    <View
      style={styles.mainContainer}
    >
      <DoctorInformationCard
        id={id}
        icon={avatar}
        title={title}
        ratings={ratings}
        price={price}
        category={category}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <View style={{ flexDirection: "column" }}>
          <Text>🏥 Hospital</Text>
          <CustomText style={{ fontSize: 16 }}>RS. Hermina</CustomText>
        </View>

        <View style={{ flexDirection: "column" }}>
          <Text>🕧 Working Hours</Text>
          <CustomText style={{ fontSize: 16 }}>07:00 - 18:00</CustomText>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        width: "100%",
        paddingHorizontal: 0,
        marginBottom: 12,
        height: 176,
        backgroundColor: "white",
      }
})

export default AboutDoctorCard
