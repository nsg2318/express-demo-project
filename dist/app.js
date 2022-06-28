"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_route_1 = require("./cats/cats.route");
var Server = (function () {
    function Server() {
        var app = express();
        this.app = app;
    }
    Server.prototype.setRoute = function () {
        this.app.use(cats_route_1.default);
    };
    Server.prototype.setMiddleware = function () {
        this.app.use(function (req, res, next) {
            console.log(req.rawHeaders[1]);
            console.log("this is middleware");
            next();
        });
        this.app.use(express.json());
        this.app.use(function (req, res, next) {
            res.send({ error: '라우터를 찾지 못하였습니다.' });
        });
    };
    Server.prototype.listen = function () {
        this.setRoute();
        this.setMiddleware();
        this.app.listen(8000, function () {
            console.log('server is on ...');
        });
    };
    return Server;
}());
function init() {
    var server = new Server();
    server.listen();
}
init();
//# sourceMappingURL=app.js.map