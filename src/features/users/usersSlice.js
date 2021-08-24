import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { client } from "../../api/client";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    return await client.get("users");
})

// for better managing state & also it create entities by itself
const usersAdapter = createEntityAdapter();
const initialState = usersAdapter.getInitialState({
    status: "idle"
});

export const {
    selectById: selectUserById,
    selectAll: selectAllUsers,
} = usersAdapter.getSelectors(state => state.users);

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchUsers.fulfilled]: (state, action) => {
         // state.entities = action.payload;
            usersAdapter.upsertMany(state, action.payload)
            state.status = "idle"
        },
        [fetchUsers.rejected]: (state, action) => {
            state.status = "idle";
            console.log(action.payload);
        }
    }
})

export default usersSlice.reducer;