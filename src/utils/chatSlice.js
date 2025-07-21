import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "./constants";

export const fetchUser = createAsyncThunk("chat/fetchUser",async ()=>{
    const response = await axios.get(BASE_URL+"/message/user",{withCredentials:true});
    return response.data;
});

export const fetchMessage = createAsyncThunk("chat/fetchMessage", async (userId)=>{
    const response = await axios.get(BASE_URL+`/message/${userId}`,{withCredentials:true});
    return response.data;
});

export const sendMessage = createAsyncThunk("chat/sendMessage", async (messageData, thunkAPI)=>{
    const state = thunkAPI.getState();
    const selectedUser = state.chat?.selectedUser?._id;
    const response = await axios.post(BASE_URL+`/message/send/${selectedUser}`, messageData, {withCredentials:true});
    return response?.data?.data;
});

const initialState = {
    users: [],
    messages: [],
    selectedUser: null,
    isUserLoading: false,
    isMessageLoading: false,
    isMessageSending: false,   
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setSelectedUser : (state,action)=>{
            state.selectedUser=action.payload;
        },
        addMessage : (state, action) =>{
            state.messages.push(action.payload);
        },
    },
    extraReducers:(builder)=>{
        builder.
        addCase(fetchMessage.pending,(state)=>{
            state.isMessageLoading = true;
        })  
        .addCase(fetchMessage.fulfilled,(state,action)=>{
            
            state.isMessageLoading=false;
            const messages = action.payload?.data;
            state.messages=messages;
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
        .addCase(sendMessage.pending, (state)=>{
            state.isMessageSending = true;
        })
        .addCase(sendMessage.fulfilled, (state,action)=>{
            state.isMessageSending = false;
            // const message = action.payload;
            // state.messages = [...state.messages,message];
        })
        .addCase(sendMessage.rejected, (state)=>{
            state.isMessageSending = false;
        })
    }   
});

export const { setSelectedUser, addMessage } = chatSlice.actions;
export default chatSlice.reducer;