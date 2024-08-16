import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native"
import React, { useState } from "react"
import CustomText from "@/components/ui/CustomText"
import SearchInput from "@/components/ui/SearchInput"
import CategoryCard from "@/components/ui/CategoryCard"
import { Categories } from "@/constants/Data"
import Colors from "@/constants/Colors"

const BookAppointment = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleCategories = showAll ? Categories : Categories.slice(0, 4)

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        ListHeaderComponent={() => (
          <>
            <View
              style={{
                paddingHorizontal: 15,
                paddingTop: 16,
                paddingBottom: 0,
                gap: 4,
              }}
            >
              <CustomText style={{ fontSize: 20 }}>
                Medical Specialties
              </CustomText>
              <CustomText style={{ fontSize: 16, color: "#939396" }}>
                Wide selection of doctor's specialties
              </CustomText>
            </View>
              <SearchInput placeholder="symptoms, diseases..." />
          </>
        )}
        data={visibleCategories}
        renderItem={({ item }) => (
          <CategoryCard id={item.id} icon={item.icon} title={item.title} />
        )}
        keyExtractor={(item) => item.id.toString()}
        ListFooterComponent={() =>
          !showAll ? (
            <TouchableOpacity
              onPress={() => setShowAll(true)}
              style={styles.seeMoreButton}
            >
              <CustomText style={styles.seeMoreText}>See More</CustomText>
            </TouchableOpacity>
          ) : null
        }
        // contentContainerStyle={{ paddingVertical: 16 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  seeMoreButton: {
    marginTop: 10,
    alignItems: "center",
  },
  seeMoreText: {
    fontSize: 18,
    fontWeight: "semibold",
    color: Colors.primary,
  },
})

export default BookAppointment
