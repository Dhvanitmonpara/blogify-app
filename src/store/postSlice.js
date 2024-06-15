import { createSlice } from "@reduxjs/toolkit";
import dbService from "../appwrite/dbConfig";

const initialState = {
    currentPost: null,
    loading: null,
    error: null
}

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getCurrentPost: async (state, action) => {
            const { slug } = action.payload || {};
            state.loading = true;
            state.error = null;

            try {
                const post = await dbService.getPost(slug);
                state.currentPost = post;
            } catch (error) {
                console.error("Error fetching post:", error);
                state.error = error;
            } finally {
                state.loading = false;
            }
        },
        clearPostError: (state) => {
            state.error = null;
        },
        getAllPosts: async (state) => {
            state.loading = true;
            state.error = null;

            try {
                const posts = await dbService.getPosts();
                state.posts = posts;
            } catch (error) {
                console.error("Error fetching posts:", error);
                state.error = error;
            } finally {
                state.loading = false;
            }
        },
    }
})

export const { } = postSlice.actions

export default postSlice.reducer