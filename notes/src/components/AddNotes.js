import { useState } from "react";
import {MdSave} from "react-icons/md"; // i use this to replace save button

// to get access to handleAddNote function by using props {handleAddNote}
const AddNotes = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState("");

    // to set the character limit
    const characterLimit = 200;


    // to grab the data that's being passed on - the new note
    const handleChange = (event) =>{

        // the characters are more than 0, it will skip the condition - setNoteText(event.target.value);
        if(characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
        
    };

    // to call the handleAddNote function
    const handleSaveClick = () =>{
        // if the text area isn't empty, then add the new note, if it is empty (means only whitespace), do nothing
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            // after the notes are added reset the noteText to empty
            setNoteText("");
        }
        
    }

    return (
    <div className="note new">
        <textarea
         rows="8" cols="10" 
         placeholder="type to add note.."
         value={noteText}
         onChange={handleChange}
         ></textarea>

        <div className="note-footer">
            <small>{characterLimit - noteText.length} Remaining</small>
            {/* <button className="save">Save</button> */}
            <MdSave className="save" onClick={handleSaveClick}/>
        </div>
    </div>
    )


}

export default AddNotes;