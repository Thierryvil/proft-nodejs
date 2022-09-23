import { Router } from "express";
import { salesBySeller, salesByDate } from "../controllers/sales-controller.js";
import { checkDateIsValid } from "../middleware/check-date.js";

const router = new Router();

router.use(checkDateIsValid)
router.get("/by-seller", salesBySeller);
router.get("/by-date", salesByDate);

export { router };
