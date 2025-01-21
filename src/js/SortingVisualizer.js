import React, { useState } from "react";
import '../scss/SortingVisualizer.scss';
import { Link } from "react-router-dom";

// SortingVisualizer component that controls the entire sorting visualization
const SortingVisualizer = () => {
  // State hooks for managing array, steps, current step, selected algorithm, etc.
  const [array, setArray] = useState([]); // The array being sorted
  const [steps, setSteps] = useState([]); // The steps in sorting algorithm
  const [currentStep, setCurrentStep] = useState(0); // Current step in visualization
  const [algorithm, setAlgorithm] = useState("bubble"); // Selected sorting algorithm
  const [codeLanguage, setCodeLanguage] = useState("python"); // Selected programming language for code display
  const [isSorted, setIsSorted] = useState(false); // Boolean to check if array is sorted

  // Function to start the sorting visualization process
  const startVisualization = () => {
    const input = document.getElementById("inputArray").value; // Get input value from the input field
    const inputArray =
      algorithm === "name" // Check if sorting names or numbers
        ? input.split(",").map((name) => name.trim()) // Split and trim names if "name" algorithm
        : input.split(",").map(Number); // Split and convert to numbers for "bubble" algorithm

    // Validate input based on the algorithm selected
    if (algorithm === "name") {
      if (inputArray.some((name) => name === "")) {
        alert("Please enter valid names.");
        return;
      }
    } else {
      if (inputArray.some(isNaN)) {
        alert("Please enter a valid array.");
        return;
      }
    }

    // Set array state and start sorting visualization
    setArray(inputArray);
    setIsSorted(false);
    algorithm === "name" ? sortNames(inputArray) : bubbleSort(inputArray); // Call respective sorting function
  };

  // Bubble Sort algorithm implementation
  const bubbleSort = (inputArray) => {
    let stepsArray = []; // To store each step's information
    let arr = [...inputArray]; // Make a copy of input array to avoid mutation
    let n = arr.length;

    // Bubble Sort logic
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Log the comparison step
        stepsArray.push({
          action: `Compare: array[${j}] = ${arr[j]} and array[${j + 1}] = ${arr[j + 1]}`,
          array: [...arr],
          i,
          j,
        });
        // Swap if needed
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap the values
          stepsArray.push({
            action: `Swap: array[${j}] and array[${j + 1}]`,
            array: [...arr],
            i,
            j,
          });
        }
      }
    }
    // Log the sorted array
    stepsArray.push({
      action: `Array sorted: ${arr.join(", ")}`,
      array: [...arr],
      i: null,
      j: null,
    });

    // Set the steps and initialize visualization
    setSteps(stepsArray);
    setCurrentStep(0);
    setIsSorted(true); // Mark as sorted
  };

  // Sorting function for names (lexicographical order)
  const sortNames = (nameArray) => {
    let stepsArray = [];
    let arr = [...nameArray];

    // Sorting logic for names
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        stepsArray.push({
          action: `Compare: "${arr[i]}" and "${arr[j]}"`,
          array: [...arr],
          i,
          j,
        });
        // Swap names if lexicographically needed
        if (arr[i].toLowerCase() > arr[j].toLowerCase()) {
          [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap names
          stepsArray.push({
            action: `Swap: "${arr[i]}" and "${arr[j]}"`,
            array: [...arr],
          });
        }
      }
    }

    // Log the final sorted names
    stepsArray.push({
      action: `Names sorted: ${arr.join(", ")}`,
      array: [...arr],
    });

    // Set the steps and initialize visualization
    setSteps(stepsArray);
    setCurrentStep(0);
    setIsSorted(true);
  };

  // Function to display the previous or next step during visualization
  const displayStep = (stepIndex) => {
    if (stepIndex >= 0 && stepIndex < steps.length) {
      setCurrentStep(stepIndex); // Update the current step to display
    }
  };

  // Code samples for Bubble Sort in different languages
  const codeSamples = {
    python: `def bubble_sort(arr):
    for i in range(len(arr) - 1):
        for j in range(len(arr) - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr`,

    "c++": `void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}`,

    java: `void bubbleSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
        for (int j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}`,
  };

  return (
    <div className="sorting-visualizer">
            {/* Background gradient styling */}
            <div className="background-gradient"></div>
      
      {/* Left section - for displaying sorting visualization */}
      <div id="leftSection">
        <h2 className="headingcolour">Sorting Visualizer</h2>
        
        {/* Dropdown to select sorting algorithm */}
        <label htmlFor="algorithmSelect">Select Algorithm: </label>
        <select
          id="algorithmSelect"
          className="box"
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)} // Set selected algorithm
        >
          <option value="bubble">Bubble Sort</option>
          <option value="name">Name Sort</option>
        </select>

        {/* Input for array or names based on selected algorithm */}
        <label htmlFor="inputArray">
          {algorithm === "name" ? "Enter Names" : "Enter Numbers"} (comma-separated):{" "}
        </label>
        <input type="text" id="inputArray" className="arrayinput" />

        {/* Button to start the visualization */}
        <button onClick={startVisualization} id="start" className="button1">
          Start
        </button>

        {/* Display the current array state */}
        <div id="arrayDisplay">
          {steps[currentStep]?.array.map((value, index) => (
            <div
              key={index}
              className={`${typeof value === "number" ? "number" : "text"} ${
                index === steps[currentStep]?.j || index === steps[currentStep]?.j + 1
                  ? "highlight" // Highlight the compared elements
                  : ""
              }`}
            >
              {value}
            </div>
          ))}
        </div>

        {/* Controls for navigating through steps */}
        <div id="controls">
          <button className="button1" onClick={() => displayStep(currentStep - 1)}>Prev</button>
          <button className="button1" onClick={() => displayStep(currentStep + 1)}>Next</button>
        </div>

        {/* Display the variables i, j, and the array during sorting */}
        {algorithm === "bubble" && (
          <div id="variableSection">
            <h3>Current Variables:</h3>
            <div id="variableDisplay">
              <p>i: {steps[currentStep]?.i ?? "N/A"}</p>
              <p>j: {steps[currentStep]?.j ?? "N/A"}</p>
              <p>Array: {steps[currentStep]?.array?.join(", ")}</p>
            </div>
          </div>
        )}

        {/* Display the action/step that is currently being executed */}
        <div id="stepsSection">
          <h3>Steps:</h3>
          <div id="stepsDisplay">{steps[currentStep]?.action}</div>
        </div>

        {/* Display the final sorted result */}
        {isSorted && (
          <div id="sortedSection">
            <h3>Sorted {algorithm === "name" ? "Names" : "Numbers"}:</h3>
            <p>{steps[steps.length - 1]?.array.join(", ")}</p>
          </div>
        )}
      </div>

      {/* Right section for displaying the sorting algorithm code in selected language */}
      <div id="rightSection">
        <h2 className="headingcolour">Code Display</h2>
        <label htmlFor="languageSelect">Select Language:</label>
        <select
          id="languageSelect"
          className="box"
          onChange={(e) => setCodeLanguage(e.target.value)} // Set selected language for code display
          value={codeLanguage}
        >
          <option value="python">Python</option>
          <option value="c++">C++</option>
          <option value="java">Java</option>
        </select>

        {/* Display the code in the selected language */}
        <pre id="codeBox">{codeSamples[codeLanguage]}</pre>
      </div>
      <section className="end2" id="end">

          <div className="ending2">
            <p>
              © 2024 <a href="#">Visco.com</a> All Rights Reserved. 
              <Link to="/terms-and-conditions">
              <button className="terms">Terms of Service</button></Link>
              <a href="#">Privacy Policy</a>
            </p>
          </div>
        </section>
    </div>
  );
};

export default SortingVisualizer;
