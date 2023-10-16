import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function Box({ name, isSelected, onSelect, quantity }) {
  return (
    <TouchableOpacity
      style={[
        styles.box,
        { backgroundColor: isSelected ? '#8B9DC3' : '#DFE3EE' },
      ]}
      onPress={() => onSelect(name)}
    >
      <Text style={styles.nameText}>{name}</Text>
      <Text>{quantity}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 120, // 5em in pixels
    width: 140,  // 7em in pixels
    borderRadius: 10, // 1em in pixels
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  nameText: {
    fontSize: 20, // 1em in pixels
  },
});

export default Box;
