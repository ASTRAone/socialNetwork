import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const FeedScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Новости</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#272b30',
    },
});