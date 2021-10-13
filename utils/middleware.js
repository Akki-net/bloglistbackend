
exports.requestLogger = function (request, response, next) {
    console.log('Method:', request.method);
    console.log('Path:  ', request.path);
    console.log('Body:  ', request.body);
    console.log('---');
    next();
};

exports.unknownEndPoint = function (request, response) {
    return response.status(404).send({ error: "unknown endpoint" });
};

exports.errorHandler = function (error, request, response, next) {
    console.error(error.message);

    if (error.name == "CastError") {
        return response.status(400).send({ error: "malformated id" });
    }
    else if (error.name == "ValidationError") {
        return response.status(400).send({ error: error.message });
    }
    next(error);
};

