import Classes from "./Classes.js";
import {useState,useEffect} from 'react';
import useFetch from "./useFetch.js";
import Tools from "./Tools.js";
import Navbar from "./Navbar.js";
const Home = () => {
    const {data,isPending,error} = useFetch("http://localhost:3001/dersler");
    return ( 
        <div className="Home">
        {data &&<Classes classes={data}></Classes>}
        <Tools></Tools>
        </div>
     );
}
 
export default Home;