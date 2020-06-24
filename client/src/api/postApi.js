import Axios from "axios"

const url = "https://abc-app-api.azurewebsites.net/api"

export const getPosts = () => {
    return Axios.get(url + '/posts')
}