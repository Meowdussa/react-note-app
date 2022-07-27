import { useState } from "react";
import {MdSave} from "react-icons/md"; // i use this to replace save button

// to get access to handleAddNote function by using props {handleAddNote}
const AddNotes = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState("");

    // 
    const handleChange = (event) =>{
        setNoteText(event.target.value);
    };

    // to call the handleAddNote function
    const handleSaveClick = () =>{
        handleAddNote(noteText);
    }

    return (
    <div className="note new">
        <textarea
         row="8" cols="10" 
         placeholder="type to add note.."
         value={noteText}
         onChange={handleChange}
         ></textarea>

        <div className="note-footer">
            <small>200 Remaining</small>
            {/* <button className="save">Save</button> */}
            <MdSave className="save" onClick={handleSaveClick}/>
        </div>
    </div>
    )


}

export default AddNotes;