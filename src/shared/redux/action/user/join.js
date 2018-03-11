import {createUser} from "../../../service/user-service";

export const registerUser = (user) => {
    return async (dispatch) => {
        let result = await createUser(user);

        dispatch({

        })
    }
};