import express from "express";

import { create, get, getAll , remove, update} from "../controllers/material";


const router = express.Router();
router.get("/material", getAll);
router.get("/material/:id", get);
router.post("/material", create);
router.delete("/material/:id",remove);
router.put("/material/:id", update);

export default router;