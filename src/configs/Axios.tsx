import Axios from "axios";

const CustomAxios = Axios.create({
	baseURL: "http://localhost:8080/",
});

export default CustomAxios;
