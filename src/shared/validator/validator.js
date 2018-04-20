const ERROR = 'error';
const SUCCESS = 'success';

export const notEmpty = (value) => {
    if (value === null || value === undefined) {
        return ERROR;
    }

    if (value.length === 0) {
        return ERROR;
    }

    return SUCCESS;
};