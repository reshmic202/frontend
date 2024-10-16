import { createContext, useState } from "react";

export const AuthContext=createContext();


const AuthContextProvider=({children})=>{
    const [userData,setUserData]=useState("company");
    return(
        <AuthContext.Provider value={{userData,setUserData}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;