"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_route_1 = require("./cats/cats.route");
var app = express();
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("this is middleware");
    next();
});
app.use(express.json());
app.use(cats_route_1.default);
app.use(function (req, res, next) {
    res.send({ error: '라우터를 찾지 못하였습니다.' });
});
app.listen(8000, function () {
    console.log('server is on ...');
});
//# sourceMappingURL=app.js.map