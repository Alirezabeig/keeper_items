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
    })
  }

return (
  <div>
   <Header />
    <CreateArea onAdd={addNote} />

      {notes.map((noteItem) => {
        return <Note title={noteItem.title} content={noteItem.content}/>
      })}

   <Footer />
  </div>
  );

}
export default App;
