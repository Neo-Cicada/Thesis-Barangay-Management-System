import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';

const Toast = ({visible, onClose, message}) => {

    return (
        <View style={styles.container}>
            <Snackbar
                md
                style={{backgroundColor:'green', fontWeight:'bold',}}
                visible={visible}
                onDismiss={onClose}
                action={{
                    label: 'Undo',
                    onPress: () => {
                    },
                }}>
                {message}
            </Snackbar>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
});

export default Toast;