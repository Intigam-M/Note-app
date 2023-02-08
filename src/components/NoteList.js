import {NotesContext} from '../context/notesContext'
import React, { useContext } from 'react'
import Note from "./Note"

const NoteList = () => {
    const{notes, dispatch}=useContext(NotesContext)
    return notes.length > 0 ? 
    (
        <div className="note-list">
            <ul>
                {notes.map((note) => (
                    < Note key={note.id} note={note} dispatch={dispatch} />
                ))}
            </ul>
        </div>
    ):
    (
        <div className="empty">No notes to show</div>
    )
}

export default NoteList




