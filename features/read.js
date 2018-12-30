'use strict';

module.exports.getTodo = (event, context, callback) => {
    const todo = 'Make dinner';
    const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: todo
        }),
    };

    callback(null, response);

};
