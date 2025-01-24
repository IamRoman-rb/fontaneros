import { Router } from "express";
import {main, enviarMail} from "../controller/main.js";

const router = Router();

router.get("/", main);
router.post("/enviar", enviarMail);

export default router;