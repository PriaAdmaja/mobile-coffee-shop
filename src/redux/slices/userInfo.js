import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    token: null,
    avatar: null,
    userId: null,
    address: null
  },
  reducers: {
    submitToken: (prevState, action) => {
      return {
        ...prevState,
        token: action.payload,
      };
    },
    submitAvatar: (prevState, action) => {
      return {
        ...prevState,
        avatar: action.payload,
      };
    },
    submitUserId: (prevState, action) => {
      return {
        ...prevState,
        userId: action.payload,
      };
    },
    submitAddress: (prevState, action) => {
      return {
        ...prevState,
        address: action.payload,
      };
    },
    clearData: (prevState) => {
      return {
        ...prevState,
        userId: null,
        token: null,
        avatar: null,
        address: null
      }
    }
  }
})

export const userInfoAction = userInfoSlice.actions
export default userInfoSlice.reducer;