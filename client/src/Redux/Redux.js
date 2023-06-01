import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { APIConstants } from "../Services/api-constants";

const initialState = {
  data: {
    adminDetails: {},
    userData: {},
    metaMaskDetails: {},
    isAuthed: localStorage.getItem("id") || null,
    showBanner:false
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
        showBanner:false
      };
    },
    checkApproveSongs: (state, { payload }) => {
      state.data.showBanner = payload.data
    },
  },
});

export const {
  updateMetaMaskDetails,
  updateUserData,
  updateAdminDetails,
  updateAuthVerification,
  logout,
  checkApproveSongs,
} = ReduxSlice.actions;
export default ReduxSlice.reducer;


export const checkBanner =()=>(dispatch)=>{
  axios
  .get(APIConstants.getAllPendingSongs)
  .then((res) => {
    const data = res.data.data;
    if(data.length > 0){
      dispatch(checkApproveSongs({data : true}))
    }
    else{
      dispatch(checkApproveSongs({data: false}))
    }
    // setLikedData(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
}
