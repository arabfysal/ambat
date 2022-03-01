import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import studentsReducer from '../features/studentList/studentListSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    students: studentsReducer
  }
});
