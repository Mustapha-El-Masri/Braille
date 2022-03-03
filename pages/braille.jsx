import styles from '../styles/braille.module.css'
import axios from 'axios';
import React from 'react';

const Braille = () => {
    const [braillesData , setBraillesData] = React.useState([]);
    const [content , setContent] = React.useState("");
    const [translate, setTranslate] = React.useState("");

    React.useEffect(() =>{
        getData();
    } ,[]);

    const getData = ()=> {
        axios.get("http://localhost:3004/brailles").then((res) => setBraillesData(res.data));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let nextTranslate = "";
        for (let i = 0; i < content.length; i++) {
            let braille = braillesData.find(item => item.key === content[i]);
            nextTranslate =  braille.value + nextTranslate ;
        }
        setTranslate(nextTranslate);
    };

    return (
        <div>
            <h1 className={styles.title}>Braille translator</h1>
            <form className={styles.brailleForm} onSubmit={(e) => handleSubmit(e)} >
                <input
                    type ="text"
                    placeholder ="أدخل النص"
                    onChange={(e) => setContent(e.target.value)}
                    className={styles.input}
                />
                <input
                    type ="submit"
                    value ="start"
                    className={styles.submitButton}
                />
                <br/>
                <div className={styles.div}><p>{translate}</p></div>
            </form>

        </div>
    );
};
 
export default Braille;