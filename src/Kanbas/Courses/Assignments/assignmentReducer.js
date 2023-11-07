import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    assignments: [],
    assignment: { title: "Assignment", description: "New Description", dueDate: "2023-10-23",
        availableFromDate: "2023-10-23", availableUntilDate: "2023-10-23"}
}

const assignmentSlice = createSlice({
    name: "assignment",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                { ...action.payload },
                ...state.assignments,
            ];
        },
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    console.log('action.payload')
                    console.log(action.payload)
                    return action.payload;
                } else {
                    return assignment;
                }
            });
            console.log(state.assignments)

        },
        setAssignment: (state, action) =>{
            state.assignment = action.payload
        },
        setAssignments: (state, action) => {
            state.assignments = action.payload;
        },
    }
})
export const {
    addAssignment, deleteAssignment, updateAssignment,setAssignment, setAssignments
} = assignmentSlice.actions;

export default assignmentSlice.reducer