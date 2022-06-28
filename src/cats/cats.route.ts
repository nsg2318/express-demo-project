import * as express from "express";
import {Cats, Cat} from './cats.model';
import { createCat, deleteCat, patchOneCat, putOneCat, readAllCats, readOneCat } from "./cats.service";

const router = express.Router();
router.get("/cats",readAllCats);
router.post("/cats",createCat);
router.get("/cats/:id",readOneCat);
router.put("/cats/:id", putOneCat);
router.patch("/cats/:id",patchOneCat);
router.delete("/cats/:id",deleteCat);
export default router;