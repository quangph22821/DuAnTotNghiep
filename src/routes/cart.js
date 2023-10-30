import express from "express";
import { authenticate } from "../middlewares/authenticate";
import { addToCart, getCarts, getOneCart } from "../controllers/cart";

const router = express.Router();

router.get("/cart/:id",getOneCart);
router.get("/cart", getCarts);
router.post("/cart",addToCart);


export default router;