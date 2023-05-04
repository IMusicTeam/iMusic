import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   data:{
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
        }
    }

})

export const {updateMetaMaskDetails} = ReduxSlice.actions
export default ReduxSlice.reducer
