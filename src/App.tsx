import { useState } from 'react'
import './App.css'
import { proveFermatTheorem } from './utils/proveFermaTheorem'

function App() {
  const [resultContent, setResultContent] = useState<string[] | null>(null)
  const [number, setNumber] = useState<number | null>(null)

  return (
    <>
      <h1>ПИ. ЗАДАНИЕ 7</h1>
      <h2>ПРИЛОЖЕНИЕ ДОКАЗЫВАЮЩЕЕ ТЕОРЕМУ ФЕРМА</h2>
      <div className="card">
        <p>
          Введите число для проверки доказательства
        </p>
        {resultContent ? 
          <div>{resultContent.map(result => (<div>{result}</div>))}</div> 
        : 
          <>
            <label htmlFor="number">Число для доказательства</label>
            <input 
              name='number'
              id='number'
              type="number"  
              onChange={(e) => setNumber(+e.target.value)}
            />
            <button onClick={() => number && proveFermatTheorem(number, setResultContent)}>Доказать</button>
          </>
        }
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
