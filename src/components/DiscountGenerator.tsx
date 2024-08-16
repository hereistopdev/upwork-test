import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setDiscountCode } from "../redux/slices/appSlice";

const DiscountGenerator: React.FC = () => {
  const [inputCode, setInputCode] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputCode(event.target.value);
  };

  const validateCode = (code: string) => {
    return code === "DISCOUNT2024";
  };

  const generateCode = () => {
    const newCode = "NEWCODE123";
    dispatch(setDiscountCode(newCode));
    console.log("Generated Discount Code:", newCode);
  };

  return (
    <div className="mb-4">
      <h3 className="mb-2 font-semibold">Enter Discount Code:</h3>
      <input
        type="text"
        value={inputCode}
        onChange={handleInputChange}
        placeholder="Enter discount code"
        className={`p-2 border ${
          validateCode(inputCode) ? "border-green-500" : "border-red-500"
        } rounded mb-2`}
      />
      <button
        onClick={generateCode}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Generate Discount Code
      </button>
      <p>{validateCode(inputCode) ? "Valid Code" : "Invalid Code"}</p>
      <p>Entered Discount Code: {inputCode}</p>
    </div>
  );
};

export default DiscountGenerator;
