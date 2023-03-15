import React, { useState } from 'react';
function Calculator() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const handleClear = () => {
    setResult('');
  };

  const handleDelete = () => {
    setResult(result.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="w-80 bg-white rounded-lg shadow-lg p-4">
        
        <div className="w-full bg-gray-100 rounded-lg p-2 mb-2 h-8 flex flex-col justify-center">
          <p>{result}</p>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded-lg p-2"
            onClick={handleClear}
          >
            AC
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded-lg p-2"
            onClick={handleDelete}
          >
            DEL
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded-lg p-2"
            name="."
            onClick={handleClick}
          >
            .
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 rounded-lg p-2 text-white"
            name="/"
            onClick={handleClick}
          >
            /
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded-lg p-2"
            name="7"
            onClick={handleClick}
          >
            7
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded-lg p-2"
            name="8"
            onClick={handleClick}
          >
            8
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded-lg p-2"
            name="9"
            onClick={handleClick}
          >
            9
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 rounded-lg p-2 text-white"
            name="*"
            onClick={handleClick}
          >
            x
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded-lg p-2"
            name="4"
            onClick={handleClick}
          >
            4
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded-lg p-2"
            name="5"
            onClick={handleClick}
          >
            5
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded-lg p-2"
            name="6"
            onClick={handleClick}
          >
            6
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 rounded-lg p-2 text-white"
            name="-"
            onClick={handleClick}
          >
            -
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded-lg p-2"
            name="1"
            onClick={handleClick}
          >
            1
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded-lg p-2"
            name="2"
            onClick={handleClick}
          >
            2
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded-lg p-2"
            name="3"
            onClick={handleClick}
          >
            3
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 rounded-lg p-2 text-white"
            name="+"
            onClick={handleClick}
          >
            +
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded-lg p-2 col-span-2"
            name="0"
            onClick={handleClick}
          >
            0
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 rounded-lg p-2"
            name="="
            onClick={handleEqual}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;