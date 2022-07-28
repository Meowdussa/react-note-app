import Note from "./components/Note";
import AddNotes from "./components/AddNotes";

// to get access to handleAddNote function by using props {handleAddNote}
const NotesList = ({notes, handleAddNote, handleDeleteNote}) =>{
    return (

        // mapping the notes from App.js dynamically instead of repeatition
        <div className="notes-list">
            {notes.map((note) => (
            <Note
             id={note.id} 
             text={note.text} 
             date={note.date}
             handleDeleteNote={handleDeleteNote}
             />
            
            ))}
        <AddNotes handleAddNote={handleAddNote}/>       
        </div>
        
    )
};


//must export in order to view in another components
export default NotesList; 