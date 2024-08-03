import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice';

const store = configureStore({
    //"reducer=" is changed to "reducer:"
    reducer:{
        user: userReducer,
    }
});

export default store;