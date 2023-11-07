import axios from "axios";
const COURSES_URL = `https://kanbas-node-server-app-4si3.onrender.com/api/assignment`;

export const findAssignmentForCourse = async (assignmentId) => {
    const response = await axios
        .get(`${COURSES_URL}/${assignmentId}/assignments`);
    return response.data;
};

export const createAssignment = async (courseId, assignment) => {
    const response = await axios.post(
        `${COURSES_URL}/${courseId}/assignments`,
        assignment
    );
    return response.data;
};

const assignment_url = "https://kanbas-node-server-app-4si3.onrender.com/api/assignment";
export const deleteAssignmentC = async (assignmentId) => {
    const response = await axios
        .delete(`${assignment_url}/${assignmentId}`);
    return response.data;
};

export const updateAssignmentC = async (assignmentId) => {
    const response = await axios.
    put(`${assignment_url}/${assignmentId._id}`, assignmentId);
    return response.data;
};