import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function SectionTwo() {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const boxWidth = (screenWidth * 0.8); // 80% of the screen width
  const boxHeight = (screenHeight * 0.4); // 40% of the screen height

  return (
    <>
      <View style={[box.box, { width: boxWidth, height: boxHeight }]}></View>
      <View style={[box.box, { width: boxWidth, height: boxHeight }]}></View>


    </>
  )
}

const box = StyleSheet.create({
  box: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 12
  }
})
