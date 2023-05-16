import { createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    token: null,
    avatar: null,
    userId: null,
    address: null,
    displayName: null,
    email: null,
    phone: null
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
    submitPhone: (prevState, action) => {
      return {
        ...prevState,
        phone: action.payload,
      };
    },
    submitAddress: (prevState, action) => {
      return {
        ...prevState,
        address: action.payload,
      };
    },
    submitDisplayName: (prevState, action) => {
      return {
        ...prevState,
        displayName: action.payload,
      };
    },
    submitEmail: (prevState, action) => {
      return {
        ...prevState,
        email: action.payload,
      };
    },
    clearData: (prevState) => {
      return {
        ...prevState,
        userId: null,
        token: null,
        avatar: null,
        address: null,
        displayName: null,
        email: null
      }
    }
  }
})

export const userInfoAction = userInfoSlice.actions
export default userInfoSlice.reducer;