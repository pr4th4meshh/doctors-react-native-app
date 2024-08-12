import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import CustomText from '../ui/CustomText';
import Colors from '@/constants/Colors';

interface PrimaryButtonProps {
    text?: string;
    textStyle?: object;
    buttonStyle?: object;
    icon?: React.ReactNode;
    onPress?: () => void
    disabled?: boolean
}

const PrimaryButton = ({ text, textStyle, buttonStyle, icon, onPress, disabled }: PrimaryButtonProps) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={[styles.buttonStyle, buttonStyle]}>
      <View style={styles.contentContainer}>
        {icon && (
          <View style={styles.iconContainer}>
            {icon}
          </View>
        )}
        {text && (
          <CustomText style={[styles.textStyle, textStyle]}>
            {text}
          </CustomText>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: Colors.primary,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%"
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: 8,
  },
  textStyle: {
    fontWeight: '600',
    color: Colors.white
  },
});

export default PrimaryButton;