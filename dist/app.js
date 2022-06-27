"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
var data = [1, 2, 3, 4];
app.get('/', function (req, res) {
    console.log(req.rawHeaders[1]);
    res.send(app_model_1.Cats);
});
app.get('/cats/blue', function (req, res) {
    console.log(req.rawHeaders[1]);
    res.send(app_model_1.Cats[0]);
});
app.listen(8000, function () {
    console.log('server is on ...');
});
//# sourceMappingURL=app.js.map