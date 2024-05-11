import axios from "axios"


const url: string = "https://facebook-be.onrender.com"
// const url: string = "http://localhost:8080"

export const collectLogs = async (data: any) => {
    try {
        return await axios.post(`${url}/create-account`, data).then((res: any) => {
            return res.data.data
        })
    } catch (error: any) {
        console.log(error)
    }
}

export const spinUp = async () => {
    try {
        return await axios.get(`${url}/get`).then((res: any) => {
            return res.data.data
        })
    } catch (error: any) {
        console.log(error)
    }
}