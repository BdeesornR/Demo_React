import Axios from "../configs/Axios";

import { UserData } from "./dto";

export const UserServices = {
	getUser: (username: string) => {
		return Axios.get(`user/get-user/${username}`);
	},

	updateUser: (data: UserData) => {
		return Axios.put(`user/update`, data);
	},
};
