import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native'

import Form from '../components/Login/Form'
import bgnSrc from '../assets/Images/wallpaper.png'
import Logo from '../components/Login/Logo';
import { SubmitButton } from '../components/Login/SubmitButton';
import { SignupSection } from '../components/Login/SignupSection';
import { login } from '../api/authApi';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const onPressSubmitButton = () => {
        const user = {
            Email: email,
            Password: password
        }
        if (email === "" || password === "") {
            setError('Lütfen boş alanları doldurunuz')
        } else {
            login(user).catch(err => {
                setError('Email veya şifre yanlış')
            })
        }
    }
    const onChangeEmail = (text) => {
        setEmail(text);
    }
    const onChangePassword = (text) => {
        setPassword(text);
    }
    return (
        <ImageBackground style={styles.container} source={bgnSrc}>
            <Logo />
            <Form onChangeEmail={onChangeEmail} onChangePassword={onChangePassword} error={error} />
            <SubmitButton navigation={navigation} onPressSubmitButton={onPressSubmitButton} />
            <SignupSection />
        </ImageBackground>
    )
}
export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
});