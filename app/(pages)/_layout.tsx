import { Stack } from "expo-router"

const PagesLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="book-appointment"
          options={{
            headerShown: true,
            headerTitle: "Book an Appointment",
            headerTitleAlign: "center",
            headerTitleStyle: { fontFamily: "Manrope", fontWeight: "bold" },
          }}
        />
      </Stack>
    </>
  )
}

export default PagesLayout
