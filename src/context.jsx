import { createContext, useState } from "react";



 const context = createContext();

export const ContextProvider = ({children})=>{
    
    const [result,setResult] = useState(null)


    return( 
    <context.Provider value={{result,setResult}}>
        {children}
    </context.Provider>
    )
}

export default context