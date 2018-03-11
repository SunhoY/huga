const initialState = {};

export const myInfoReducer = (state = initialState, {type, value}) => {
    if(type === 'UPDATE_MY_INFO') {
        return {...state, ...value};
    }

    return state;
};