import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import notes from '../notes';


function App(){
  const [notes, setNote] = useState([]);

  function addNote(newNote){
    setNote(prevNote => {
      return [...prevNote,newNote];
    });
  }

  function deleteNote(id){
    setNote(prevNote =>{
      return prevNote.filter( (noteItem, index) => {
        return index !== id;
      });
    })
  }

return (
  <div>
   <Header />
    <CreateArea onAdd={addNote} />

      {notes.map((noteItem, index) => {
        return (
          <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete= {deleteNote}
        />
      );
      })}

   <Footer />
  </div>
  );

}
export default App;
