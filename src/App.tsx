import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import RadioSelector from "./components/RadioSelector";
import DiscountGenerator from "./components/DiscountGenerator";
import NoteField from "./components/NoteField";

function App() {
  const selectedOption = useSelector(
    (state: RootState) => state.app.selectedOption
  );
  const discountCode = useSelector(
    (state: RootState) => state.app.discountCode
  );
  const note = useSelector((state: RootState) => state.app.note);

  useEffect(() => {
    console.log("App State:", { selectedOption, discountCode, note });
  }, [selectedOption, discountCode, note]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mini React App</h1>
      <RadioSelector />
      <DiscountGenerator />
      <NoteField />
    </div>
  );
}

export default App;
