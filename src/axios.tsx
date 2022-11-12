import axios from "axios"

const instance = axios.create({
	baseURL: ((!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? "http://localhost:8000/" : "https://relivable-api-v0.herokuapp.com/"),
	headers: {
	},
})

export default instance