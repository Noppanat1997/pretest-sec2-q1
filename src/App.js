import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
    const [input, setInput] = useState(0);
    const [dropdown, setDropdown] = useState('isPrime');
    const [answer, setAnswer] = useState(false);

    const isPerfectSquare = (x) => {
        let s = parseInt(Math.sqrt(x));
        return (s * s == x);
    }

    const isFibonacci = (n) => {
        // n is Fibonacci if one of 5*n*n + 4 or 5*n*n - 4 or both
        return isPerfectSquare(5 * n * n + 4) ||
            isPerfectSquare(5 * n * n - 4);
    }

    const isPrime = (num) => {
        for (var i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

    const onInputChange = (e) => {
        if (e.target.value < 0) {
            return setInput(1)
        }
        // Parsing float to remove leading zeros and parse it back to integer.
        return setInput(parseInt(parseFloat(e.target.value)).toFixed(0))
    }

    const onDropdownChange = (e) => {
        setDropdown(e.target.value)
    }

    useEffect(() => {
        if (dropdown === 'isPrime') {
            setAnswer(isPrime(input))
        }
        if (dropdown === 'isFibonacci') {
            setAnswer(isFibonacci(input))
        }
    }, [input, dropdown])

    return (
        <div className='container'>
            <div className='col1'>
                <input
                    type='number'
                    defaultValue={input}
                    value={input}
                    onChange={onInputChange}
                />
            </div>
            <div className='col2'>
                <select defaultValue={dropdown} onChange={onDropdownChange}>
                    <option value="isPrime">isPrime</option>
                    <option value="isFibonacci">isFibonacci</option>
                </select>
            </div>
            <div className='col3'>
                {JSON.stringify(answer)}
            </div>
        </div>
    )
}

export default App