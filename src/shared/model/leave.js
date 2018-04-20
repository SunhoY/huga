export const createLeaveSummary = (ownerEmail, onProcess, total, used) => {
    return {ownerEmail, onProcess, total, used};
};

export const leaveSummaryTransformer = (item) => {
    const {ownerEmail, onProcess, total, used} = item;

    return createLeaveSummary(ownerEmail, onProcess, total, used);
};