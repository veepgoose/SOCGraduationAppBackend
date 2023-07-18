import express from "express";
import { getAllResponses, addResponse } from "../controllers/formController.js";

const formRouter = express.Router();

formRouter.get("/", getAllResponses);
formRouter.post("/", addResponse);

export { formRouter };