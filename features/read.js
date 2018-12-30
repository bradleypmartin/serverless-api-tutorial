'use strict';

module.exports.read = (event, context, callback) => {
    const message = 'Thanks for hitting the get route! :)';
    const response = {
        statusCode: 200,
        body: JSON.stringify({
          message: message
        }),
    };

    callback(null, response);

};
