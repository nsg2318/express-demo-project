"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_model_1 = require("./cats.model");
var router = express.Router();
router.post("/cats", function (req, res) {
    try {
        var body = req.body;
        var id = body.id;
        var name_1 = body.name;
        var newCat = {
            id: id,
            name: name_1,
            age: 99,
            species: 'ETC',
            isCute: true,
            friends: ['abcd']
        };
        cats_model_1.Cats.push(newCat);
        res.send(newCat);
    }
    catch (error) {
        console.log('aa');
    }
});
router.get("/cats", function (req, res) {
    try {
        var cats = cats_model_1.Cats;
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            }
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
router.get("/cats/:id", function (req, res) {
    var id = req.params.id;
    var cat = cats_model_1.Cats.find(function (cat) { return cat.id === id; });
    res.status(200).send({
        success: true,
        data: {
            cat: cat,
        }
    });
});
router.put("/cats/:id", function (req, res) {
    try {
        var param_1 = req.params;
        var body_1 = req.body;
        var result_1;
        cats_model_1.Cats.forEach(function (cat) {
            if (cat.id === param_1.id) {
                cat = body_1;
                result_1 = cat;
            }
        });
        var cat = cats_model_1.Cats.find(function (cat) { return cat.id === param_1.id; });
        res.status(200).send({
            success: true,
            data: {
                cat: result_1,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
router.delete("/cats/:id", function (req, res) {
    var id = req.params.id;
    var cat = cats_model_1.Cats.find(function (cat) { return cat.id === id; });
});
exports.default = router;
//# sourceMappingURL=cats.route.js.map