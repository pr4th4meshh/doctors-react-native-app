import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import CustomText from "@/components/ui/CustomText"
import { Ionicons } from "@expo/vector-icons"
import Colors from "@/constants/Colors"
import SearchInput from "@/components/ui/SearchInput"
import ActionCard from "@/components/ui/ActionCard"
import { ActionsCardData, InformationCardData } from "@/constants/Data"
import { FlatGrid } from "react-native-super-grid"
import InformationCard from "@/components/ui/InfomationCard"
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated"
import { Link } from "expo-router"

const Home = () => {
  const username = "Prathamesh"
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* header container */}
      <View style={styles.headerContainer}>
        <View>
          <CustomText style={{ fontSize: 26 }}>Hi {username}!</CustomText>
          <CustomText style={{ fontSize: 13, color: "#939396" }}>
            We hope you're healthy & fine
          </CustomText>
        </View>

        <TouchableOpacity style={styles.iconStyle}>
          <Ionicons style={{ fontSize: 24 }} name={"notifications-outline"} />
        </TouchableOpacity>
      </View>
      {/* end of header container */}

      {/* Search for things  */}
      <SearchInput placeholder="symptoms, diseases..." />

      {/* Action cards */}
      <View style={styles.actionCardsContainer}>
        <FlatGrid
          data={ActionsCardData}
          showsVerticalScrollIndicator={false}
          spacing={16}
          itemDimension={164}
          renderItem={({ item }) => (
            <Link href={"/(pages)/book-appointment"}>
              <ActionCard
                cardId={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </Link>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* Information cards */}
      <View style={styles.informationCardContainer}>
        <FlatList
          data={InformationCardData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <InformationCard cardId={item.id} title={item.title} />
          )}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  iconStyle: {
    backgroundColor: "#f9fafb",
    padding: 6,
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "gray",
  },
  actionCardsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    marginHorizontal: -16,
  },
  informationCardContainer: {
    // paddingHorizontal: 10
  },
})

export default Home
