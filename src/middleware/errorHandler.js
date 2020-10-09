 
module.exports = function(err, req, res, next) {
    if (err.name === "ValidationError") {
        return res.status(400).json(err.message);
    }



    // winston 
    console.log(err);
    return res.status(500).json("something unexpexted happened");
};

// function formatResponse(res, statusCode, result, message) {
//     res.status(statusCode).json(xxxx);
// }
// see weather api walkthrough example