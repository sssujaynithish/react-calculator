import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function Calc(){
    const [currentVal,setCurrentVal] = useState('');
    const [prevVal,setPrevVal] = useState('');
    const [operator,setOperator] = useState(null);


    const handleClick=(e)=>{
        const value = e.target.value;

        if(!isNaN(value) || value === '.'){
            setCurrentVal((prev)=>prev+value);
        }
        else if(value == 'clear'){
            setCurrentVal('');
            setPrevVal('');
            setOperator(null);
        }
        else if(['+','-','*','/'].includes(value)){
            if (currentVal === '') return;
            setOperator(value);
            setPrevVal(currentVal);
            setCurrentVal('');
        }
        else if (value === '='){
            if (currentVal === '' || !operator) return;
            const result = calculate(parseFloat(prevVal), parseFloat(currentVal), operator);
            setCurrentVal(result);
            setPrevVal('');
            setOperator(null);
        }
    };
    const calculate = (n1,n2,op)=>{
        switch(op){
            case '+':
                return n1+n2;
            case '-':
                return n1 - n2;
            case '*':
                return n1 * n2;
            case '/':
                return n2 !== 0 ? n1 / n2 : 'Error';
            default:
                return 0;
        }

    };



    return (
        <div class="calc-grid">
            <div class="output"><h2>{prevVal}{operator}{currentVal}</h2></div>
            <div class="number-grid">
                <button value={1} onClick={handleClick}>1</button>
                <button value={2} onClick={handleClick}>2</button>
                <button value={3} onClick={handleClick}>3</button>
                <button value={'+'} onClick={handleClick}>+</button>
                <button value={4} onClick={handleClick}>4</button>
                <button value={5} onClick={handleClick}>5</button>
                <button value={6} onClick={handleClick}>6</button>
                <button value={'-'} onClick={handleClick}>-</button>
                <button value={7} onClick={handleClick}>7</button>
                <button value={8} onClick={handleClick}>8</button>
                <button value={9} onClick={handleClick}>9</button>
                <button value={'*'} onClick={handleClick}>*</button>
                <button value={'clear'} onClick={handleClick}>clear</button>
                <button value={'.'} onClick={handleClick}>.</button>
                <button value={'='} onClick={handleClick}>=</button>
                <button value={'/'} onClick={handleClick}>/</button>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Calc />);
