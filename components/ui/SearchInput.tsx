import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const SearchInput = () => {
  return (
    <View style={styles.inputContainer}>
    <TouchableOpacity style={styles.searchIconStyle}>
      <Ionicons style={{ fontSize: 24, color: "white" }} name={"search-outline"} />
    </TouchableOpacity>
    <TextInput style={styles.input} placeholder="symptoms, diseases .." />
  </View>
  )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        borderColor: "gray",
        fontFamily: "Manrope",
        height: 50,
        flex: 1,
        marginLeft: 6
      },
      inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 16,
        width: "100%",
        paddingHorizontal: 16
      },
      searchIconStyle: {
        backgroundColor: Colors.primary,
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "gray",
      },
})

export default SearchInput