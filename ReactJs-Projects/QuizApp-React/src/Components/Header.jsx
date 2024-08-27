import React from "react";
import quizImage from '../assets/quiz-logo.png'

const Header=()=>{
    return(
        <> 
          <header>
            <img src={quizImage} alt="quiz logo :)"/>
            <h1>React Quiz</h1>
          </header>
        </>
    )
}

export default Header;