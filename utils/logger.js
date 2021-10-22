
exports.info = function (params) {
    if(process.env.NODE_ENV !== 'test'){
    console.log(params);
    }
};

exports.error = function (params) {
    if(process.env.NODE_ENV !== 'test'){
        console.log(params);
        }
};
