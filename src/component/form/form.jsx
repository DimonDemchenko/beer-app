import React from "react";
import { useState, useContext } from "react";
import {bababoe} from "../../index" 
const Form = ()=>{
    const [search, setSearch] = useState('');
   function validate()
   {
    bababoe.city=search
    console.log(bababoe.city)
   }

    return(
        <form>
            <input  placeholder="SOME city of my dream"   type="text" 
                name='input2' 
                value={search} 
                onChange={(event) => setSearch(event.target.value)}></input>
            <button type="button"onClick={validate}>Пошук?</button>
        </form>
    )
}
export default Form;