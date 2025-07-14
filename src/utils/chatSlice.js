import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./constants";

const fetchUser = createAsyncThunk("chat/fetchUser",async ()=>{
    const response = await axios.get(BASE_URL+"/message/user",{withCredentials:true});
    return response.data;
});

const fetchMessage = createAsyncThunk("chat/fetchMessage", async (userId)=>{
    const response = await axios.get(BASE_URL+`/message/${userId}`,{withCredentials:true});
    return response.data;
});

const initialState = {
    users: [],
    messages: [],
    selectedUser: null,
    isUserLoading: false,
    isMessageLoading: false,   
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setSelectedUser : (state,action)=>{
            state.selectedUser=action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder.
        addCase(fetchMessage.pending,(state)=>{
            state.isMessageLoading = true;
        })  
        .addCase(fetchMessage.fulfilled,(state,action)=>{
            state.isMessageLoading=false;
            state.messages=action.payload;
        })
        .addCase(fetchMessage.rejected,(state)=>{
            state.isMessageLoading=false;
        })

        .addCase(fetchUser.pending,(state)=>{
            state.isUserLoading=true;
        })
        .addCase(fetchUser.fulfilled,(state,action)=>{
            state.isUserLoading=false;
            state.users=action.payload;
        })
        .addCase(fetchUser.rejected,(state)=>{
            state.isUserLoading=false;
        })
    }   
});

export const { setSelectedUser } = chatSlice.actions;
export default chatSlice.reducer;