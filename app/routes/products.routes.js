import productsController from "../controller/products.controller.js";
import { Router } from "express";

const router = Router();

router.get("/", productsController.getAll)
router.post("/", productsController.create)

export default router