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
            headerTitleStyle: { fontFamily: "Manrope" },
          }}
        />
        <Stack.Screen
          name="doctors-list"
          options={({ route }: { route: any }) => ({
            headerShown: true,
            headerTitle: route.params?.categoryTitle || "Doctors List",
            headerTitleAlign: "center",
            headerTitleStyle: { fontFamily: "Manrope" },
          })}
        />
        <Stack.Screen
          name="about-doctor"
          options={{
            headerShown: true,
            headerTitle: "About the Doctor",
            headerTitleAlign: "center",
            headerTitleStyle: { fontFamily: "Manrope" },
          }}
        />
        <Stack.Screen
          name="make-appointment"
          options={{
            headerShown: true,
            headerTitle: "Make Appointment",
            headerTitleAlign: "center",
            headerTitleStyle: { fontFamily: "Manrope" },
          }}
        />
        <Stack.Screen
          name="payment"
          options={{
            headerShown: true,
            headerTitle: "Payment",
            headerTitleAlign: "center",
            headerTitleStyle: { fontFamily: "Manrope" },
          }}
        />
        <Stack.Screen
          name="notifications"
          options={{
            headerShown: true,
            headerTitle: "Notifications",
            headerTitleAlign: "center",
            headerTitleStyle: { fontFamily: "Manrope" },
          }}
        />
        <Stack.Screen
          name="appointment-success"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  )
}

export default PagesLayout
