import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   data:{
      userData:{},
     metaMaskDetails:{
     }
   }
}

const ReduxSlice = createSlice({
    name:"Metamask",
    initialState,
    reducers:{
        updateMetaMaskDetails: (state,{payload}) => {
            state.data.metaMaskDetails= {...state.data.metaMaskDetails, ...payload.data}
        },
        updateUserData: (state,{payload}) => {
            state.data.userData= {...state.data.userData, ...payload.data}
        },
    }

})

export const {updateMetaMaskDetails,updateUserData} = ReduxSlice.actions
export default ReduxSlice.reducer
