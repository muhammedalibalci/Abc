import Axios from "axios"
import { AsyncStorage } from "react-native";

const url = "https://abc-app-api.azurewebsites.net/api"

export const login = (auth) => {
    return Axios.post(url + '/auth/login', auth)
        .then(async res => {
            await AsyncStorage.setItem('user', JSON.stringify(res.data));
            console.log("Login Succesfully Api");
        })
}