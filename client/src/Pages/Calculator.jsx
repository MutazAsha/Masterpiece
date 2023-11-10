import { useState } from 'react';

const Calculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [showResult, setShowResult] = useState(false);

  function calculateBMI() {
    // Ensure that height and weight are positive numbers
    if (height <= 0 || weight <= 0) {
      setError('Please enter valid positive values for height and weight.');
      return;
    }

    // Reset error message
    setError('');

    let bmi = (weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);
    setStatus(bmiStatus);

    // Show the result
    setShowResult(true);
  }

  function getStatus(bmi) {
    if (bmi < 18.5) return 'Underweight';
    else if (bmi >= 18.5 && bmi < 25) return 'Healthy';
    else if (bmi >= 25 && bmi < 30) return 'Overweight';
    else return 'Obese';
  }

  return (
    <section className="calculator-section flex justify-center items-center h-screen bg-white">
      <div className="div-container w-[75rem] ">
        <h1 className="text-gray-800 text-4xl mb-6 font-bold item-center justify-center text-center">
          BMI CALCULATOR
        </h1>
        <form className="bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="height">
              Height(cm)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="height"
              type="number"
              placeholder="e.g., 169"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="weight">
              Weight(kg)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="weight"
              type="number"
              placeholder="e.g., 68"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="w-full p-2 bg-gray-800 text-white rounded-3xl mt-4 hover:bg-gray-600"
              type="button"
              onClick={calculateBMI}
            >
              Calculate
            </button>
          </div>
          {showResult && bmiResult > 15 && (
            <div className="result-container mt-5 text-center text-black shadow-lg shadow-grey-500/50">
              <p>
                Your BMI is <span className="strong">{bmiResult}</span>.
              </p>
              <p>
                You are <span className="strong">{status}</span>.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Calculator;
