import { createContext,useContext,useEffect,useState } from "react";

export const ThemeContext =createContext(null);

export function ThemeProvider({children}){
 const[theme,setTheme]=useState("light");

 useEffect(()=>{
    document.documentElement.dataset.theme=theme;
 },[theme]);
// const root = document.documentElement;


 const toggleTheme=()=>
    setTheme((t)=>(t=="light"?"dark":"light"));

 return(
          <ThemeContext.Provider value={({theme,toggleTheme})}>
            {children}
          </ThemeContext.Provider>


 )





}