import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Input } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Form({onChangeEmail,onChangePassword,error}) {
    return (
        <View style={styles.container}>
             <Text style={styles.error}>{error}</Text>
            <Input
                placeholder='Email'
                inputContainerStyle={styles.inputs}
                onChangeText={(text)=>onChangeEmail(text)}
                leftIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='black'
                    />
                }
            />
            <Input
                placeholder="Şifre"
                inputContainerStyle={styles.inputs}
                onChangeText={(text)=>onChangePassword(text)}
                secureTextEntry={true}
                leftIcon={
                    <Icon
                        name='lock'
                        size={24}
                        color='black'
                    />
                } />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputs: {
        borderBottomColor: '#ccc',
        backgroundColor: '#ccc',
        width: 300,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 15,
        borderRadius: 50
    },
    error:{
        marginBottom:10,
        fontSize:14,
    }

})