import { useDispatch, useSelector } from "react-redux";
import { Space, Button, Input, Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { UserActions } from "../../../store/UserSlice";
import { RootState } from "../../../store/store";
import { UserServices } from "../../../services/UserServices";
import { GlobalActions } from "../../../store/GlobalSlice";

export const User = () => {
	const dispatch = useDispatch();
	const { isUserFound, isLoading, data } = useSelector(
		(state: RootState) => state.UserReducer
	);

	const handleOnClickFindUser = () => {
		dispatch(UserActions.toggleIsLoading(true));
		UserServices.getUser(data.username)
			.then(({ data }) => {
				if (data.status === "400") {
					dispatch(GlobalActions.setErrorMessage(data.message));
				} else {
					dispatch(UserActions.setUser(data.data));
					dispatch(GlobalActions.setSuccessMassage("User detail retrieved."));
				}
			})
			.catch((err) => {
				dispatch(GlobalActions.setErrorMessage(err.message));
			})
			.finally(() => {
				dispatch(UserActions.toggleIsLoading(false));
			});
	};
	const handleOnClickUpdate = () => {
		dispatch(UserActions.toggleIsLoading(true));
		UserServices.updateUser(data)
			.then(({ data }) => {
				if (data.status === "400") {
					dispatch(GlobalActions.setErrorMessage(data.message));
					dispatch(UserActions.toggleIsLoading(false));
				} else {
					handleOnClickFindUser();
					dispatch(
						GlobalActions.setSuccessMassage("User update successfully.")
					);
				}
			})
			.catch((err) => {
				dispatch(GlobalActions.setErrorMessage(err.message));
			});
	};

	return (
		<div className="custom-margin-1-5">
			<Space direction="vertical" size={"large"}>
				<Space direction="horizontal" size={"middle"}>
					<div>
						<div className="text-left">
							<label id="username-label" htmlFor="username-input">
								Username
							</label>
						</div>
						<Space.Compact>
							<Input
								id="username-input"
								addonBefore={<FontAwesomeIcon icon="user" />}
								placeholder="Username"
								value={data.username}
								disabled={isLoading}
								onChange={(e) => {
									dispatch(
										UserActions.updateUser({
											key: "username",
											value: e.target.value,
										})
									);
								}}
							/>
							<Button
								type="default"
								loading={isLoading}
								disabled={!data.username || isLoading}
								onClick={handleOnClickFindUser}
							>
								Submit
							</Button>
						</Space.Compact>
					</div>
					<div>
						<div className="text-left">
							<label id="description-label" htmlFor="description-input">
								Description
							</label>
						</div>
						<Input
							id="description-input"
							addonBefore={<FontAwesomeIcon icon="file-lines" />}
							placeholder="Description"
							value={data.description}
							disabled={!data.description || isLoading}
							onChange={(e) => {
								dispatch(
									UserActions.updateUser({
										key: "description",
										value: e.target.value,
									})
								);
							}}
						/>
					</div>
					<div>
						<div className="text-left">
							<label id="status-label" htmlFor="status-input">
								Status
							</label>
						</div>
						<Select
							id="status-input"
							defaultValue="Active"
							value={data.status}
							disabled={!data.status || isLoading}
							options={[
								{ label: "Active", value: "Active" },
								{ label: "Suspended", value: "Suspended" },
							]}
							onChange={(value) => {
								dispatch(
									UserActions.updateUser({
										key: "status",
										value: value,
									})
								);
							}}
						/>
					</div>
				</Space>
				<Button
					type="primary"
					icon={<FontAwesomeIcon icon="floppy-disk" />}
					loading={isUserFound && isLoading}
					onClick={handleOnClickUpdate}
					disabled={!isUserFound || isLoading}
				>
					Update User
				</Button>
			</Space>
		</div>
	);
};
