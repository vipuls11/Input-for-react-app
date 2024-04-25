import React,{useState} from 'react'
import './NewGoal.css'

const NewGoal=(props)=>{
    // let enteredText='';
    const [enteredText, setenteredText]= useState('');
const addGoalHandler = event =>{
    // console.log(event, "oidvnjn")
    event.preventDefault();

    const NewGoal = {
        id : Math.random().toString(),
        text: enteredText
    };

    // enteredText='';
    setenteredText('');
    // {
    //     id : Math.random().toString(),
    //     text: 'My New Goalfddg!'
    // }

        props.onaddGoal(NewGoal);
    // console.log(NewGoal)
};

const textChangeHandler = event =>{
   setenteredText(event.target.value)
};

    return(<>
    <div >
        <form className="Form-Detail" onSubmit={addGoalHandler}>
        <input type="text" value={enteredText} onChange={textChangeHandler}/>
        <button type="submit">Add Goal</button>
    </form>
    </div>
    </>)
}

export default NewGoal;