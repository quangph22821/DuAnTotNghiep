import express from "express";

import { create, get, getAll , deleteCate, update} from "../controllers/category";


const router = express.Router();
router.get("/category", getAll);
router.get("/category/:id", get);
router.post("/category", create);
router.delete("/category/:id",deleteCate);
router.put("/category/:id", update);

export default router;
