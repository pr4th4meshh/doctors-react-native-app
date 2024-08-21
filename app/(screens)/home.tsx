import { View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomText from "@/components/ui/CustomText";
import { Ionicons } from "@expo/vector-icons";
import SearchInput from "@/components/ui/SearchInput";
import ActionCard from "@/components/ui/ActionCard";
import { ActionsCardData, InformationCardData } from "@/constants/Data";
import InformationCard from "@/components/ui/InfomationCard";
import { Link, router } from "expo-router";
import AppointmentCard from "@/components/ui/AppointmentCard";
import { useRoute } from "@react-navigation/native";

const Home = () => {
  const staticUsername = "Prathamesh";
  const route = useRoute();
  const {
    doctorAvatar,
    doctorName,
    doctorCategory,
    appointmentDate,
    appointmentTime,
    username
  } = route.params;

  // Data for FlatList
  const flatListData = [
    { type: "header" },
    { type: "search" },
    ...(appointmentDate ? [{ type: "appointment" }] : []),
    { type: "actions", data: ActionsCardData },
    { type: "information", data: InformationCardData },
  ];

  const handlePress = () => {
    router.push("/notifications")
  }

  const renderItem = ({ item }) => {
    switch (item.type) {
      case "header":
        return (
          <View style={styles.headerContainer}>
            <View>
              <CustomText style={{ fontSize: 26 }}>Hi {username || staticUsername}!</CustomText>
              <CustomText style={{ fontSize: 13, color: "#939396" }}>
                We hope you're healthy & fine
              </CustomText>
            </View>

            <TouchableOpacity onPress={handlePress} style={styles.iconStyle}>
              <Ionicons style={{ fontSize: 24 }} name={"notifications-outline"} />
            </TouchableOpacity>
          </View>
        );

      case "search":
        return <SearchInput placeholder="symptoms, diseases..." />;

      case "appointment":
        return (
          <AppointmentCard
            doctorAvatar={doctorAvatar}
            doctorName={doctorName}
            doctorCategory={doctorCategory}
            appointmentDate={appointmentDate}
            appointmentTime={appointmentTime}
          />
        );

      case "actions":
        return (
          <FlatList
            data={item.data}
            keyExtractor={(action) => action.id}
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
            numColumns={2}
            columnWrapperStyle={styles.actionCardsContainer}
            scrollEnabled={false}
          />
        );

      case "information":
        return (
          <FlatList
            data={item.data}
            keyExtractor={(info) => info.id}
            renderItem={({ item }) => (
              <InformationCard cardId={item.id} title={item.title} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={flatListData}
        keyExtractor={(item, index) => item.type + index}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

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
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
});

export default Home;