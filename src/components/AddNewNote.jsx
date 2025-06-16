import {Plus } from "lucide-react"
import { useState, useEffect } from "react";
import NewNotePopup from "./NewNotePopup"
import Note from "./Note"

function AddNewNote(){
  const [showPopup, setShowPopup] = useState(false);
  const [notes, setNotes] = useState(() => {
    // Load notes from localStorage on initial render
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [editingNote, setEditingNote] = useState(null);

  // Save notes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleOpenPopup = () => {
    setEditingNote(null);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setEditingNote(null);
  };

  const handleCreateNote = (newNote) => {
    if (editingNote) {
      setNotes(prevNotes => 
        prevNotes.map(note => 
          note.id === editingNote.id 
            ? { ...newNote, id: note.id, createdAt: note.createdAt }
            : note
        )
      );
    } else {
      setNotes(prevNotes => [...prevNotes, { ...newNote, id: Date.now() }]);
    }
    handleClosePopup();
  };

  const handleDeleteNote = (noteId) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId));
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
    setShowPopup(true);
  };

  return(
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(265px,_1fr))] gap-4 m-12">
      <div onClick={handleOpenPopup} className="bg-white py-[20px] px-[20px] flex justify-center items-center flex-col gap-5 cursor-pointer rounded-xl hover:shadow-lg transition-shadow">
        <i className="w-20 h-20 font-bold flex justify-center items-center text-[#88abff] border-dashed border-[#88abff] border-4 rounded-[50%] hover:border-solid transition-all">
          <Plus size="50"/>
        </i>
        <p className="text-[#88abff] text-lg">Add New Note</p>
      </div>

      {notes.map(note => (
        <Note 
          key={note.id} 
          note={note} 
          onDelete={handleDeleteNote}
          onEdit={handleEditNote}
        />
      ))}
      
      {showPopup && (
        <NewNotePopup 
          onClose={handleClosePopup} 
          onCreateNote={handleCreateNote}
          editingNote={editingNote}
        />
      )}
    </div>
  )
}
export default AddNewNote