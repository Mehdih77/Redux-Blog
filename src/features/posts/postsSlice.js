import { createSlice, createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit";
import { client } from '../../api/client';

export const fetchPosts = createAsyncThunk("posts/fetchPosts" , async () => {
    const response = await client.get('posts');
    return response
})

// for better managing state & also it create entities by itself
const postsAdapter = createEntityAdapter();
const initialState = postsAdapter.getInitialState({
    status: "idle"
});

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state,action) => {
            state.status = "loading";
        },
        [fetchPosts.fulfilled]: (state,action) => {
        // state.entities = action.payload;
            postsAdapter.upsertMany(state, action.payload);
            state.status = 'idle';
        },
        [fetchPosts.rejected]: (state,action) => {
            state.status = "idle";
            console.log(action.payload);
        }
    }
})

export default postsSlice.reducer;