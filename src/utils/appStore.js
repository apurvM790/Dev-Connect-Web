import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer  from "./feedSlice";
import requestReducer from "./requestSlice";
import chatReducers from "./chatSlice";

const userStore = configureStore({
    reducer: {
        user: userReducer,
        feed: feedReducer,
        requests: requestReducer,
        chat: chatReducers,
    },
});

export default userStore;