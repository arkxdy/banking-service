import { createSlice } from "@reduxjs/toolkit";
import { IAuthenticated } from "../utils/types";

export const initialState:IAuthenticated = {isAuthenticated:false}

// const authSlice = createSlice({
//     name: "user",
//     initialState,

// })

const authReducer = (state: IAuthenticated, action: any) => {
    switch (action){
        case 'Signin': {

        }
    }

}