import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../store/store";
import { GlobalActions } from "../../../store/GlobalSlice";

export const StatusMessage = ({ timeout }: { timeout: number }) => {
	const dispatch = useDispatch();
	const { messageClass, alertMessage } = useSelector(
		(state: RootState) => state.GlobalReducer
	);

	useEffect(() => {
		if (alertMessage) {
			setTimeout(() => {
				dispatch(GlobalActions.clearAlertMessage());
			}, timeout);
		}
	}, [dispatch, alertMessage, timeout]);

	return (
		<>
			{alertMessage && (
				<div className={`custom-message-bar ${messageClass}`}>
					<div>{alertMessage}</div>
				</div>
			)}
		</>
	);
};
