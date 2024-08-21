import { View, StyleSheet, Image, ImageSourcePropType } from "react-native"
import React from "react"
import CustomText from "./CustomText"
import Colors from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"

interface IImage {
  cardId?: string
  title: string
}

const InformationCard = ({ cardId, title }: IImage) => {
  return (
    <View
      id={cardId}
      style={[
        styles.cardContainer,
        {
          backgroundColor:
            cardId === "1"
              ? Colors.primary
              : cardId === "2"
              ? "#f03348"
              : cardId === "3"
              ? "#fef6ee"
              : "#fef3f2",
        },
      ]}
    >
      <View style={{ flexDirection: "column", justifyContent: "center" }}>
        <CustomText style={{ fontSize: 16, color: "white", flexDirection: "column" }}>
          {title.split(" ").slice(0,3).join(" ")}
        </CustomText>
        
        <CustomText style={{ fontSize: 16, color: "white", flexDirection: "column" }}>
          {title.split(" ").slice(3).join(" ")}
        </CustomText>
        <CustomText style={{ fontSize: 12, color: "white", lineHeight: 24 }}>
          Find out now <Ionicons name="arrow-forward-outline" />
        </CustomText>
      </View>

      <View style={{ flexDirection: "column", justifyContent: "center" }}>
        <Ionicons name="newspaper-outline" style={{color: "white", fontSize: 64}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 104,
    width: 312,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 12,
    marginHorizontal: 10,
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  iconStyle: {
    height: 42,
    width: 42,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})

export default InformationCard
