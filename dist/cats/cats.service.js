"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCat = exports.readAllCats = void 0;
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
//# sourceMappingURL=cats.service.js.map