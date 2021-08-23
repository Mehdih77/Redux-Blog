import { createSlice, createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit";
import { client } from '../../api/client';

export const fetchPosts = createAsyncThunk("posts/fetchPosts" , async () => {
    return await client.get('posts');
})

// for better managing state & also it create entities by itself
const postsAdapter = createEntityAdapter();
const initialState = postsAdapter.getInitialState({
    status: "idle",
    error: null
});

// for easy select data in state
export const {
    selectById: selectPostById,
    selectIds: selectPostIds
} = postsAdapter.getSelectors(state => state.posts); // its help to chose the thing we want in state

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
            state.status = 'success';
        },
        [fetchPosts.rejected]: (state,action) => {
            state.status = "error";
            state.error = action.payload
        }
    }
})

export default postsSlice.reducer;