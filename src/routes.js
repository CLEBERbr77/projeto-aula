import { Router } from "express";

// 1. Troque o require por import
import customers from "./app/controllers/customerscontroller";

const router = new Router();

router.get("/customers", customers.index);
router.get("/customers/:id", customers.show);
router.post("/customers", customers.create);
router.put("/customers/:id", customers.update);
router.delete("/customers/:id", customers.destroy);

export default router;