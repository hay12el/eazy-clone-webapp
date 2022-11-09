const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
    const token = req.headers['token'];
    try{
        if(token){
            jwt.verify(token, process.env.secretKey);
            next();
        }
        else{
            res.sendStatus(401);
        }
    }
    catch(err) {
        console.log(err);
        res.sendStatus(401);
    }
}