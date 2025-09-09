import exprees from "express";
import { createContact } from "../controller/contact.controller.js";

const router = exprees.Router();

router.post("/contact", createContact);

export default router;
