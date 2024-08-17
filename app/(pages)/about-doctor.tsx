import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native"
import React, { useState } from "react"
import { DoctorsData } from "@/constants/Data"
import { useRoute, RouteProp } from "@react-navigation/native"
import AboutDoctorCard from "@/components/ui/AboutDoctorCard"
import CustomText from "@/components/ui/CustomText"
import MapComponent from "@/components/ui/LocationMap"
import RatingCard from "@/components/ui/RatingCard"
import PrimaryButton from "@/components/ui/PrimaryButton"

type RootStackParamList = {
  "about-doctor": {
    doctorId: string
  }
}

const AboutDoctorScreen = () => {
  const [visibleCount, setVisibleCount] = useState(3)
  const route = useRoute<RouteProp<RootStackParamList, "about-doctor">>()
  const { doctorId } = route.params

  const doctor = DoctorsData.filter((doctor) => doctor.id === doctorId)

  const loadMoreReviews = () => {
    setVisibleCount((prev) => prev + 3)
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={doctor}
        renderItem={({ item }) => (
          <>
            {/* about card */}
            <AboutDoctorCard
              id={item.id}
              avatar={item.avatar}
              title={item.name}
              ratings={item.ratings}
              price={item.price}
              category={item.category}
            />

            {/* biography card */}
            <View style={styles.biographyCard}>
              <CustomText style={{ fontSize: 18, paddingBottom: 4 }}>
                Biography
              </CustomText>
              <CustomText style={{ fontSize: 13, color: "gray" }}>
                {item.biography}
              </CustomText>
            </View>

            {/* location card + map */}
            <View style={styles.locationContainer}>
              <CustomText style={{ fontSize: 18, paddingBottom: 4 }}>
                Work Location
              </CustomText>
              <CustomText style={{ fontSize: 13, color: "gray" }}>
                {item.address}
              </CustomText>
              <MapComponent
                latitude={item.latitude}
                longitude={item.longitude}
                id={item.id}
                doctorName={item.name}
                description={item.category}
              />
            </View>

            {/* ratings component */}
            <View
              style={{
                padding: 15,
                paddingBottom: 100,
                backgroundColor: "white",
              }}
            >
              <CustomText style={{ fontSize: 18 }}>Ratings (72)</CustomText>
              {item.reviews?.slice(0, visibleCount).map((review) => (
                <RatingCard
                  key={review.id}
                  id={review.id}
                  icon={review.avatar}
                  title={review.name}
                  rating={review.starRatings}
                  review={review.review}
                  postedOn={review.postedOn}
                />
              ))}

              {visibleCount < item.reviews?.length && (
                <TouchableOpacity
                  onPress={loadMoreReviews}
                  style={{ backgroundColor: "white", paddingVertical: 0 }}
                >
                  <CustomText
                    style={{
                      textAlign: "center",
                      color: "blue",
                    }}
                  >
                    See More
                  </CustomText>
                </TouchableOpacity>
              )}
            </View>
          </>
        )}
      />
      <View style={styles.bottomBar}>
        <PrimaryButton text="Make Appointment"></PrimaryButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 10,
  },
  locationContainer: {
    height: 280,
    backgroundColor: "white",
    paddingHorizontal: 15,
    marginBottom: 12,
    flexDirection: "column",
    justifyContent: "center",
  },
  biographyCard: {
    height: 124,
    backgroundColor: "white",
    padding: 15,
    marginBottom: 12,
  },
})

export default AboutDoctorScreen
