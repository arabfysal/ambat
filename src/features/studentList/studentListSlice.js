import { createSlice } from "@reduxjs/toolkit";

export const fetchStudents = () => {
  return (dispatch, getState) => {
    console.log("This is thunk");
    fetch("http://localhost:8000/students")
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchAll(data));
      });
  };
};

const initialState = {};
export const studentListSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    fetchAll: (state, action) => {
      //fetch all reducer
      state = action.payload;
    },
  },
});

export const { fetchAll } = studentListSlice.actions;

export default studentListSlice.reducer;
