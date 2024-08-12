import { View, Text, StyleSheet, TextProps } from "react-native"
import React from "react"

const CustomText = ({ style, ...props }: TextProps) => {
  return (
    <View>
      <Text style={[styles.text, style]} {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Manrope",
  },
})

export default CustomText
