
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises';
import { execUtility } from '../utils/execUtility.js';
import directoryTree from 'directory-tree';
import path from 'path';

export const createProjectService = async(req, res) => {
    try {
        const projectId = uuidv4();
        await fs.mkdir(`./projects/${projectId}`);

        await execUtility('npm create vite@latest sandbox -- --template react', {
            cwd: `./projects/${projectId}`
        });
        return projectId;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const getProjectTreeService = async (projectId) => {
    try {
        const projectPath = path.resolve(`./projects/${projectId}`);
        const tree = directoryTree(projectPath);
        return tree;
    } catch(error) {
        console.log(error);
        throw error;
    }
}