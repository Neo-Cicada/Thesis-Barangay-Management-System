import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, FlatList, ScrollView } from 'react-native';
import useRead from '../hooks/useRead';
import useRecent from '../hooks/useRecent';
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
      <View style={{ borderRadius: 10, height: 240 }}>
        <Image
          source={{ uri: item.imageUrl }}
          style={{flex: 1, borderRadius: 10 }}
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
          horizontal={false}
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
    borderRadius: 12,
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
