import { Router } from "express";
import {
    all,
    bitcoin,
    dolar,
    euro,
    UF,
} from "../controllers/coin.controller.js";

const router = Router();

router.get("/all", all);
router.get("/dolar", dolar);
router.get("/uf", UF);
router.get("/euro", euro);
router.get("/bitcoin", bitcoin);

export default router;
