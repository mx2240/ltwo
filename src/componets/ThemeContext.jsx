import { useContext } from "react";
import { createContext } from "react";
import Home from "../pages/Home";
import Navbar from "./Navbar";




function Themecontext() {



    const ThemeContext = createContext("light");








    return (

        <>

            <ThemeContext.Provider value="white">

                <Navbar></Navbar>
                <Home></Home>
            </ThemeContext.Provider>










        </>



    )
}



export default Themecontext;