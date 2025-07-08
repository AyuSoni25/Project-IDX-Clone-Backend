import util from 'node:util';
import childProcess from 'node:child_process';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises';

const exec = util.promisify(childProcess.exec);

export const createProject = async(req, res) => {

    try {
        const projectId = uuidv4();
        await fs.mkdir(`./projects/${projectId}`);

        const response = await exec('npm create vite@latest sandbox -- --template react', {
            cwd: `./projects/${projectId}`
        });
  
        return res.status(200).json({
            message: 'Project created successfully', 
            data: projectId
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Something went wrong'
        })
    }
}