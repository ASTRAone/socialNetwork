import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const MessagesScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Сообщения</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})