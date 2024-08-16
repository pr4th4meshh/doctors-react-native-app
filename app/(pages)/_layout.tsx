import { Stack } from "expo-router"

type DoctorsListRouteParams = {
  categoryTitle?: string
}

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
      </Stack>
    </>
  )
}

export default PagesLayout
