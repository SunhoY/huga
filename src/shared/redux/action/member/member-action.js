import {authenticate} from "../../../service/member-service";

export const LOGIN = 'login';

export const login = (email, password) => {
    return async (dispatch) => {
        try {
            let {role} = await authenticate(email, password);

            dispatch({
                type: LOGIN,
                data: {role, email}
            });
        } catch (error) {
            throw new Error('로그인 실패');
        }
    }
};