export const convertDeciToInches = (number) => {
    return (parseInt(number) * 3.9371).toFixed(1);
};

export const convertHectoToPounds = (number) => {
    return (parseInt(number) / 4.536).toFixed(1);
};

export const isEmpty = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
};
