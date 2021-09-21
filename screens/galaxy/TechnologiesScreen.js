import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export const TechnologiesScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Технологии</Text>
            {/* <Button
                title="Комментарий"
                onPress={() => {
                    navigation.goBack()
                }} /> */}
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
})