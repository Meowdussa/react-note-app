import Note from "./components/Note";
import AddNotes from "./components/AddNotes";

// destructure the props to get note that were passed
// to get access to handleAddNote function by using props {handleAddNote}
const NotesList = ({notes, handleAddNote}) =>{
    return (

        // mapping the notes from App.js dynamically instead of repeatition
        <div className="notes-list">
            {notes.map((notes) => (
            <Note id={notes.id} text={notes.text} date={notes.date}/>
            
            ))}
        <AddNotes handleAddNote={handleAddNote}/>       
        </div>
        
    )
};


//must export in order to view in another components
export default NotesList; 