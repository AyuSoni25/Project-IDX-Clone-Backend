import express from "express";
import { pingCheck } from "../../controllers/pingController.js";
import projectRouter from "./projectRouter.js";

const v1Router = express.Router();

v1Router.get('/ping', pingCheck);
v1Router.use('/projects', projectRouter);

export default v1Router;