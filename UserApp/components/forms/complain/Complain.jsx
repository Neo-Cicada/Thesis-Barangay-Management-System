import React, { useEffect, useState, useContext, createContext } from 'react'
import { View, ScrollView, FlatList, TextInput, Text } from 'react-native';
import ComplainForm from './ComplainForm';
import Box from '../medicines/Box'
export const myComplainContext = createContext();

export default function Complain() {
  const [selectedReport, setSelectReportDalog] = useState([]);
  const [details, setDetails] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    status: 'request',
    selectedReport: [...selectedReport], // spread the array elements
    summon: false
  });
  useEffect(() => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      status: 'request',
      selectedReport: selectedReport,
    }));
  }, [selectedReport]);
  const handleBoxSelect = (name, badGuy) => {
    const index = selectedReport.findIndex((report) => report.name === name);

    if (index !== -1) {
      // Item is already selected, so remove it
      const updatedSelected = selectedReport.filter((report) => report.name !== name);
      setSelectReportDalog(updatedSelected);
    } else {
      // Add a new report with the person's name when it's selected
      setSelectReportDalog([...selectedReport, { name: name, person: badGuy }]);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(details)
    await useUpload(details, 'ReportRequest')
    setSelectReportDalog([])
    setDetails({
      fullname: '',
      email: '',
      phoneNumber: '',
      selectedReport: [],
      summon: false,
      status: 'request'
    });

  }
  const handleReport = (reportName, badGuy) => {
    const updatedSelectedReport = selectedReport.map((item) => {
      if (item.name === reportName) {
        return { ...item, person: badGuy };
      }
      return item;
    });
    setSelectReportDalog(updatedSelectedReport);
  };
  return (
    <>
      <myComplainContext.Provider value={{selectedReport, setSelectReportDalog, details, setDetails}}>
        <ScrollView>
          <View style={{ borderWidth: 1, borderColor: 'red', height: 500 }}>
            <ScrollView style={{ flex: 0.5, borderWidth: 1, borderColor: 'red' }}>
              {/* options */}
              <Box name="Drunk"
                isSelected={selectedReport.some((report) => report.name === "Drunk")}
                onSelect={handleBoxSelect} />
              <Box name="Vandalism"
                isSelected={selectedReport.some((report) => report.name === "Vandalism")}
                onSelect={handleBoxSelect} />
            </ScrollView>
            <ScrollView style={{ flex: 0.5, borderWidth: 1, borderColor: 'red' }}>
              {/* selected options */}
              <FlatList
                data={selectedReport}
                keyExtractor={(item) => item.name}
                renderItem={({ item, index }) => (
                  <View style={{ alignItems: 'center' }}>
                    <Text>{item.name}</Text>
                    <Text>Who's the person you're reporting?</Text>
                    <TextInput
                      value={item.person}
                      onChangeText={(text) => handleReport(item.name, text)}
                      placeholder="Enter person's name"
                    />
                  </View>
                )}
              />
            </ScrollView>
          </View>
          <View style={{ borderWidth: 1, borderColor: 'red', height: 700 }}>
            <ComplainForm />
            {/* information */}
            {/* review summary of information provided*/}
            {/* agree to the terms and conditions */}
            {/* Submit button */}
          </View>
        </ScrollView>
      </myComplainContext.Provider>
    </>
  )
}
