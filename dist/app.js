"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("this is middleware");
    next();
});
app.post("/cats", function (req, res) {
    try {
        var body = req.body;
        console.log(body.businessNumber);
        res.send('성공');
    }
    catch (error) {
        console.log('aa');
    }
});
app.get("/cats", function (req, res) {
    try {
        var cats = app_model_1.Cats;
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
app.get("/cats/:id", function (req, res) {
    var id = req.params.id;
    var cat = app_model_1.Cats.find(function (cat) { return cat.id === id; });
    res.status(200).send({
        success: true,
        data: {
            cat: cat,
        }
    });
});
app.use(function (req, res, next) {
    res.send({ error: '라우터를 찾지 못하였습니다.' });
});
app.listen(8000, function () {
    console.log('server is on ...');
});
//# sourceMappingURL=app.js.map