import express from 'express';
import { createProject, getProjectTree } from '../../controllers/projectController.js';

const projectRouter = express.Router();

projectRouter.post('/', createProject);
projectRouter.get('/:projectId/tree', getProjectTree);

export default projectRouter;