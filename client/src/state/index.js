import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    posts: [],
};

export const appSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFriends: (state, action) => {
            if (!state.user) {
            state.user.friends = action.payload;
            } else {
                console.error("User friends not found");
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setPost: (state, action) => {
           const updatedPosts = state.posts.map((post) => {
                if (post.id === action.payload.id) {
                     return action.payload.post;
                }
                return post;
              });
              state.posts = updatedPosts;
        },
    },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } = appSlice.actions;
export default appSlice.reducer;