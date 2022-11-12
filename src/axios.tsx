import axios from "axios"

const instance = axios.create({
	baseURL: ((!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? "http://localhost:8080/api" : "https://oracui-v0.herokuapp.com/api"),
	headers: {
	},
})

export default instance