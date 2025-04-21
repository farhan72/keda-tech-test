const sumEvenNumbersInObject = (obj) => {
    if (!obj) return null;

    return Object.entries(obj).reduce((sum, [key, value]) => {
        if (/[0-9]/.test(value) && (value % 2 === 0)) {
            return sum + value;
        } else if ((typeof value === 'object') && !!value) {
            return sum + sumEvenNumbersInObject(value);
        }
        return sum;
    }, 0);
};

module.exports = sumEvenNumbersInObject;