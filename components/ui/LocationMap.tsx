import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";

interface IMapComponent {
    latitude: number
    longitude: number
    id: string 
    doctorName: string
    description: string
}

const MapComponent = ({latitude, longitude, id, doctorName, description}: IMapComponent) => {
  const initialRegion = {
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  };

  return (
    <View style={styles.mapContainer}>
      <MapView style={styles.map} initialRegion={initialRegion}>
          <Marker
            key={id}
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
            title={doctorName}
            description={description}
          />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    height: 150,
    marginVertical: 10,
  },
  map: {
    height: 150,
    width: "100%"
  },
});

export default MapComponent;
