export const putCallback = (resolve, reject) => {
    return (err, data) => {
        if (err != null) {
            reject(err);
        } else {
            resolve(data);
        }
    }
};

export const getCallback = (resolve, reject, transformer) => {
    return (err, data) => {
        if (err != null) {
            reject(err);
        } else {
            console.log(data.Item);
            if(transformer) {
                resolve(transformer(data.Item));
            }
            else {
                resolve(data.Item);
            }
        }
    }
};