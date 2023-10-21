import React, {useContext} from 'react'
import {View, FlatList, Text} from 'react-native'
import { TextInput } from 'react-native-paper'
import Box from '../medicines/Box'
import { myComplainContext } from './Complain'
export default function ComplainSelect() {
    const violations = ['Drunk', 'Vandalism', 'Others', 'Drugs', 'Violence',]
    const {handleBoxSelect, selectedReport,handleReport} = useContext(myComplainContext)
    return (
        <>
            <View style={{  flex: 0.9 }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 25, fontWeight: 'bold'
                }}>Most Common Complain</Text>
                <View style={{ flex: 1, borderBottomWidth: 3, borderBottomColor: 'black' }}>
                    {/* options */}
                    <View style={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <FlatList
                            numColumns={2}

                            data={violations}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (
                                <Box
                                    name={item}
                                    isSelected={selectedReport.some((report) => report.name === item)}
                                    onSelect={handleBoxSelect}
                                />
                            )}
                        />
                    </View>

                </View>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 25, fontWeight: 'bold'
                }}>Selected Complain</Text>
                <View style={{ flex: 1, }}>
                    {/* selected options */}
                    <FlatList
                        data={selectedReport}
                        keyExtractor={(item) => item.name}
                        renderItem={({ item, index }) => (
                            <View style={{
                                alignItems: 'center',
                                borderBottomColor: 'gray',
                                borderBottomWidth: 1
                            }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Violation {item.name}</Text>
                                <Text>Who's the person you're reporting?</Text>
                                <TextInput
                                    mode='outlined'
                                    value={item.person}
                                    onChangeText={(text) => handleReport(item.name, text)}
                                    label="Enter person's name"
                                />
                            </View>
                        )}
                    />
                </View>
            </View>
        </>
    )
}
