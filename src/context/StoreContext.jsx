import {createContext}  from 'react';
export const StoreContext =createContext(null)
import { band_lst } from '../assets/assests';
const StoreContextProvider = (props) =>{
    const contextValue ={
        band_lst
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider