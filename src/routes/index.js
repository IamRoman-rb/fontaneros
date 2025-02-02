import { Router } from "express";
import {main} from "../controller/main.js";

const router = Router();

router.get("/", main);

export default router;