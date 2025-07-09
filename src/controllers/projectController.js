import { createProjectService, getProjectTreeService } from "../services/projectService.js";

export const createProject = async(req, res) => {
    try {
        const projectId = await createProjectService();
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

export const getProjectTree = async (req, res) => {
    try {
        const tree = await getProjectTreeService(req.params.projectId);
        return res.status(200).json({
            data: tree,
            success: true,
            message: "Successfully fetched the tree"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Something went wrong'
        })
    }
}