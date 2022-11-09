const express = require('express');
var jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('dotenv').config()
const User = require('../models/user');
const bcrypt = require("bcryptjs");

const router = express.Router();


router.get('/login', async (req, res) => {
    const user = await User.findOne({ email: req.query.email });
    
    try {
        if (!user) {
            res.sendStatus(403);
        } else {
            const comparePassword = bcrypt.compare(user.password, req.query.password);
            if (!comparePassword) {
                res.sendStatus(404);
            }
            else {
                jwt.sign({ _id: user._id },
                    process.env.secretKey,
                    { expiresIn: "10000" },
                    (err, token) => {
                        if (err) {
                            res.sendStatus(403);
                        }
                        else {
                            res.json({ token: token, user: user });
                        }
                    })
            }
        }
    }
    catch (err) {
        console.log(err);
        res.sendStatus(403).json({ message: err })
    }

});

router.post('/register', async (req, res) => {
    try {
        const user1 = await User.find({ email: req.body.email });
        if (user1.length != 0) {
            throw new Error("Required");
        } else {
            const temp = req.body;
            temp.isAdmin = false;
            const user = new User(temp);
            user.password = await bcrypt.hash(req.body.password, 10);
            await user.save();
            const newToken = jwt.sign({ _id: user._id },
                process.env.secretKey,
                { expiresIn: "7 days" }
            );
            user.toJSON();
            delete user.password;
            res.send({ token: newToken, user: user });
        }
    } catch (err) {
        res.send(err);
    }
});

module.exports = router;