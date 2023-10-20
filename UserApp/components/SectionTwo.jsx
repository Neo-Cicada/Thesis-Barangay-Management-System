import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList, ScrollView } from 'react-native';
import useRead from '../hooks/useRead';
export default function SectionTwo() {
  const [data, setData] = useState([])
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const boxWidth = (screenWidth * 0.8); // 80% of the screen width
  const boxHeight = (screenHeight * 0.6); // 40% of the screen height
  useRead('images', setData)
  const renderItem = ({ item }) => (
    <View
      key={item.id}
      style={[box.box, { width: boxWidth, height: boxHeight }]}
    >
      <View>
        <Text style={box.title}>{item.title}</Text>
      </View>
      <View>
        <Text style={box.time}>{item.date}</Text>
      </View>
      <View style={{ borderWidth: 1, height: 240 }}>
        <Image
          source={{ uri: item.imageUrl }}
          style={{ borderWidth: 1, flex: 1, borderColor: 'black' }}
        />
      </View>
      <ScrollView>
        <Text style={box.description}>{item.description}</Text>
      </ScrollView>
    </View>
  );
  return (
    <>
      <View style={{ flex: 1, display:'flex', justifyContent: 'center', alignItems:'center' }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true} // Make the FlatList horizontal
        />
      </View>
    </>
  )
}

const box = StyleSheet.create({
  box: {
    borderColor: '#3B5998',
    backgroundColor: 'white',
    borderWidth: 5,
    marginTop: 30,
    borderRadius: 12
  },
  image: {

  },
  title: {
    textAlign:'center',
    fontSize: 26,
    fontWeight: 'bold'
  },
  description: {
    textAlign:'center',
    fontSize: 24,
  },
  time: {
    display:'flex',
    justifyContent:'flex-end',
    fontSize: 20,
  }
})
