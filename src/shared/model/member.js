export const EMPLOYEE = 'employee';

export const createMember = (email, firstName, lastName, role = EMPLOYEE, verified = false) => {
    return {email, firstName, lastName, role, verified};
};

export const memberTransformer = (item) => {
    const {email, firstName, lastName, role, verified} = item;

    return createMember(email, firstName, lastName, role, verified);
};

