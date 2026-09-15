import { Router } from "express";

const customers = require("./app/controllers/customerscontroller")

const router = new Router();

router.get("/customers", customers.index);
router.get("/customers/:id", customers.show);
router.post("/customers", customers.create);
router.put("/customers/:id", customers.update);
router.delete("/customers/:id", customers.destroy);

export default router;