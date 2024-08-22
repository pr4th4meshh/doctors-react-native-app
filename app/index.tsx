import React, { useRef } from "react"
import { View, StyleSheet, Image, TouchableOpacity } from "react-native"
import Swiper from "react-native-swiper"
import { useRouter } from "expo-router"
import Colors from "@/constants/Colors"
import CustomText from "@/components/ui/CustomText"

const Index = () => {
  const swiperRef = useRef(null)
  const router = useRouter()

  const handleSkip = () => {
    router.push("/sign-up")
  }

  const handleNext = (index: number) => {
    if (index === 2) {
      router.push("/sign-up")
    } else {
      swiperRef.current.scrollBy(1)
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Swiper
        ref={swiperRef}
        style={styles.wrapper}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        loop={false}
      >
        <View style={styles.slide}>
          <Image
            source={require("../assets/images/onboarding-1.jpg")}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <CustomText style={styles.title}>Welcome!</CustomText>
            <CustomText style={styles.text}>
              We will assist you in efficiently and easily scheduling
              appointments with doctors. Let's get started!
            </CustomText>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={handleSkip}>
              <CustomText style={styles.buttonText}>Skip</CustomText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNext(0)}>
              <CustomText style={styles.buttonText}>Next</CustomText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../assets/images/onboarding-2.jpg")}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <CustomText style={styles.title}>Choose Specialization</CustomText>
            <CustomText style={styles.text}>
              Select the medical specialization you need so we can tailor your
              experience.
            </CustomText>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={handleSkip}>
              <CustomText style={styles.buttonText}>Skip</CustomText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNext(1)}>
              <CustomText style={styles.buttonText}>Next</CustomText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.slide}>
          <Image
            source={require("../assets/images/onboarding-3.jpg")}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <CustomText style={styles.title}>Schedule Your First Appointment</CustomText>
            <CustomText style={styles.text}>
              Choose a suitable time and date to meet your preferred doctor.
              Begin your journey to better health!
            </CustomText>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={handleSkip}>
              <CustomText style={styles.buttonText}>Skip</CustomText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleNext(2)}>
              <CustomText style={styles.buttonText}>Get Started</CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </Swiper>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 460,
    position: "absolute",
    top: 0,
    marginBottom: 240,
  },
  textContainer: {
    position: "absolute",
    top: 500,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: "#333",
  },
  dot: {
    backgroundColor: "#ddd",
    width: 40,
    height: 4,
    borderRadius: 6,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: Colors.primary,
    width: 40,
    height: 4,
    borderRadius: 6,
    marginHorizontal: 4,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    position: "absolute",
    bottom: 50,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.primary,
  },
})

export default Index