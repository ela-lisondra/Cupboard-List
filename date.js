
exports.getDate = function () {
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);
}


// Code before refactoring
// module.exports = getDate();

// function getDate() {
    
//     let today = new Date();

//     let options = {
//         weekday: "long",
//         day: "numeric",
//         month: "long"
//     };

//     let day = today.toLocaleDateString("en-US", options);

//     return day;
// }

exports.getDay = function () {
    const today = new Date();

    const options = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-US", options);
}


