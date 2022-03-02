import styles from '../styles/braille.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
const braille = () => {
     const [braillesData , setBraillesData] = useState([]);
     const [content , setContent] = useState("");
    
    useEffect(() =>{
        getData();
    } ,[]);

const getData = ()=> {
    axios.get("http://localhost:3004/brailles").then((res) => console.log(res.data));
    
}
const handleSubmit = (e) => {
    e.preventDefault();
    
 }

    return (
        <div>
            <h1 className={styles.title} >Braille translator</h1>
            <form className={styles.brailleForm} onSubmit={(e) => handleSubmit(e)} >
                <input type ="text"
                 placeholder ="أدخل النص" 
                 onChange={(e) => setContent(e.target.value)}
                 className={styles.input}></input>
                <input  type ="submit"
                 value ="start"
                 className={styles.submitButton}></input>
                <br></br>
                <p></p> 
            </form>
        </div>
    );
};

export default braille;