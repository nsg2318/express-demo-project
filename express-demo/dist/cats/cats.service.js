"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCat = exports.patchOneCat = exports.putOneCat = exports.readOneCat = exports.createCat = exports.readAllCats = void 0;
var cats_model_1 = require("./cats.model");
var readAllCats = function (req, res) {
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
};
exports.readAllCats = readAllCats;
var createCat = function (req, res) {
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
        console.log('post');
    }
};
exports.createCat = createCat;
exports.readOneCat = (function (req, res) {
    var id = req.params.id;
    var cat = cats_model_1.Cats.find(function (cat) { return cat.id === id; });
    res.status(200).send({
        success: true,
        data: {
            cat: cat,
        }
    });
});
exports.putOneCat = (function (req, res) {
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
exports.patchOneCat = (function (req, res) {
    try {
        var param_2 = req.params;
        var body_2 = req.body;
        var result_2;
        cats_model_1.Cats.forEach(function (cat) {
            if (cat.id === param_2.id) {
                cat = __assign(__assign({}, cat), body_2);
                result_2 = cat;
            }
        });
        var cat = cats_model_1.Cats.find(function (cat) { return cat.id === param_2.id; });
        res.status(200).send({
            success: true,
            data: {
                cat: result_2,
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
exports.deleteCat = (function (req, res) {
    try {
        var param_3 = req.params;
        var newCat = cats_model_1.Cats.filter(function (cat) { return cat.id !== param_3.id; });
        var id_1 = req.params.id;
        var cat = cats_model_1.Cats.find(function (cat) { return cat.id === id_1; });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
//# sourceMappingURL=cats.service.js.map