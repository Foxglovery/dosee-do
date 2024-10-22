import React, { useState } from 'react';
import '../styles/Calculator.css'

const Calculator = () => {
  const [concentration, setConcentration] = useState('');
  const [desiredDosage, setDesiredDosage] = useState('');
  const [servings, setServings] = useState('');
  const [result, setResult] = useState(null);

  const calculateVolume = () => {
    if (concentration && desiredDosage && servings) {
      // Convert concentration percentage to mg per unit 
      const concentrationMgPerUnit = (concentration / 100) * 1000; 
      const totalDosageNeeded = desiredDosage * servings; 
      const volumeInUnits = totalDosageNeeded / concentrationMgPerUnit; 
      setResult(volumeInUnits);
    }
  };

    return (
        <div className="calculator-container">
            <h2>Edible Dosage Calculator</h2>
            
            <div className="input-group">
                <label htmlFor="concentrationInput">Concentration</label>
                <input 
                    id="concentrationInput"
                    type="number"
                    placeholder="THC concentration (mg/edible)"
                    value={concentration}
                    onChange={(e) => setConcentration(e.target.value)}
                />
            </div>
            
            <div className="input-group">
                <label htmlFor="dosageInput">Desired Dosage</label>
                <input
                    id="dosageInput" 
                    type="number"
                    placeholder="Desired dosage per serving (mg)"
                    value={desiredDosage}
                    onChange={(e) => setDesiredDosage(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="servingsInput">Servings</label>
                <input 
                    id="servingsInput"
                    type="number"
                    placeholder="Number of Servings"
                    value={servings}
                    onChange={(e) => setServings(e.target.value)}
                />
            </div>
            
            
            <button onClick={calculateVolume}>Calculate</button>

            {result > 0 && (
                <div className="result">
                    <p>Total Volume Needed: {result.toFixed(2)}ml</p>
                </div>
            )}
        </div>
    );
};

export default Calculator;
