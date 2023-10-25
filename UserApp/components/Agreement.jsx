import React from 'react'
import { View, Dimensions, Modal, ScrollView, } from 'react-native';
import { Button, Dialog, Portal, PaperProvider, Text } from 'react-native-paper';

export default function Agreement({ modalVisible, onDismiss }) {
    const ScreenWidth = Dimensions.get('window').width;
    const ScreenHeight = Dimensions.get('window').height;
    return (
        <>
            <Modal
                animationType="slide" // You can choose an appropriate animation type
                transparent={true}
                visible={modalVisible}
                onRequestClose={onDismiss}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'white', flex: 1, width: Dimensions.get('window').width * 0.8, maxHeight: Dimensions.get('window').height * 0.8, padding: 20, borderRadius: 10 }}>
                            <ScrollView style={{ flex: 1 }} >

                                <Text >
                                    1. Information Collection and Consent

                                    By using the Form, you acknowledge and agree
                                    to the collection of certain personal information as
                                    described herein. Personal information may include, but
                                    is not limited to, your name, email address, phone number,
                                    and other data voluntarily submitted through the Form.
                                </Text>
                                <Text>
                                    2. Purpose of Information Collection

                                    The personal information collected through
                                    the Form may be used for the following purposes:

                                    Responding to inquiries or requests submitted through the Form.
                                    Providing information, updates, or promotional content related to our system/services.
                                    Improving our products, services, and customer experience.
                                    Complying with legal obligations.
                                </Text>
                                <Text>

                                    3. Data Security

                                    We take appropriate measures to safeguard the collected personal
                                    information against unauthorized access, disclosure, alteration, or
                                    destruction. However, please be aware that no method of data transmission
                                    over the internet or electronic storage is 100% secure.
                                </Text>
                                <Text>
                                    4. Data Retention

                                    We will retain your personal information
                                    only for as long as necessary to fulfill the purposes
                                    outlined in this Agreement or as required by law.
                                </Text>
                                <Text>
                                    5. Third-Party Disclosure

                                    We do not sell, trade, or otherwise transfer
                                    your personal information to third parties
                                    without your consent, except as necessary to
                                    provide the services requested or as required by law.
                                </Text>
                                <Text>
                                    6. Cookies and Tracking

                                    The Form may use cookies or similar tracking technologies
                                    to enhance user experience. You have the option to disable cookies through
                                    your browser settings.

                                </Text>
                                <Text>
                                    7. Your Rights

                                    You have the right to access, correct,
                                    update, or delete your personal information
                                    collected through the Form. You may also withdraw your
                                    consent for further data processing at any time by contacting us at amamperez858@gmail.com.
                                </Text>
                                <Text>

                                    8. Changes to this Agreement

                                    We reserve the right to modify this Agreement at any time. Changes will be effective upon posting to the Form. It is your responsibility to review this Agreement periodically for updates.
                                </Text>
                                <Text>
                                    9. Contact Information

                                    If you have any questions, concerns, or requests related to this Agreement or your personal information, please contact us at amamperez858@gmail.com.

                                </Text>
                                <Text>
                                    By using the Form, you indicate your understanding and acceptance of this Privacy Agreement.
                                    If you do not agree with the terms outlined herein, please refrain from using the Form.
                                </Text>
                            </ScrollView>
                    </View>
                </View>
            </Modal>


        </>
    )
}
