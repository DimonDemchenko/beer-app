import React from "react";
import { useState, useContext } from "react";
import {bababoe} from "../../index" 
const Form = ()=>{
    const [search, setSearch] = useState('');
   function validate()
   {
    const Answer=search
    console.log(Answer)
   }
   const Dimon = useContext(bababoe)
   console.log(Dimon)
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