import { useState } from "react";
import NotesList from "./NotesList";
import { nanoid } from 'nanoid' // js ID generator




//this is our function that return HTML with JSX
const App = () => {

  //using useState hook to store our constantly changing data
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: 'First note- ',
    date: '10/12/1996'
  },
  {
    id: nanoid(),
    text: 'Sccond note',
    date: '09/12/1985'
  },
  {
    id: nanoid(),
    text: 'Third note',
    date: '08/05/1995'
  }
]);

  // function to pass into another components
  // this func so that addNotes can update the state - to be passed to Addnotes

  const AddNotes = (text) =>{
    const date= new Date();
    // it creates a new objects with the data that's passed on
    const newNote = {
      // to generate id
      id: nanoid(),
      // text from textarea
      text: text,
      // date note created
      date: date.toLocaleDateString(),
    }

    // this creates a new array instead of updating the current array
    // ...notes is a spread operator , to copy the current array of notes
    // newNote is to add a new note at the add
    const newNotes= [...notes, newNote];
    setNotes(newNotes);
 }
	return (

		<div className="container">
			<h1>Hello!</h1>
      {/*  pass the note variable so that noteList can render each notes - using props  */}
			<NotesList notes={notes} handleAddNote={AddNotes}/>
		</div>
	);
};

export default App;
