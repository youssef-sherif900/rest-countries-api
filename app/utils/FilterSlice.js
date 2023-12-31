import { createSlice } from "@reduxjs/toolkit";

export const FilterSlice = createSlice({
    name:'filter',
    initialState: {
         filter: null,
         search:null | ''
     },
    reducers:{
        region: (state , action) =>{
            state.filter = action.payload
        },
        search: (state , action) =>{
            state.search = action.payload
        }
    }
})

export const { region , search } = FilterSlice.actions;

export default FilterSlice.reducer;
