import { useState } from "react";
import NotesList from "./NotesList";
import { nanoid } from 'nanoid' // js ID generator
import Search from "./components/Search";




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
    text: 'Second note',
    date: '09/12/1985'
  },
  {
    id: nanoid(),
    text: 'Third note',
    date: '08/05/1995'
  }
]);

const [searchText, setSearchText] = useState('');

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

    // accept ID as the parameter - nanoid in our note array
   /*  const deleteNote = (id) =>{
      // The filter function returns a new array of all elements that match the condition inside the filter array
      const newNotes = notes.filter((note)=> note.id!==id);
      setNotes(newNotes);
    } */

    const deleteNote = (id) => {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
      console.log("clicked")
    };
	return (

		<div className="container">
			<h1>Hello!</h1>
      {/*  pass the note variable so that noteList can render each notes - using props  */}
      <Search handleSearchNote={setSearchText}/>
			<NotesList 
      notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))} 
      handleAddNote={AddNotes}
      handleDeleteNote={deleteNote}
      />
		</div>
	);
};

export default App;
