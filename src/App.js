
import { useEffect, useState } from 'react'

const App = () => {

    const [userChoice, setuserChoice] = useState(null)
    const [computerChoice, setComputerChoice] = useState(null)
    const [result, setResult] = useState(null)
    const choices = ['rock', 'paper', 'scissors']


    const handleClick = (value) => {
        setuserChoice(value)
        generateComputerChoice()
        // checkResult()
    }

    const generateComputerChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)]
        setComputerChoice(randomChoice)
    }

    useEffect(()=>{
        checkResult()
    },  [computerChoice, userChoice])
    const checkResult = () => {
        switch(userChoice + computerChoice){
            case 'scissorspaper':
            case 'rockscissors':
            case 'paperrock':
                setResult('YOU WIN!')
                break
            case 'paperscissors':
            case 'scissorsrock':
            case 'rockpaper':
                setResult('YOU LOSE!')
                break
            case 'rockrock':
            case 'paperpaper':
            case 'scissorsscissors':
                setResult('ITS A DRAW!')

        }
    }

    return ( 
        <div>
            <h1>user choise is: {userChoice}</h1>
            <h1>computer choise is: {computerChoice} </h1>
            {choices.map((choice, index) => <button key={index} onClick={()=>handleClick(choice)}>{choice}</button>)}
            <h1>{result}</h1>
        </div>
    );
}

export default App