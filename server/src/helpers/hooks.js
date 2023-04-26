// functions

const { codes, strings } = require("../Constants");

function serverDown(res) {
    return  res.status(codes.serverError).json({ message: strings.serverError });
}
module.exports = {serverDown};