import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { login } from '../../api/authApi';

export const SubmitButton = ({onPressSubmitButton}) => {
    
    
    return (

        <View style={styles.container}>
            <Button
                onPress={onPressSubmitButton}
                icon={
                    <Icon
                        name="arrow-right"
                        size={15}
                        color="white"
                    />
                }
                title=" Giriş Yap"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },

})