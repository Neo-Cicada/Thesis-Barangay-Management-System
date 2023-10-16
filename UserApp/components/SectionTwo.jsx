import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import useRead from '../hooks/useRead';
export default function SectionTwo() {
  const [data, setData] = useState([])
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const boxWidth = (screenWidth * 0.8); // 80% of the screen width
  const boxHeight = (screenHeight * 0.6); // 40% of the screen height
  useRead('images', setData)
  const items = data.map(item => <View key={item.id}
    style={[box.box, { width: boxWidth, height: boxHeight }]}>
    <View><Text>{item.title}</Text></View>
    <View><Text>{item.description}</Text></View>
    <View><Text>{item.date}</Text></View>
    <View style={{ borderWidth: 1, borderColor: 'red', height: 250 }}>
      <Image source={ {uri: item.imageUrl} } style={{borderWidth: 1, flex: 1, borderColor: 'black'}} />
    </View>
  </View>)
  return (
    <>
      <ScrollView>
        {items}
      </ScrollView>
    </>
  )
}

const box = StyleSheet.create({
  box: {
    borderColor: 'red',
    borderWidth: 1,
    marginTop: 30,
    borderRadius: 12
  },
  image: {

  },
  title: {

  },
  description: {

  },
  time: {

  }
})
