import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    adminDetails: {},
    userData: {},
    metaMaskDetails: {},
    isAuthed: localStorage.getItem("id") || null,
  },
};

const ReduxSlice = createSlice({
  name: "Metamask",
  initialState,
  reducers: {
    updateMetaMaskDetails: (state, { payload }) => {
      state.data.metaMaskDetails = { ...payload.data };
    },
    updateAdminDetails: (state, { payload }) => {
      state.data.adminDetails = { ...state.data.adminDetails, ...payload.data };
    },
    updateUserData: (state, { payload }) => {
      state.data.userData = { ...state.data.userData, ...payload.data };
    },
    updateAuthVerification: (state, { payload }) => {
      state.data.isAuthed = localStorage.getItem("id") || payload.data.id;
    },
    logout: (state) => {
      state.data = {
        adminDetails: {},
        userData: {},
        metaMaskDetails: {},
        isAuthed: null,
      };
    },
  },
});

export const {
  updateMetaMaskDetails,
  updateUserData,
  updateAdminDetails,
  updateAuthVerification,
  logout,
} = ReduxSlice.actions;
export default ReduxSlice.reducer;
