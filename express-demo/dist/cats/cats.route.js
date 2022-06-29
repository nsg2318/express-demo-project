"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_service_1 = require("./cats.service");
var router = express.Router();
router.get("/cats", cats_service_1.readAllCats);
router.post("/cats", cats_service_1.createCat);
router.get("/cats/:id", cats_service_1.readOneCat);
router.put("/cats/:id", cats_service_1.putOneCat);
router.patch("/cats/:id", cats_service_1.patchOneCat);
router.delete("/cats/:id", cats_service_1.deleteCat);
exports.default = router;
//# sourceMappingURL=cats.route.js.map