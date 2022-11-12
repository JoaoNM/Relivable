import axios from "axios"

const developmentEnv = true;

const instance = axios.create({
	baseURL: (developmentEnv ? "http://localhost:8000/" : "https://relivable.herokuapp.com/"),
	headers: {
	},
})

export default instance