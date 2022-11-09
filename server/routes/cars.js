const express = require('express');
const {verifyToken} = require("../verifyToken/token")


const router = express.Router();

router.get('/', (req, res)=> {
    const person = {
        name: "מאיר",
        lastName: "כהן",
        phone: "0506789933",
        carNum: "508-13-801",
    }
    res.send({person: person});
})

module.exports = router;