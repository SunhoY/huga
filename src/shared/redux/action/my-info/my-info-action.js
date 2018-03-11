export const getMyInfo = () => {
    return async (dispatch) => {
        let myInfo = await new Promise(resolve => {resolve({phoneNumber: '011-2232-2322', email: 'hello@gmail.com'})});

        dispatch({
            type: 'UPDATE_MY_INFO',
            value: myInfo
        });
    };
};