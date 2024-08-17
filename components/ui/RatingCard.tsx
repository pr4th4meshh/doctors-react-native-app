import { View, Text, StyleSheet } from "react-native"
import React from "react"
import { Ionicons } from "@expo/vector-icons"
import CustomText from "./CustomText"

interface IRatingCard {
  id: string
  icon: string
  title: string
  rating: string
  review: string
  postedOn: string
}

const RatingCard = ({
  id,
  icon,
  title,
  rating,
  review,
  postedOn,
}: IRatingCard) => {
  return (
    <View key={id} style={[styles.cardContainer]}>
      <View style={styles.iconContainer}>
        <Text style={styles.iconStyle}>{icon}</Text>

        <View style={styles.cardHeader}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <CustomText style={{ fontSize: 16 }}>{title}</CustomText>

            <View style={{ flexDirection: "row" }}>
              <CustomText style={{ fontSize: 12, color: "#939396" }}>
                {postedOn}
              </CustomText>
            </View>
          </View>
          <CustomText style={{ fontSize: 12 }}>
            <Ionicons name="star-sharp" color="orange" size={14} /> {rating}
          </CustomText>
          <CustomText
            style={{
              fontSize: 12,
              color: "#939396",
            }}
          >
            {review}
          </CustomText>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
    paddingVertical: 15,
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
  cardHeader: {
    flexDirection: "column",
    gap: 2,
    flexWrap: "wrap",
    flexShrink: 1,
  },
})

export default RatingCard
