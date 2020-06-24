import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

import logoSrc from '../../assets/Images/logo.jpg'

export default function Logo() {
    return (
        <View style={styles.container}>
            <Image style={styles.picture} source={logoSrc}>

            </Image>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    picture:{
        height:150,
        width: 150,
    }
});