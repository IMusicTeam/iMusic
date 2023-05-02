import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    darkMode:false
}

const ReduxSlice = createSlice({
    name:"Todo",
    initialState,
    reducers:{
        
    }

})

export default ReduxSlice.reducer
export const {changeBg} = ReduxSlice.actions
