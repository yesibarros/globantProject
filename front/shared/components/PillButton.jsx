//REACT
import React from "react";

// REACT NATIVE
import { Text, TouchableOpacity } from "react-native";

//STYLE
import styles from "./pillButtonStyles";

const PillButton = ({
  title,
  selected = false,
  onSelect = () => {},
  id,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={
        selected ? { ...styles.circular, ...styles.selected } : styles.circular
      }
      onPress={() => onSelect(id)}
      disabled={disabled}
    >
      <Text
        style={
          selected
            ? { ...styles.textSign, ...styles.selectedTxt }
            : styles.textSign
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default PillButton;
