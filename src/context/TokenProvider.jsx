import { createContext, useContext, useMemo } from "react";

const TokenContext =createContext(null);
export const useToken = ()=>{
    const [token,setToken] = useContext(TokenContext);
    return [token,setToken];
}
export const TokenProvider = (props)=>{
   const token=useMemo(()=>{
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        
        if (cookie.startsWith('token' + '=')) {
          return cookie.substring('token'.length + 1);
        }
      }
      return null;
   });
   const setToken = (value)=>{
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);

    const cookieValue = `${'token'}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
    document.cookie = cookieValue;
   }
    return(
        <TokenContext.Provider value={[token,setToken]}>
{props.children}
        </TokenContext.Provider>
    )
}