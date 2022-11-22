const express = require("express");
var jws = require("jsonwebtoken");
const User = require("../models/user");
const Business = require("../models/Business");
const { application } = require("express");
const tokenVerify = require("../verifyToken/token");

const router = express.Router();

// get business by id!
router.get("/", async (req, res) => {
  const business = await Business.findOne({ _id: req.query.id });

  // check if there is business with that id.
  try {
    if (!business) {
      res.send("no business with that id :(").status(404);
    } else {
      res.send(business).status(200);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

// get business by name
router.get("/getBbyName", async (req, res) => {
  const { name, city } = req.query;
  try {
    const businesses = await Business.find(
      { "BName": name, "city":{$regex: `.*${city}.*`,$options: 'si'} },
      {
        photos: 0,
        email: 0,
        description: 0,
        rate: 0,
        owner: 0,
      }
    );
    res.send({ businesses: businesses });
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

// add new business by his owner, authentication required!
router.post("/newB", tokenVerify.verifyToken, async (req, res) => {
  try {
    const newBusiness = new Business(req.body);
    const returnFromAtlas = await newBusiness.save();
    res.send(returnFromAtlas);
  } catch (err) {
    console.log(err);
  }
});

/// get all the businesses related to specific admin
router.get("/adminBusinesses", tokenVerify.verifyToken ,async (req, res) => {
  try {
    const businesses = await Business.find({ owner: req.query.adminId });
    if (!businesses) {
      res.send({ messege: "no businesses" }).status(404);
    } else {
      res.send(businesses).status(200);
    }
  } catch (err) {
    console.log(err);
  }
});


router.get("/BusiByCategoty", async (req, res) => {
  try {
    const businesses = await Business.find({
      type: req.query.type,
      city: req.query.city,
    });
    if (!businesses) {
      res.status(400);
    } else {
      res.send(businesses).status(200);
    }
  } catch (err) {
    console.log(err);
  }
});

//636547e665337af5153a90be
module.exports = router;
