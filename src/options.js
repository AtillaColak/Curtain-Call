import React, {useState} from "react"; 
import style from "./styles/options.module.css"; 

// alternatives is a String array of movie names. They are the wrong movie names. 
function Options({name, alternatives, onClick, correctIndex}){

    const [answerChosen, setAnswerChosen] = useState(false);


    function handleClick(){
        setAnswerChosen(true); 
        setTimeout(() => {
            onClick();
            setAnswerChosen(false); 
        }, 2000);// 2000 milliseconds = 2 seconds
    }


    const optionList = [] 
    for(let i = 0; i < 4; i++){
        if(i === correctIndex){
            optionList.push(<li key={"correct answer"} onClick={handleClick}
            className={
                answerChosen
                    ? style.correct
                    : style.option
            }>{name}</li>); 
        }
        else{
            optionList.push(<li key={i} onClick={handleClick}
            className={
                answerChosen
                    ? style.incorrect
                    : style.option
            }>{alternatives[i]}</li>); 
        }
    }

    return <ul>{optionList}</ul>;

}

export default Options; 
// remove the * at the beginning. 