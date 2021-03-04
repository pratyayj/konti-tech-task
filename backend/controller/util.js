const emptyToNull = function(str) {
    return (str === "") ? null : str;
};

const checkEmpty = function(str) {
    return (str === "" || str === undefined) ? true : false;
};

module.exports = {
    emptyToNull,
    checkEmpty
};