import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
    assignments: db.assignments,
    assignment: { title: "Assignment", description: "New Description", dueDate: "2023-10-23",
        availableFromDate: "2023-10-23", availableUntilDate: "2023-10-23"}
}

const assignmentSlice = createSlice({
    name: "assignment",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            console.log(action.payload)
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                } else {
                    return assignment;
                }
            });
        },
        setAssignment: (state, action) =>{
            state.assignment = action.payload
        }
    }
})
export const {
    addAssignment, deleteAssignment, updateAssignment,setAssignment
} = assignmentSlice.actions;

export default assignmentSlice.reducer