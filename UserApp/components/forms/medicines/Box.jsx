import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function Box({ name, isSelected, onSelect, quantity, itemId }) {
  return (
    <TouchableOpacity
      style={[
        styles.box,
        { backgroundColor: isSelected ? '#8B9DC3' : '#DFE3EE' },
      ]}
      onPress={() => onSelect(name, itemId)}
    >
      <Text style={styles.nameText}>{name}</Text>

      <Text style={{
        textAlign: 'center'
      }}>{quantity}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    height: 90, // 5em in pixels
    width: 130,  // 7em in pixels
    borderRadius: 100, // 1em in pixels
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  nameText: {
    fontSize: 20,
    textAlign: 'center'
    // 1em in pixels
  },
});

export default Box;
