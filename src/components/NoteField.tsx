import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNote } from "../redux/slices/appSlice";
import { RootState } from "../redux/store";

const NoteField: React.FC = () => {
  const dispatch = useDispatch();
  const note = useSelector((state: RootState) => state.app.note);

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setNote(event.target.value));
    console.log("Entered Note:", event.target.value);
  };

  return (
    <div className="mb-4">
      <h3 className="mb-2 font-semibold">Enter Notes:</h3>
      <textarea
        value={note}
        onChange={handleNoteChange}
        placeholder="Enter your notes here..."
        className="p-2 border border-gray-300 rounded w-full"
      />
    </div>
  );
};

export default NoteField;
