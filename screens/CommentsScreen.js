import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export const CommentsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Комментарии</Text>
            <Button
                title="Уведомления"
                onPress={() => {
                    navigation.navigate('Notifications')
                }} />
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