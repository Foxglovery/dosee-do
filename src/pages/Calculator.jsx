import React, { useState } from 'react'

const Calculator = () => {
    const [count, setCount] = useState(0);
    const [concentration, setConcentration] = useState(0);
    const [dosage, setDosage] = useState(0);
    const [result, setResult] = useState(0);

    const calculateDosage = () => {
        const totalMG = count * concentration;
        const doses = totalMG / dosage;
        setResult(doses);
    };

  return (
    <div>
        <h2>Edible Dosage Calculator</h2>
        <label htmlFor='countInput'>Count</label>
        <input 
            id='countInput'
            type='number'
            placeholder='# of edibles'
            value={count}
            onChange={(e) => setCount(e.target.value)}
            
        />
        <label htmlFor='concentrationInput'>Concentration</label>
        <input 
            type='number'
            placeholder='THC concentration (mg/edible)'
            value={concentration}
            onChange={(e) => setConcentration(e.target.value)}
        />
        <label htmlFor='dosageInput'>Dosage</label>
        <input
            id='dosageInput' 
            type='number'
            placeholder='Desired dosage per serving (mg)'
            value={dosage}
            onChange={(e) => setDosage(e.target.value)}
        />
        <button onClick={calculateDosage}>Calculate</button>

        {result && (
            <div>
                <p>Total Doses: {result}</p>
            </div>
        )}

    </div>
  )
}

export default Calculator