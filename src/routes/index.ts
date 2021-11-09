import express from "express";
import getHomePage from "../controller/app";

const router = express.Router();

router.get("/", getHomePage);

export default router;
