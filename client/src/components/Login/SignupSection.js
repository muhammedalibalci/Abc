import React from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'

export const SignupSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Yeni Hesap Oluştur</Text>
            <Text style={styles.text}>Şifremi Unuttum</Text>
        </View>
    )
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      top: 65,
      width: DEVICE_WIDTH,
      flexDirection: 'row',
      justifyContent: 'space-around',
      
    },
    text: {
      color: 'white',
      backgroundColor: 'transparent',
    },
  });