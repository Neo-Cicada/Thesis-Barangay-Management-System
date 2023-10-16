import React, {useState, useContext, createContext} from 'react'
import { ScrollView, Text, View } from 'react-native'
export default function Equipment() {
  return (
    <>
      <ScrollView>
          <View style={{ borderWidth: 1, borderColor: 'red', height: 500 }}>
            <ScrollView style={{ flex: 0.5, borderWidth: 1, borderColor: 'red' }}>
              {/* options */}
            </ScrollView>
            <ScrollView style={{ flex: 0.5, borderWidth: 1, borderColor: 'red' }}>
              {/* selected options */}
            </ScrollView>
          </View>
          <View style={{ borderWidth: 1, borderColor: 'red', height: 700 }}>
            {/* information */}
            {/* review summary of information provided*/}
            {/* agree to the terms and conditions */}
            {/* Submit button */}
          </View>
        </ScrollView>
    </>
  )
}
