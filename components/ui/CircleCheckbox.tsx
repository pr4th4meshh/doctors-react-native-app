import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

interface ICircleCheckbox {
    size: number
    isChecked: boolean
    onPress: () => void
}

const CircleCheckbox = ({ size = 18, isChecked, onPress }: ICircleCheckbox) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={[
          styles.circle,
          {
            width: size,
            height: size,
            borderColor: Colors.primary,
          },
        ]}
      >
        {isChecked && (
          <View
            style={[
              styles.checkedCircle,
              {
                backgroundColor: Colors.primary,
                width: size / 2,
                height: size / 2,
              },
            ]}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    borderWidth: 1,
    borderRadius: 12, // 12 is half of the default size (24/2)
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    borderRadius: 6, // 6 is half of the default size / 2 (12/2)
  },
});

export default CircleCheckbox;
