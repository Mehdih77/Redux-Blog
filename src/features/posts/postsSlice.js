import { createSlice, createAsyncThunk, createEntityAdapter} from "@reduxjs/toolkit";
import { client } from '../../api/client';

export const fetchPosts = createAsyncThunk("posts/fetchPosts" , async () => {
    return await client.get('posts');
})

export const addNewPost = createAsyncThunk("posts/newPost", async (newPostData) => {
    return await client.post('posts', newPostData);
})

export const increaseReaction = createAsyncThunk("posts/increaseReaction", async ({postId, reaction}) => {
    await client.post(`/posts/${postId}/reaction/${reaction}`)
    return {postId,reaction};
})

// for better managing state & also it create entities by itself
const postsAdapter = createEntityAdapter({
    sortComparer: (a,b) => b.date - a.date //* for sorting by date ~ new To old
});
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
        },
        [addNewPost.fulfilled]: postsAdapter.addOne,
        [increaseReaction.fulfilled]: (state,action) => {
            const {postId,reaction} = action.payload;
            state.entities[postId].reactions[reaction] += 1
        }
    }
})

export default postsSlice.reducer;