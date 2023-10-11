import express from "express";

import { create, get, getAll , remove, update} from "../controllers/origin";

const router = express.Router();
router.get("/origin", getAll);
router.get("/origin/:id", get);
router.post("/origin", create);
router.delete("/origin/:id",remove);
router.put("/origin/:id", update);

export default router;