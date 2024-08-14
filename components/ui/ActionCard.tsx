import {
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native"
import React from "react"
import CustomText from "./CustomText"

interface IImage {
  cardId: string
  icon: ImageSourcePropType
  title: string
  description: string
}

const ActionCard = ({ cardId, icon, title, description }: IImage) => {
  return (
    <View
      id={cardId}
      style={[
        styles.cardContainer,
        {
          backgroundColor:
            cardId === "1"
              ? "#f9f5ff"
              : cardId === "2"
              ? "#edfcf2"
              : cardId === "3"
              ? "#fef6ee"
              : "#fef3f2",
        },
      ]}
    >
      <View
        style={[
          styles.iconStyle,
          {
            borderColor:
              cardId === "1"
                ? "#a0b6ea"
                : cardId === "2"
                ? "#aaf0c4"
                : cardId === "3"
                ? "#f9dbaf"
                : "#fecdca",
          },
        ]}
      >
        <Image style={{ height: 32, width: 32 }} source={icon} />
      </View>
      <CustomText style={{ fontSize: 18 }}>{title}</CustomText>
      <CustomText style={{ fontSize: 12, color: "gray" }}>
        {description}
      </CustomText>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 174,
    width: 174,
    flexDirection: "column",
    justifyContent: "space-evenly",
    paddingHorizontal: 16,
    borderRadius: 12,
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

export default ActionCard
