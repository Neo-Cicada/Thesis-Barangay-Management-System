import React, { useEffect, useState, useContext, createContext } from 'react'
import { View, ScrollView, FlatList, Text } from 'react-native';
import ComplainForm from './ComplainForm';
import Box from '../medicines/Box'
import { TextInput, Button } from 'react-native-paper';
import ComplainSelect from './ComplainSelect';
export const myComplainContext = createContext();

export default function Complain() {
  const [selectedReport, setSelectReportDalog] = useState([]);
  const [proceed, setProceed] = useState(false)
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
      <myComplainContext.Provider value={{
        selectedReport,
        setSelectReportDalog, details,
        setDetails, handleBoxSelect, handleReport,
      }}>
        <View style={{ flex: 1 }}>
          {proceed ? <ComplainForm /> : <ComplainSelect />}

          <View style={{
            flex: 0.1,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',

          }}>
            <Button
              mode='contained'
              buttonColor='#3B5998'
              onPress={() => setProceed(!proceed)} >
              {proceed ? <Text>BACK</Text> : <Text>NEXT</Text>}
            </Button>
          </View>
        </View>
      </myComplainContext.Provider>
    </>
  )
}
