import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native"
import React, { useState } from "react"
import CustomText from "@/components/ui/CustomText"
import { Ionicons } from "@expo/vector-icons"
import SearchInput from "@/components/ui/SearchInput"
import CategoryCard from "@/components/ui/CategoryCard"
import { Categories } from "@/constants/Data"
import Colors from "@/constants/Colors"

const BookAppointment = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleCategories = showAll ? Categories : Categories.slice(0, 4)
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* header container */}
      <View style={{ paddingHorizontal: 15, paddingTop: 20, paddingBottom: 0, gap: 4 }}>
        <CustomText style={{ fontSize: 20, fontWeight: "bold" }}>
          Medical Specialties
        </CustomText>
        <CustomText style={{ fontSize: 16, color: "#939396" }}>
          Wide selection of doctor's specialties
        </CustomText>
      </View>
      {/* end of header container */}

      {/* search input */}
      <SearchInput />

      {/* categories card */}
      <View style={{ paddingVertical: 32 }}>
        {/* <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard /> */}
        <FlatList
          data={visibleCategories}
          renderItem={({ item }) => (
            <CategoryCard id={item.id} icon={item.icon} title={item.title} />
          )}
        />
        {!showAll && (
          <TouchableOpacity onPress={() => setShowAll(true)} style={{}}>
            <CustomText
              style={{
                textAlign: "center",
                marginTop: 10,
                fontSize: 18,
                fontWeight: "semibold",
                color: Colors.primary,
              }}
            >
              See More
            </CustomText>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {},
})

export default BookAppointment
