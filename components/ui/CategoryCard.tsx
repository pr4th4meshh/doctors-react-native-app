import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import React from "react"
import CustomText from "./CustomText"
import { Ionicons } from "@expo/vector-icons"
import Colors from "@/constants/Colors"
import { NavigationProp, useNavigation } from "@react-navigation/native"

interface ICard {
  id: string
  icon: string
  title: string
}

type RootStackParamList = {
  Categories: undefined
  "doctors-list": { categoryId: string; categoryTitle: string }
}

const CategoryCard = ({ id, icon, title }: ICard) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const handlePress = () => {
    navigation.navigate("doctors-list", {
      categoryId: id,
      categoryTitle: title,
    })
  }
  return (
    <TouchableOpacity onPress={handlePress} key={id} style={styles.cardContainer}>
      <View
        style={{
          paddingBottom: 0,
          gap: 12,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 36,
            backgroundColor: "white",
            borderRadius: 30,
            borderWidth: 1,
            borderColor: "gray",
            padding: 4,
          }}
        >
          {icon}
        </Text>

        <View style={{ flexDirection: "column", gap: 4 }}>
          <CustomText style={{ fontSize: 18 }}>
            {title}
          </CustomText>
          <CustomText style={{ fontSize: 14, color: "#939396" }}>
            Wide selection of doctor's specialties
          </CustomText>
        </View>
      </View>

      <Ionicons
        name="chevron-forward-outline"
        style={{ fontSize: 24, color: Colors.primary }}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    height: 88,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    marginBottom: 4,
  },
})

export default CategoryCard
