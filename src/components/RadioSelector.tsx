import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedOption } from "../redux/slices/appSlice";
import { RootState } from "../redux/store";

const RadioSelector: React.FC = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector(
    (state: RootState) => state.app.selectedOption
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedOption(event.target.value));
    console.log("Selected Option:", event.target.value);
  };

  return (
    <div className="mb-4">
      <h3 className="mb-2 font-semibold">Select an Option:</h3>
      <div>
        {["Option A", "Option B", "Option C"].map((option) => (
          <label key={option} className="mr-4">
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={handleChange}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioSelector;
