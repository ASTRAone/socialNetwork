import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const SearchScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Поиск</Text>
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