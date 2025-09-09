import exprees from "express";
import {getBook} from "../controller/book.controller.js";

const router = exprees.Router();

router.get("/", getBook);

export default router;